import type { ReservationApiStatus } from './types/data/ReservationApiStatus';

const DASHBOARD_TO_LEGACY: Record<string, ReservationApiStatus> = {
  reservado: 'Confirmado',
  pendiente: 'Pendiente',
  mensualidad: 'Pendiente',
  sin_disponibilidad: 'Sin disponibilidad',
};

// Fallback to "Pendiente" because the store consumer
// (useStoreReservationForm.ts:213-217) only branches on Pendiente/Confirmado;
// any other value strands the user on the form. Ops should monitor logs for
// unmapped values to detect dashboard-side enum drift.
export function mapDashboardReservationStatus(
  raw: string | null | undefined,
): ReservationApiStatus {
  if (!raw) return 'Pendiente';
  const key = raw.trim().toLowerCase();
  const mapped = DASHBOARD_TO_LEGACY[key];
  if (mapped) return mapped;
  if (typeof console !== 'undefined') {
    console.warn(
      `[dashboardStatus] unmapped reservationStatus="${raw}" → falling back to "Pendiente"`,
    );
  }
  return 'Pendiente';
}
