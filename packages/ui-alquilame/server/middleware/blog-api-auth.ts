/**
 * Blog API Security Middleware
 *
 * Protection layers:
 * 1. IP whitelist validation
 * 2. API key authentication
 * 3. Rate limiting (100 requests/hour per IP)
 *
 * Only applies to /api/blog/* endpoints (except public endpoints)
 */

import { createHmac, timingSafeEqual } from 'crypto'
import { getDatabase } from 'firebase-admin/database'
import { logger } from '../utils/logger'

// Rate limit constants
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in ms
const RATE_LIMIT_MAX_REQUESTS = 100

// Rate limit result interface
interface RateLimitResult {
  allowed: boolean
  remaining: number
  resetAt: number
}

/**
 * Extract client IP from request
 * Only trusts x-forwarded-for when behind trusted proxy (Firebase/GCP)
 */
function getClientIp(event: any): string {
  // Use H3's getRequestIP as primary source (handles Nitro/Node environments correctly)
  let ip = getRequestIP(event) || event.node.req.socket?.remoteAddress || 'unknown'

  // Normalize IPv4-mapped IPv6 addresses (e.g. ::ffff:127.0.0.1 → 127.0.0.1)
  if (ip.startsWith('::ffff:')) {
    ip = ip.slice(7)
  }

  // Normalize IPv6 loopback to IPv4 (::1 → 127.0.0.1)
  if (ip === '::1') {
    ip = '127.0.0.1'
  }

  // Only trust X-Forwarded-For from Firebase/GCP proxy ranges (RFC1918 private networks)
  const isBehindTrustedProxy =
    ip.startsWith('10.') ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(ip) ||
    ip.startsWith('192.168.')

  if (isBehindTrustedProxy) {
    const forwardedFor = event.node.req.headers['x-forwarded-for']
    if (forwardedFor) {
      return forwardedFor.split(',')[0].trim()
    }
  }

  return ip
}

/**
 * Check if IP is in whitelist
 */
function isIpAllowed(ip: string, allowedIps: string[]): boolean {
  return allowedIps.includes(ip)
}

/**
 * Validate API key using constant-time comparison
 * Prevents byte-by-byte and length timing attacks via HMAC normalization
 */
function isApiKeyValid(apiKey: string | undefined, expectedKey: string): boolean {
  if (!apiKey) return false
  // HMAC normalizes both inputs to fixed-length digest — eliminates length timing attack
  const hmacKey = Buffer.alloc(32, 0)
  const a = createHmac('sha256', hmacKey).update(apiKey).digest()
  const b = createHmac('sha256', hmacKey).update(expectedKey).digest()
  return timingSafeEqual(a, b)
}

/**
 * Check rate limit for IP using Firebase Realtime Database
 * Ensures global state across all serverless instances
 */
async function checkRateLimit(clientIp: string): Promise<RateLimitResult> {
  try {
    const db = getDatabase()
    // Sanitize IP for use as Firebase RTDB key: dots and slashes are path separators in RTDB
    const safeIpKey = clientIp.replace(/[.#$[\]/]/g, '_')
    const rateLimitRef = db.ref(`blog-api/rate-limits/${safeIpKey}`)

    const snapshot = await rateLimitRef.transaction((current) => {
      const now = Date.now()

      // Reset if window expired or first request
      if (!current || now >= current.resetAt) {
        return {
          count: 1,
          resetAt: now + RATE_LIMIT_WINDOW
        }
      }

      // Increment counter
      return {
        count: current.count + 1,
        resetAt: current.resetAt
      }
    })

    const { count, resetAt } = snapshot.snapshot.val()
    const allowed = count <= RATE_LIMIT_MAX_REQUESTS
    const remaining = Math.max(0, RATE_LIMIT_MAX_REQUESTS - count)

    return { allowed, remaining, resetAt }
  } catch {
    // Firebase not available — fail open in dev only, fail closed in production
    if (process.env.NODE_ENV === 'development') {
      return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS, resetAt: Date.now() + RATE_LIMIT_WINDOW }
    }
    return { allowed: false, remaining: 0, resetAt: Date.now() + RATE_LIMIT_WINDOW }
  }
}

/**
 * Main middleware handler
 */
export default defineEventHandler(async (event) => {
  // Only apply to /api/blog/* endpoints
  if (!event.path.startsWith('/api/blog/')) {
    return
  }

  // Skip public endpoints
  const publicPaths = ['/api/blog/posts-dynamic', '/api/blog/posts']
  const isDynamicPost = event.path.startsWith('/api/blog/post/')
  if (publicPaths.includes(event.path) || isDynamicPost) {
    return
  }

  // Get runtime config
  const config = useRuntimeConfig()

  // Validate configuration
  if (!config.blogApiKey || !config.blogApiAllowedIps) {
    throw createError({
      statusCode: 500,
      message: 'Blog API not configured properly'
    })
  }

  // Extract client IP
  const clientIp = getClientIp(event)

  // Parse allowed IPs
  const allowedIps = config.blogApiAllowedIps.split(',').map((ip: string) => ip.trim())

  // 1. IP Whitelist validation
  // In Nitro dev server the socket is an internal IPC — remoteAddress is unavailable.
  // Skip IP check only when undetectable in development; production always enforces it.
  const ipUndetectable = clientIp === 'unknown'
  const isDev = process.env.NODE_ENV === 'development'

  if (!ipUndetectable && !isIpAllowed(clientIp, allowedIps)) {
    logger.error('blog-api-auth', new Error('IP not allowed'), {
      ip: clientIp,
      path: event.path,
      reason: 'IP not allowed'
    })

    throw createError({
      statusCode: 403,
      message: 'Forbidden: IP not allowed'
    })
  }

  if (ipUndetectable && !isDev) {
    // In production, undetectable IP is suspicious — reject
    throw createError({
      statusCode: 403,
      message: 'Forbidden: IP not allowed'
    })
  }

  // 2. API Key validation
  const apiKey = event.node.req.headers['x-api-key'] as string | undefined
  if (!isApiKeyValid(apiKey, config.blogApiKey)) {
    logger.error('blog-api-auth', new Error('Invalid API key'), {
      ip: clientIp,
      path: event.path,
      reason: 'Invalid API key'
    })

    throw createError({
      statusCode: 401,
      message: 'Unauthorized: Invalid API key'
    })
  }

  // 3. Rate limiting
  const rateLimitResult = await checkRateLimit(clientIp)

  // Set headers BEFORE checking if allowed (ensure headers on ALL responses)
  event.node.res.setHeader('X-RateLimit-Limit', RATE_LIMIT_MAX_REQUESTS.toString())
  event.node.res.setHeader('X-RateLimit-Remaining', rateLimitResult.remaining.toString())
  event.node.res.setHeader('X-RateLimit-Reset', rateLimitResult.resetAt.toString())

  if (!rateLimitResult.allowed) {
    logger.error('blog-api-auth-rate-limit', new Error('Rate limit exceeded'), {
      ip: clientIp,
      limit: RATE_LIMIT_MAX_REQUESTS
    })

    throw createError({
      statusCode: 429,
      message: 'Too many requests. Please try again later.'
    })
  }

  // Log successful authentication
  logger.info('blog-api-auth', {
    ip: clientIp,
    path: event.path,
    remaining: rateLimitResult.remaining
  })
})
