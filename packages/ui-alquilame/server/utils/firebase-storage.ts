import admin from 'firebase-admin'
import { useRuntimeConfig } from '#imports'
import { logger } from './logger'
import { BlogApiError } from './error-handler'

let app: admin.app.App | null = null

/**
 * Reset app singleton for testing purposes
 * @internal
 */
export function _resetAppForTesting() {
  app = null
}

/**
 * Get or initialize Firebase Admin app (singleton pattern)
 */
function getFirebaseApp(): admin.app.App {
  if (app) {
    return app
  }

  const config = useRuntimeConfig()

  // Validate required config
  if (!config.firebaseProjectId || !config.firebaseClientEmail || !config.firebasePrivateKey || !config.firebaseStorageBucket) {
    throw new BlogApiError(
      'Firebase configuration incomplete',
      500,
      { missing: ['projectId', 'clientEmail', 'privateKey', 'storageBucket'].filter(key => !config[`firebase${key.charAt(0).toUpperCase()}${key.slice(1)}`]) }
    )
  }

  try {
    app = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: config.firebaseProjectId,
        clientEmail: config.firebaseClientEmail,
        // Handle newline characters (environment variables may escape them)
        privateKey: config.firebasePrivateKey.replace(/\\n/g, '\n')
      }),
      storageBucket: config.firebaseStorageBucket,
      ...(config.firebaseDatabaseUrl ? { databaseURL: config.firebaseDatabaseUrl } : {})
    })

    logger.info('firebase-storage-init', {
      bucket: config.firebaseStorageBucket,
      projectId: config.firebaseProjectId
    })

    return app
  } catch (error) {
    logger.error('firebase-storage-init', error)
    throw new BlogApiError(
      'Failed to initialize Firebase Admin',
      500,
      { error: error instanceof Error ? error.message : String(error) }
    )
  }
}

/**
 * Upload a buffer to Firebase Storage
 * @param buffer File buffer to upload
 * @param path Destination path in storage (e.g., "blog-images/featured/123.webp")
 * @param contentType MIME type (e.g., "image/webp")
 * @returns Public URL of uploaded file
 */
export async function uploadToStorage(
  buffer: Buffer,
  path: string,
  contentType: string
): Promise<string> {
  const startTime = Date.now()

  try {
    const bucket = getFirebaseApp().storage().bucket()
    const file = bucket.file(path)

    // Upload buffer with metadata
    await file.save(buffer, {
      metadata: {
        contentType,
        cacheControl: 'public, max-age=31536000' // 1 year cache
      }
    })

    // Make file publicly accessible
    await file.makePublic()

    // Get public URL
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${path}`

    const duration = Date.now() - startTime
    logger.metric('firebase-storage-upload', duration, {
      path,
      contentType,
      size: buffer.length
    })

    return publicUrl
  } catch (error) {
    logger.error('firebase-storage-upload', error, { path, contentType })
    throw new BlogApiError(
      'Failed to upload file to storage',
      500,
      { path, error: error instanceof Error ? error.message : String(error) }
    )
  }
}

/**
 * Download a file from Firebase Storage
 * @param path File path in storage (e.g., "blog-posts/my-post.md")
 * @returns File contents as Buffer
 */
export async function downloadFromStorage(path: string): Promise<Buffer> {
  const startTime = Date.now()

  try {
    const bucket = getFirebaseApp().storage().bucket()
    const file = bucket.file(path)

    // Check if file exists
    const [exists] = await file.exists()
    if (!exists) {
      throw new BlogApiError(
        'File not found in storage',
        404,
        { path }
      )
    }

    // Download file
    const [buffer] = await file.download()

    const duration = Date.now() - startTime
    logger.metric('firebase-storage-download', duration, {
      path,
      size: buffer.length
    })

    return buffer
  } catch (error) {
    if (error instanceof BlogApiError) {
      throw error
    }

    logger.error('firebase-storage-download', error, { path })
    throw new BlogApiError(
      'Failed to download file from storage',
      500,
      { path, error: error instanceof Error ? error.message : String(error) }
    )
  }
}

/**
 * List all files with a specific prefix in Firebase Storage
 * @param prefix Path prefix (e.g., "blog-posts/" or "blog-images/featured/")
 * @returns Array of file paths
 */
export async function listFilesInStorage(prefix: string): Promise<string[]> {
  const startTime = Date.now()

  try {
    const bucket = getFirebaseApp().storage().bucket()
    const [files] = await bucket.getFiles({ prefix })

    const filePaths = files.map(file => file.name)

    const duration = Date.now() - startTime
    logger.metric('firebase-storage-list', duration, {
      prefix,
      count: filePaths.length
    })

    return filePaths
  } catch (error) {
    logger.error('firebase-storage-list', error, { prefix })
    throw new BlogApiError(
      'Failed to list files from storage',
      500,
      { prefix, error: error instanceof Error ? error.message : String(error) }
    )
  }
}
