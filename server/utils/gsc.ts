import { getFirestoreDb } from './firebase'

interface GscTokens {
  access_token: string
  refresh_token?: string
  expires_at: number
  token_type: string
  scope: string
  created_at: string
}

interface GscSearchAnalyticsResponse {
  rows?: Array<{
    keys: string[]
    clicks: number
    impressions: number
    ctr: number
    position: number
  }>
  responseAggregationType?: string
}

const TOKENS_COLLECTION = 'seo_config'
const TOKENS_DOC = 'gsc_tokens'

export async function getGscTokens(): Promise<GscTokens | null> {
  try {
    const db = getFirestoreDb()
    const doc = await db.collection(TOKENS_COLLECTION).doc(TOKENS_DOC).get()

    if (!doc.exists) {
      return null
    }

    return doc.data() as GscTokens
  } catch (error) {
    console.error('Error getting GSC tokens from Firestore:', error)
    return null
  }
}

export async function saveGscTokens(tokens: GscTokens): Promise<void> {
  try {
    const db = getFirestoreDb()
    await db.collection(TOKENS_COLLECTION).doc(TOKENS_DOC).set(tokens)
  } catch (error) {
    console.error('Error saving GSC tokens to Firestore:', error)
    throw error
  }
}

export async function refreshGscToken(refreshToken: string): Promise<GscTokens | null> {
  const config = useRuntimeConfig()

  try {
    const response = await $fetch<{
      access_token: string
      expires_in: number
      token_type: string
      scope: string
    }>('https://oauth2.googleapis.com/token', {
      method: 'POST',
      body: {
        client_id: config.gscClientId,
        client_secret: config.gscClientSecret,
        refresh_token: refreshToken,
        grant_type: 'refresh_token'
      }
    })

    const tokens: GscTokens = {
      access_token: response.access_token,
      refresh_token: refreshToken, // Keep the same refresh token
      expires_at: Date.now() + (response.expires_in * 1000),
      token_type: response.token_type,
      scope: response.scope,
      created_at: new Date().toISOString()
    }

    await saveGscTokens(tokens)
    return tokens
  } catch (error) {
    console.error('Failed to refresh GSC token:', error)
    return null
  }
}

export async function getValidGscToken(): Promise<string | null> {
  let tokens = await getGscTokens()

  if (!tokens) {
    return null
  }

  // Check if token is expired (with 5 min buffer)
  if (tokens.expires_at < Date.now() + 300000) {
    if (!tokens.refresh_token) {
      return null
    }
    tokens = await refreshGscToken(tokens.refresh_token)
    if (!tokens) {
      return null
    }
  }

  return tokens.access_token
}

export async function queryGscSearchAnalytics(options: {
  siteUrl: string
  startDate: string
  endDate: string
  dimensions?: string[]
  rowLimit?: number
}): Promise<GscSearchAnalyticsResponse | null> {
  const accessToken = await getValidGscToken()

  if (!accessToken) {
    return null
  }

  try {
    const response = await $fetch<GscSearchAnalyticsResponse>(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(options.siteUrl)}/searchAnalytics/query`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: {
          startDate: options.startDate,
          endDate: options.endDate,
          dimensions: options.dimensions || ['query'],
          rowLimit: options.rowLimit || 100
        }
      }
    )

    return response
  } catch (error) {
    console.error('GSC API error:', error)
    return null
  }
}

export async function isGscConnected(): Promise<boolean> {
  const tokens = await getGscTokens()
  return tokens !== null && !!tokens.refresh_token
}
