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
 * Get or initialize Firebase Admin app (singleton pattern).
 * Exported so other server utilities (e.g. middleware) can guarantee Firebase
 * is initialized before calling firebase-admin services directly.
 */
export function getFirebaseApp(): admin.app.App {
  if (app) {
    return app
  }

  const config = useRuntimeConfig()

  // Only storageBucket is required. In Firebase Functions Gen 2 (Cloud Run),
  // ADC (Application Default Credentials) handles auth automatically via the
  // attached service account — no explicit credentials needed.
  // Fallback: derive bucket from GCLOUD_PROJECT env var set by Cloud Run.
  const bucket = (config.firebaseStorageBucket as string) ||
    (process.env.GCLOUD_PROJECT ? `${process.env.GCLOUD_PROJECT}.firebasestorage.app` : '')

  if (!bucket) {
    throw new BlogApiError('Firebase Storage bucket not configured', 500, {})
  }

  // Use explicit credentials only when ALL three are provided (e.g., local dev or cross-project).
  // In Firebase Functions Gen 2 (Cloud Run), ADC handles auth without explicit credentials.
  const presentCreds = [config.firebaseProjectId, config.firebaseClientEmail, config.firebasePrivateKey]
    .filter(Boolean).length
  if (presentCreds > 0 && presentCreds < 3) {
    logger.warn('firebase-storage-init', {
      message: 'Partial Firebase credentials detected — falling back to ADC. Check CI secrets.',
      presentCount: presentCreds,
    })
  }
  const hasExplicitCreds = presentCreds === 3

  try {
    app = admin.initializeApp({
      storageBucket: bucket,
      ...(hasExplicitCreds ? {
        credential: admin.credential.cert({
          projectId: config.firebaseProjectId as string,
          clientEmail: config.firebaseClientEmail as string,
          // Handle newline characters (environment variables may escape them)
          privateKey: (config.firebasePrivateKey as string).replace(/\\n/g, '\n')
        })
      } : {}),
      ...(config.firebaseDatabaseUrl ? { databaseURL: config.firebaseDatabaseUrl as string } : {})
    })

    logger.info('firebase-storage-init', {
      bucket,
      usingADC: !hasExplicitCreds
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
 * Delete a file from Firebase Storage
 * @param path File path in storage (e.g., "blog-posts/franchise/my-post.md")
 * @throws BlogApiError 404 if file does not exist, 500 on storage error
 */
export async function deleteFromStorage(path: string): Promise<void> {
  const startTime = Date.now()

  try {
    const bucket = getFirebaseApp().storage().bucket()
    const file = bucket.file(path)

    const [exists] = await file.exists()
    if (!exists) {
      throw new BlogApiError('File not found in storage', 404, { path })
    }

    await file.delete()

    logger.metric('firebase-storage-delete', Date.now() - startTime, { path })
  } catch (error) {
    if (error instanceof BlogApiError) throw error

    logger.error('firebase-storage-delete', error, { path })
    throw new BlogApiError(
      'Failed to delete file from storage',
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
