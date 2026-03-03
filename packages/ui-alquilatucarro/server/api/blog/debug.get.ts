import { listFilesInStorage } from '../../utils/firebase-storage'

/**
 * GET /api/blog/debug?key=<blogApiKey>
 *
 * Temporary diagnostic endpoint — exposes Firebase config state and storage
 * listing result to diagnose why /api/blog/posts returns count: 0.
 *
 * Protected by blogApiKey query param. Remove after debugging is complete.
 */
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const { key } = getQuery(event)

  if (!key || key !== config.blogApiKey) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  const diagnostics: Record<string, unknown> = {
    timestamp: new Date().toISOString(),
    env: {
      firebaseProjectId: config.firebaseProjectId ? 'SET' : 'MISSING',
      firebaseClientEmail: config.firebaseClientEmail ? 'SET' : 'MISSING',
      firebasePrivateKey: config.firebasePrivateKey
        ? `SET (${(config.firebasePrivateKey as string).length} chars)`
        : 'MISSING',
      firebaseStorageBucket: (config.firebaseStorageBucket as string) || 'MISSING',
      franchise: config.public.rentacarFranchise,
    },
  }

  const prefix = `blog-posts/${config.public.rentacarFranchise}/`

  try {
    const files = await listFilesInStorage(prefix)
    diagnostics.storage = {
      success: true,
      prefix,
      count: files.length,
      sample: files.slice(0, 5),
    }
  } catch (error) {
    diagnostics.storage = {
      success: false,
      prefix,
      error: error instanceof Error ? error.message : String(error),
    }
  }

  return diagnostics
})
