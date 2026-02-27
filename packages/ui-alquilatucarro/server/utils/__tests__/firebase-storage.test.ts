import { describe, it, expect, vi, beforeEach } from 'vitest'

// Create mocks
const mockSave = vi.fn()
const mockMakePublic = vi.fn()
const mockExists = vi.fn()
const mockDownload = vi.fn()
const mockGetFiles = vi.fn()
const mockFileInstance = vi.fn()
const mockBucket = vi.fn()
const mockStorage = vi.fn()
const mockApp = vi.fn()
const mockInitializeApp = vi.fn()
const mockCert = vi.fn()

// Mock firebase-admin before importing
vi.mock('firebase-admin', () => ({
  default: {
    initializeApp: (...args: any[]) => mockInitializeApp(...args),
    credential: {
      cert: (...args: any[]) => mockCert(...args)
    }
  }
}))

// Mock Nuxt runtime config
vi.mock('#imports', () => ({
  useRuntimeConfig: vi.fn(() => ({
    firebaseProjectId: 'test-project',
    firebaseClientEmail: 'test@test.iam.gserviceaccount.com',
    firebasePrivateKey: '-----BEGIN PRIVATE KEY-----\\ntest\\n-----END PRIVATE KEY-----\\n',
    firebaseStorageBucket: 'test-bucket.appspot.com'
  }))
}))

// Mock logger and error handler
vi.mock('../logger', () => ({
  logger: {
    info: vi.fn(),
    error: vi.fn(),
    metric: vi.fn()
  }
}))

vi.mock('../error-handler', () => ({
  BlogApiError: class BlogApiError extends Error {
    statusCode: number
    context?: any
    constructor(message: string, statusCode: number, context?: any) {
      super(message)
      this.statusCode = statusCode
      this.context = context
      this.name = 'BlogApiError'
    }
  }
}))

describe('Firebase Storage Client', () => {
  beforeEach(async () => {
    vi.clearAllMocks()

    // Reset singleton
    const { _resetAppForTesting } = await import('../firebase-storage')
    _resetAppForTesting()

    // Setup default mock behavior
    mockSave.mockResolvedValue(undefined)
    mockMakePublic.mockResolvedValue(undefined)
    mockExists.mockResolvedValue([true])
    mockDownload.mockResolvedValue([Buffer.from('test content')])
    mockGetFiles.mockResolvedValue([[{ name: 'test-file.webp' }]])

    mockFileInstance.mockImplementation((path: string) => ({
      save: mockSave,
      makePublic: mockMakePublic,
      exists: mockExists,
      download: mockDownload,
      name: path
    }))

    mockBucket.mockImplementation(() => ({
      file: mockFileInstance,
      getFiles: mockGetFiles,
      name: 'test-bucket.appspot.com'
    }))

    mockStorage.mockImplementation(() => ({
      bucket: mockBucket
    }))

    mockApp.mockImplementation(() => ({
      storage: mockStorage
    }))

    mockInitializeApp.mockImplementation(() => ({
      storage: mockStorage
    }))

    mockCert.mockReturnValue({ mock: 'credential' })
  })

  describe('uploadToStorage', () => {
    it('should upload a buffer and return public URL', async () => {
      const { uploadToStorage } = await import('../firebase-storage')
      const { logger } = await import('../logger')

      const buffer = Buffer.from('test image data')
      const path = 'blog-images/featured/test.webp'
      const contentType = 'image/webp'

      const result = await uploadToStorage(buffer, path, contentType)

      expect(result).toBe('https://storage.googleapis.com/test-bucket.appspot.com/blog-images/featured/test.webp')
      expect(mockSave).toHaveBeenCalledWith(buffer, {
        metadata: {
          contentType,
          cacheControl: 'public, max-age=31536000'
        }
      })
      expect(mockMakePublic).toHaveBeenCalled()
      expect(logger.metric).toHaveBeenCalledWith(
        'firebase-storage-upload',
        expect.any(Number),
        expect.objectContaining({
          path,
          contentType,
          size: buffer.length
        })
      )
    })

    it('should handle upload errors', async () => {
      const { uploadToStorage } = await import('../firebase-storage')
      const { logger } = await import('../logger')
      const { BlogApiError } = await import('../error-handler')

      // Mock error on save
      mockSave.mockRejectedValueOnce(new Error('Network error'))

      const buffer = Buffer.from('test')
      const path = 'test.webp'
      const contentType = 'image/webp'

      await expect(uploadToStorage(buffer, path, contentType))
        .rejects.toThrow(BlogApiError)

      expect(logger.error).toHaveBeenCalledWith(
        'firebase-storage-upload',
        expect.any(Error),
        expect.objectContaining({ path, contentType })
      )
    })

    it('should replace escaped newlines in private key', async () => {
      const { uploadToStorage } = await import('../firebase-storage')

      // Trigger initialization by calling a function
      const buffer = Buffer.from('test')
      await uploadToStorage(buffer, 'test.webp', 'image/webp')

      // Verify cert was called with unescaped newlines
      expect(mockCert).toHaveBeenCalledWith(
        expect.objectContaining({
          privateKey: expect.stringContaining('\n')
        })
      )
    })
  })

  describe('downloadFromStorage', () => {
    it('should download a file and return buffer', async () => {
      const { downloadFromStorage } = await import('../firebase-storage')
      const { logger } = await import('../logger')

      const path = 'blog-posts/test-post.md'
      const result = await downloadFromStorage(path)

      expect(result).toBeInstanceOf(Buffer)
      expect(result.toString()).toBe('test content')
      expect(mockExists).toHaveBeenCalled()
      expect(mockDownload).toHaveBeenCalled()
      expect(logger.metric).toHaveBeenCalledWith(
        'firebase-storage-download',
        expect.any(Number),
        expect.objectContaining({
          path,
          size: expect.any(Number)
        })
      )
    })

    it('should throw 404 if file does not exist', async () => {
      const { downloadFromStorage } = await import('../firebase-storage')
      const { BlogApiError } = await import('../error-handler')

      // Mock file does not exist
      mockExists.mockResolvedValueOnce([false])

      await expect(downloadFromStorage('nonexistent.md'))
        .rejects.toThrow(BlogApiError)
    })

    it('should handle download errors', async () => {
      const { downloadFromStorage } = await import('../firebase-storage')
      const { logger } = await import('../logger')
      const { BlogApiError } = await import('../error-handler')

      // Mock error on download
      mockDownload.mockRejectedValueOnce(new Error('Download failed'))

      await expect(downloadFromStorage('test.md'))
        .rejects.toThrow(BlogApiError)

      expect(logger.error).toHaveBeenCalled()
    })
  })

  describe('listFilesInStorage', () => {
    it('should list files with prefix', async () => {
      const { listFilesInStorage } = await import('../firebase-storage')
      const { logger } = await import('../logger')

      const prefix = 'blog-posts/'
      const result = await listFilesInStorage(prefix)

      expect(result).toEqual(['test-file.webp'])
      expect(mockGetFiles).toHaveBeenCalledWith({ prefix })
      expect(logger.metric).toHaveBeenCalledWith(
        'firebase-storage-list',
        expect.any(Number),
        expect.objectContaining({
          prefix,
          count: 1
        })
      )
    })

    it('should handle list errors', async () => {
      const { listFilesInStorage } = await import('../firebase-storage')
      const { logger } = await import('../logger')
      const { BlogApiError } = await import('../error-handler')

      // Mock error on getFiles
      mockGetFiles.mockRejectedValueOnce(new Error('Access denied'))

      await expect(listFilesInStorage('blog-posts/'))
        .rejects.toThrow(BlogApiError)

      expect(logger.error).toHaveBeenCalled()
    })

    it('should return empty array for prefix with no files', async () => {
      const { listFilesInStorage } = await import('../firebase-storage')

      // Mock empty result
      mockGetFiles.mockResolvedValueOnce([[]])

      const result = await listFilesInStorage('empty-prefix/')

      expect(result).toEqual([])
    })
  })

  describe('Firebase App Singleton', () => {
    it('should initialize Firebase app once', async () => {
      const { uploadToStorage } = await import('../firebase-storage')

      await uploadToStorage(Buffer.from('test'), 'test.webp', 'image/webp')

      // Verify initialization was called
      expect(mockInitializeApp).toHaveBeenCalled()
      expect(mockCert).toHaveBeenCalledWith(
        expect.objectContaining({
          projectId: 'test-project',
          clientEmail: 'test@test.iam.gserviceaccount.com',
          privateKey: expect.stringContaining('\n')
        })
      )
    })
  })
})
