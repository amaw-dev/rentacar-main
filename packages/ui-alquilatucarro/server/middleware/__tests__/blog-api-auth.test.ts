import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import type { H3Event } from 'h3'

// Mock Nuxt auto-imports
const mockUseRuntimeConfig = vi.fn()
const mockCreateError = vi.fn((options) => {
  const error = new Error(options.message) as any
  error.statusCode = options.statusCode
  error.data = options.data
  return error
})
const mockDefineEventHandler = vi.fn((handler) => handler)

// Setup global mocks
global.useRuntimeConfig = mockUseRuntimeConfig as any
global.createError = mockCreateError as any
global.defineEventHandler = mockDefineEventHandler as any

// Mock logger
vi.mock('../../utils/logger', () => ({
  logger: {
    info: vi.fn(),
    error: vi.fn()
  }
}))

// Import after mocks
const { logger } = await import('../../utils/logger')

describe('blog-api-auth middleware', () => {
  let middleware: any
  let mockEvent: Partial<H3Event>

  beforeEach(async () => {
    // Reset mocks
    vi.clearAllMocks()

    // Mock runtime config
    mockUseRuntimeConfig.mockReturnValue({
      blogApiKey: 'test-key-abc',
      blogApiAllowedIps: '192.168.1.1,10.0.0.1'
    })

    // Import middleware fresh for each test
    const module = await import('../blog-api-auth')
    middleware = module.default

    // Create mock event
    mockEvent = {
      path: '/api/blog/upload',
      node: {
        req: {
          headers: {
            'x-api-key': 'test-key-abc'
          },
          socket: {
            remoteAddress: '192.168.1.1'
          }
        },
        res: {
          setHeader: vi.fn()
        }
      }
    }
  })

  afterEach(() => {
    vi.resetModules()
  })

  describe('Path filtering', () => {
    it('should skip non-blog API paths', async () => {
      mockEvent.path = '/api/other'

      const result = await middleware(mockEvent as H3Event)

      expect(result).toBeUndefined()
      expect(logger.info).not.toHaveBeenCalled()
    })

    it('should skip posts-dynamic endpoint (public)', async () => {
      mockEvent.path = '/api/blog/posts-dynamic'

      const result = await middleware(mockEvent as H3Event)

      expect(result).toBeUndefined()
      expect(logger.info).not.toHaveBeenCalled()
    })

    it('should apply security to /api/blog/* endpoints', async () => {
      mockEvent.path = '/api/blog/upload'

      const result = await middleware(mockEvent as H3Event)

      expect(result).toBeUndefined() // Should pass all checks
      expect(logger.info).toHaveBeenCalledWith(
        'blog-api-auth',
        expect.objectContaining({
          ip: '192.168.1.1',
          path: '/api/blog/upload'
        })
      )
    })
  })

  describe('IP whitelist validation', () => {
    it('should allow whitelisted IP', async () => {
      mockEvent.node!.req.socket.remoteAddress = '192.168.1.1'

      const result = await middleware(mockEvent as H3Event)

      expect(result).toBeUndefined()
      expect(logger.error).not.toHaveBeenCalled()
    })

    it('should allow second whitelisted IP', async () => {
      mockEvent.node!.req.socket.remoteAddress = '10.0.0.1'

      const result = await middleware(mockEvent as H3Event)

      expect(result).toBeUndefined()
      expect(logger.error).not.toHaveBeenCalled()
    })

    it('should reject non-whitelisted IP', async () => {
      mockEvent.node!.req.socket.remoteAddress = '1.2.3.4'

      await expect(middleware(mockEvent as H3Event)).rejects.toThrow()

      expect(logger.error).toHaveBeenCalledWith(
        'blog-api-auth',
        expect.any(Error),
        expect.objectContaining({
          ip: '1.2.3.4',
          reason: 'IP not allowed'
        })
      )
    })

    it('should extract IP from x-forwarded-for header', async () => {
      mockEvent.node!.req.headers['x-forwarded-for'] = '10.0.0.1'
      mockEvent.node!.req.socket.remoteAddress = '127.0.0.1' // Should be ignored

      const result = await middleware(mockEvent as H3Event)

      expect(result).toBeUndefined()
      expect(logger.info).toHaveBeenCalledWith(
        'blog-api-auth',
        expect.objectContaining({
          ip: '10.0.0.1'
        })
      )
    })

    it('should handle multiple IPs in x-forwarded-for (use first)', async () => {
      mockEvent.node!.req.headers['x-forwarded-for'] = '192.168.1.1, 10.0.0.2, 127.0.0.1'

      const result = await middleware(mockEvent as H3Event)

      expect(result).toBeUndefined()
      expect(logger.info).toHaveBeenCalledWith(
        'blog-api-auth',
        expect.objectContaining({
          ip: '192.168.1.1'
        })
      )
    })
  })

  describe('API key validation', () => {
    it('should accept valid API key', async () => {
      mockEvent.node!.req.headers['x-api-key'] = 'test-key-abc'

      const result = await middleware(mockEvent as H3Event)

      expect(result).toBeUndefined()
      expect(logger.error).not.toHaveBeenCalled()
    })

    it('should reject invalid API key', async () => {
      mockEvent.node!.req.headers['x-api-key'] = 'wrong-key'

      await expect(middleware(mockEvent as H3Event)).rejects.toThrow()

      expect(logger.error).toHaveBeenCalledWith(
        'blog-api-auth',
        expect.any(Error),
        expect.objectContaining({
          reason: 'Invalid API key'
        })
      )
    })

    it('should reject missing API key', async () => {
      delete mockEvent.node!.req.headers['x-api-key']

      await expect(middleware(mockEvent as H3Event)).rejects.toThrow()

      expect(logger.error).toHaveBeenCalledWith(
        'blog-api-auth',
        expect.any(Error),
        expect.objectContaining({
          reason: 'Invalid API key'
        })
      )
    })
  })

  describe('Rate limiting', () => {
    it('should allow requests under limit (100/hour)', async () => {
      // Make 50 requests
      for (let i = 0; i < 50; i++) {
        const result = await middleware(mockEvent as H3Event)
        expect(result).toBeUndefined()
      }

      expect(logger.error).not.toHaveBeenCalled()
    })

    it('should reject request exceeding 100 requests/hour', async () => {
      // Make 100 requests (should all pass)
      for (let i = 0; i < 100; i++) {
        await middleware(mockEvent as H3Event)
      }

      // 101st request should fail
      await expect(middleware(mockEvent as H3Event)).rejects.toThrow()

      expect(logger.error).toHaveBeenCalledWith(
        'blog-api-auth',
        expect.any(Error),
        expect.objectContaining({
          reason: 'Rate limit exceeded'
        })
      )
    })

    it('should track rate limits per IP separately', async () => {
      const ip1Event = { ...mockEvent }
      const ip2Event = {
        ...mockEvent,
        node: {
          req: {
            headers: { 'x-api-key': 'test-key-abc' },
            socket: { remoteAddress: '10.0.0.1' }
          },
          res: {
            setHeader: vi.fn()
          }
        }
      }

      // Make 100 requests from IP1
      for (let i = 0; i < 100; i++) {
        await middleware(ip1Event as H3Event)
      }

      // IP2 should still be able to make requests
      const result = await middleware(ip2Event as H3Event)
      expect(result).toBeUndefined()
    })

    it('should reset rate limit after 1 hour', async () => {
      vi.useFakeTimers()
      const now = Date.now()
      vi.setSystemTime(now)

      // Make 100 requests
      for (let i = 0; i < 100; i++) {
        await middleware(mockEvent as H3Event)
      }

      // 101st should fail
      await expect(middleware(mockEvent as H3Event)).rejects.toThrow()

      // Advance time by 1 hour + 1ms
      vi.setSystemTime(now + 60 * 60 * 1000 + 1)

      // Should allow requests again
      const result = await middleware(mockEvent as H3Event)
      expect(result).toBeUndefined()

      vi.useRealTimers()
    })

    it('should set rate limit headers', async () => {
      await middleware(mockEvent as H3Event)

      const mockSetHeader = mockEvent.node!.res.setHeader as any
      expect(mockSetHeader).toHaveBeenCalledWith(
        'X-RateLimit-Remaining',
        expect.stringMatching(/^\d+$/)
      )
      expect(mockSetHeader).toHaveBeenCalledWith(
        'X-RateLimit-Reset',
        expect.stringMatching(/^\d+$/)
      )
    })
  })

  describe('Error responses', () => {
    it('should return 401 for invalid API key', async () => {
      mockEvent.node!.req.headers['x-api-key'] = 'wrong-key'

      try {
        await middleware(mockEvent as H3Event)
        expect.fail('Should have thrown error')
      } catch (error: any) {
        expect(error.statusCode).toBe(401)
        expect(error.message).toContain('Unauthorized')
      }
    })

    it('should return 403 for non-whitelisted IP', async () => {
      mockEvent.node!.req.socket.remoteAddress = '1.2.3.4'

      try {
        await middleware(mockEvent as H3Event)
        expect.fail('Should have thrown error')
      } catch (error: any) {
        expect(error.statusCode).toBe(403)
        expect(error.message).toContain('Forbidden')
      }
    })

    it('should return 429 for rate limit exceeded', async () => {
      // Make 100 requests
      for (let i = 0; i < 100; i++) {
        await middleware(mockEvent as H3Event)
      }

      // 101st request
      try {
        await middleware(mockEvent as H3Event)
        expect.fail('Should have thrown error')
      } catch (error: any) {
        expect(error.statusCode).toBe(429)
        expect(error.message).toContain('Too Many Requests')
      }
    })
  })

  describe('Configuration validation', () => {
    it('should throw 500 if API key not configured', async () => {
      mockUseRuntimeConfig.mockReturnValue({
        blogApiKey: '',
        blogApiAllowedIps: '192.168.1.1'
      })

      // Re-import middleware with new config
      vi.resetModules()
      const module = await import('../blog-api-auth')
      const freshMiddleware = module.default

      try {
        await freshMiddleware(mockEvent as H3Event)
        expect.fail('Should have thrown error')
      } catch (error: any) {
        expect(error.statusCode).toBe(500)
        expect(error.message).toContain('not configured')
      }
    })

    it('should throw 500 if allowed IPs not configured', async () => {
      mockUseRuntimeConfig.mockReturnValue({
        blogApiKey: 'test-key-abc',
        blogApiAllowedIps: ''
      })

      // Re-import middleware with new config
      vi.resetModules()
      const module = await import('../blog-api-auth')
      const freshMiddleware = module.default

      try {
        await freshMiddleware(mockEvent as H3Event)
        expect.fail('Should have thrown error')
      } catch (error: any) {
        expect(error.statusCode).toBe(500)
        expect(error.message).toContain('not configured')
      }
    })
  })
})
