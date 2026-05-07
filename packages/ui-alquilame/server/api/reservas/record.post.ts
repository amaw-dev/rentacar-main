import { mapDashboardReservationStatus } from '@rentacar-main/logic/utils'

/**
 * Server proxy: reservation record against rentacar-dashboard.
 * Translates the dashboard's status vocabulary (reservado / pendiente /
 * mensualidad) into the legacy Pendiente / Confirmado / Sin disponibilidad
 * surface the rentacar-main store consumes. Keeps RESERVATION_API_KEY
 * server-side.
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
  const upstreamUrl = new URL('/api/reservations', baseUrl).toString()

  try {
    const upstream = await $fetch<{ reserveCode: string; reservationStatus: string }>(
      upstreamUrl,
      {
        method: 'POST',
        headers: { 'x-api-key': apiKey },
        body,
        timeout: 10_000,
        retry: 0,
      },
    )

    return {
      reserveCode: upstream.reserveCode,
      reservationStatus: mapDashboardReservationStatus(upstream.reservationStatus),
    }
  } catch (e: any) {
    const status = e?.response?.status ?? 502
    throw createError({
      statusCode: status,
      statusMessage: e?.statusMessage || 'Upstream reservation error',
      data: e?.data ?? {
        error: 'upstream_error',
        message: 'No se pudo registrar la reserva. Por favor, intenta de nuevo en unos minutos.',
      },
    })
  }
})
