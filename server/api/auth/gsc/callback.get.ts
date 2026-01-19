import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)

  const code = query.code as string
  const error = query.error as string

  if (error) {
    return sendRedirect(event, '/seo/herramientas?error=' + encodeURIComponent(error))
  }

  if (!code) {
    return sendRedirect(event, '/seo/herramientas?error=no_code')
  }

  const clientId = config.gscClientId
  const clientSecret = config.gscClientSecret
  const redirectUri = config.gscRedirectUri || `${getRequestURL(event).origin}/api/auth/gsc/callback`

  if (!clientId || !clientSecret) {
    return sendRedirect(event, '/seo/herramientas?error=missing_credentials')
  }

  try {
    // Exchange code for tokens
    const tokenResponse = await $fetch<{
      access_token: string
      refresh_token?: string
      expires_in: number
      token_type: string
      scope: string
    }>('https://oauth2.googleapis.com/token', {
      method: 'POST',
      body: {
        client_id: clientId,
        client_secret: clientSecret,
        code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri
      }
    })

    // Store tokens securely
    const tokensDir = resolve(process.cwd(), 'docs/seo/data/.tokens')
    if (!existsSync(tokensDir)) {
      mkdirSync(tokensDir, { recursive: true })
    }

    const tokenData = {
      access_token: tokenResponse.access_token,
      refresh_token: tokenResponse.refresh_token,
      expires_at: Date.now() + (tokenResponse.expires_in * 1000),
      token_type: tokenResponse.token_type,
      scope: tokenResponse.scope,
      created_at: new Date().toISOString()
    }

    writeFileSync(
      resolve(tokensDir, 'gsc-tokens.json'),
      JSON.stringify(tokenData, null, 2)
    )

    // Update tools.json to reflect connected status
    const toolsPath = resolve(process.cwd(), 'docs/seo/data/tools.json')
    const tools = JSON.parse(await useStorage().getItem('assets:server:tools.json') as string || '{}')

    // We'll update tools.json through the API instead
    return sendRedirect(event, '/seo/herramientas?success=gsc_connected')

  } catch (err: any) {
    console.error('GSC OAuth error:', err)
    return sendRedirect(event, '/seo/herramientas?error=' + encodeURIComponent(err.message || 'token_exchange_failed'))
  }
})
