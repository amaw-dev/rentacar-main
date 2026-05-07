import { describe, it, expect } from 'vitest';
import { mapDashboardReservationStatus } from '../dashboardStatus';

describe('mapDashboardReservationStatus', () => {
  it('maps reservado → Confirmado', () => {
    expect(mapDashboardReservationStatus('reservado')).toBe('Confirmado');
  });

  it('maps pendiente → Pendiente', () => {
    expect(mapDashboardReservationStatus('pendiente')).toBe('Pendiente');
  });

  it('maps mensualidad → Pendiente (legacy parity)', () => {
    expect(mapDashboardReservationStatus('mensualidad')).toBe('Pendiente');
  });

  it('maps sin_disponibilidad → Sin disponibilidad', () => {
    expect(mapDashboardReservationStatus('sin_disponibilidad')).toBe('Sin disponibilidad');
  });

  it('normalizes casing and whitespace', () => {
    expect(mapDashboardReservationStatus('Reservado')).toBe('Confirmado');
    expect(mapDashboardReservationStatus('PENDIENTE')).toBe('Pendiente');
    expect(mapDashboardReservationStatus('  mensualidad  ')).toBe('Pendiente');
  });

  it('falls back to Pendiente for unknown values (incl. dashboard-only states)', () => {
    expect(mapDashboardReservationStatus('algo_raro')).toBe('Pendiente');
    expect(mapDashboardReservationStatus('nueva')).toBe('Pendiente');
    expect(mapDashboardReservationStatus('cancelado')).toBe('Pendiente');
  });

  it('falls back to Pendiente for null/undefined/empty', () => {
    expect(mapDashboardReservationStatus(null)).toBe('Pendiente');
    expect(mapDashboardReservationStatus(undefined)).toBe('Pendiente');
    expect(mapDashboardReservationStatus('')).toBe('Pendiente');
  });
});
