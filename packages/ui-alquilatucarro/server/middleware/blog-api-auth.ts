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

import { logger } from '../utils/logger'

// Rate limit storage
interface RateLimitEntry {
  requests: number
  resetAt: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()

// Clean up old entries every 5 minutes to prevent memory leak
const CLEANUP_INTERVAL = 5 * 60 * 1000 // 5 minutes
let lastCleanup = Date.now()

/**
 * Clean up expired rate limit entries
 */
function cleanupRateLimitStore() {
  const now = Date.now()
  if (now - lastCleanup < CLEANUP_INTERVAL) {
    return
  }

  const expiredKeys: string[] = []
  for (const [ip, entry] of rateLimitStore.entries()) {
    if (now > entry.resetAt) {
      expiredKeys.push(ip)
    }
  }

  for (const key of expiredKeys) {
    rateLimitStore.delete(key)
  }

  lastCleanup = now
}

/**
 * Extract client IP from request
 */
function getClientIp(event: any): string {
  // Prefer x-forwarded-for header (for proxies/load balancers)
  const forwardedFor = event.node.req.headers['x-forwarded-for']
  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs, use first one (client IP)
    return forwardedFor.split(',')[0].trim()
  }

  // Fallback to socket remote address
  return event.node.req.socket.remoteAddress || 'unknown'
}

/**
 * Check if IP is in whitelist
 */
function isIpAllowed(ip: string, allowedIps: string[]): boolean {
  return allowedIps.includes(ip)
}

/**
 * Validate API key using constant-time comparison
 * Prevents timing attacks
 */
function isApiKeyValid(apiKey: string | undefined, expectedKey: string): boolean {
  if (!apiKey || apiKey.length !== expectedKey.length) {
    return false
  }

  // Constant-time comparison
  let result = 0
  for (let i = 0; i < apiKey.length; i++) {
    result |= apiKey.charCodeAt(i) ^ expectedKey.charCodeAt(i)
  }

  return result === 0
}

/**
 * Check rate limit for IP
 * Returns: { allowed: boolean, remaining: number, resetAt: number }
 */
function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now()
  const RATE_LIMIT = 100 // requests per hour
  const WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds

  let entry = rateLimitStore.get(ip)

  // Initialize or reset if expired
  if (!entry || now > entry.resetAt) {
    entry = {
      requests: 0,
      resetAt: now + WINDOW
    }
    rateLimitStore.set(ip, entry)
  }

  // Increment request count
  entry.requests++

  // Check if limit exceeded
  const allowed = entry.requests <= RATE_LIMIT
  const remaining = Math.max(0, RATE_LIMIT - entry.requests)

  return {
    allowed,
    remaining,
    resetAt: entry.resetAt
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
  if (event.path === '/api/blog/posts-dynamic') {
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
  if (!isIpAllowed(clientIp, allowedIps)) {
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
  const rateLimit = checkRateLimit(clientIp)
  if (!rateLimit.allowed) {
    logger.error('blog-api-auth', new Error('Rate limit exceeded'), {
      ip: clientIp,
      path: event.path,
      reason: 'Rate limit exceeded'
    })

    throw createError({
      statusCode: 429,
      message: 'Too Many Requests: Rate limit exceeded'
    })
  }

  // Set rate limit headers
  event.node.res.setHeader('X-RateLimit-Remaining', rateLimit.remaining.toString())
  event.node.res.setHeader('X-RateLimit-Reset', rateLimit.resetAt.toString())

  // Clean up old entries periodically
  cleanupRateLimitStore()

  // Log successful authentication
  logger.info('blog-api-auth', {
    ip: clientIp,
    path: event.path,
    remaining: rateLimit.remaining
  })
})
