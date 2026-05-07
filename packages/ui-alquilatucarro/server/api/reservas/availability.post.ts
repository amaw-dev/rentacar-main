/**
 * Server proxy: availability lookup against rentacar-dashboard.
 * Keeps RESERVATION_API_KEY server-side and adds the x-api-key header
 * the dashboard requires. Body is forwarded as-is.
 */
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const baseUrl = config.rentacarDashboardBaseUrl
  const apiKey = config.rentacarApiKey

  if (!baseUrl || !apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Reservation backend not configured',
    })
  }

  const body = await readBody(event)
  const upstream = new URL('/api/reservations/availability', baseUrl).toString()

  try {
    return await $fetch(upstream, {
      method: 'POST',
      headers: { 'x-api-key': apiKey },
      body,
      timeout: 10_000,
      retry: 0,
    })
  } catch (e: any) {
    const status = e?.response?.status ?? 502
    throw createError({
      statusCode: status,
      statusMessage: e?.statusMessage || 'Upstream availability error',
      data: e?.data ?? {
        error: 'upstream_error',
        message: 'El servicio no está disponible en este momento. Por favor, intenta de nuevo en unos minutos.',
      },
    })
  }
})
