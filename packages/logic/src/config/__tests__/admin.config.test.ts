/**
 * Scenario tests for admin.config.ts month_prices update (April 2026).
 *
 * Source of truth: /tmp/precios.png (provided by user).
 * - 11 categories updated with new 1k/2k prices (3k = 2k new value)
 * - Dates: 01-04-2026 → 30-04-2026
 * - FU and GL explicitly left with empty month_prices[] per user instruction
 * - LU from screenshot ignored (not present in code)
 * - LY, G, LP, GX not in screenshot — values preserved
 */
import { describe, it, expect } from 'vitest';
import { adminDataConfig } from '../admin.config';
import type { VehicleCategory } from '../admin.config';

const getCategory = (id: string): VehicleCategory => {
  const cat = adminDataConfig.categories.find((c) => c.id === id);
  if (!cat) throw new Error(`Category ${id} not found`);
  return cat;
};

const NEW_PRICES: Record<string, { k1: number; k2: number }> = {
  C:  { k1: 4_149_000, k2: 4_635_000 },
  CX: { k1: 4_542_000, k2: 5_029_000 },
  F:  { k1: 4_935_000, k2: 5_423_000 },
  FX: { k1: 5_097_000, k2: 5_585_000 },
  FL: { k1: 6_197_000, k2: 6_685_000 },
  GC: { k1: 6_560_000, k2: 7_271_000 },
  G4: { k1: 7_134_000, k2: 7_846_000 },
  VP: { k1: 7_134_000, k2: 7_621_000 },
  LE: { k1: 7_709_000, k2: 9_196_000 },
  GR: { k1: 11_755_000, k2: 13_242_000 },
  GY: { k1: 16_864_000, k2: 18_351_000 },
};

describe('admin.config — April 2026 price update', () => {
  describe('S1–S4: updated categories have new values and April 2026 dates', () => {
    for (const [id, { k1, k2 }] of Object.entries(NEW_PRICES)) {
      it(`${id}: 1k=${k1}, 2k=${k2}, 3k=${k2}, dates 01-04-2026 → 30-04-2026`, () => {
        const cat = getCategory(id);
        expect(cat.month_prices).toHaveLength(1);
        const p = cat.month_prices[0];
        expect(p['1k_kms']).toBe(k1);
        expect(p['2k_kms']).toBe(k2);
        expect(p['3k_kms']).toBe(k2); // S3: 3k == 2k
        expect(p.init_date).toBe('01-04-2026');
        expect(p.end_date).toBe('30-04-2026');
      });
    }
  });

  describe('S5: FU and GL remain empty', () => {
    it('FU has empty month_prices', () => {
      expect(getCategory('FU').month_prices).toEqual([]);
    });
    it('GL has empty month_prices', () => {
      expect(getCategory('GL').month_prices).toEqual([]);
    });
  });

  describe('S6: untouched categories preserve original values', () => {
    it('LY preserves 5788990 / 5788990 / 6579990', () => {
      const p = getCategory('LY').month_prices[0];
      expect(p['1k_kms']).toBe(5788990);
      expect(p['2k_kms']).toBe(5788990);
      expect(p['3k_kms']).toBe(6579990);
    });
    it('G preserves 0 / 6584990 / 6584990', () => {
      const p = getCategory('G').month_prices[0];
      expect(p['1k_kms']).toBe(0);
      expect(p['2k_kms']).toBe(6584990);
      expect(p['3k_kms']).toBe(6584990);
    });
    it('LP preserves 0 / 8288990 / 8288990', () => {
      const p = getCategory('LP').month_prices[0];
      expect(p['1k_kms']).toBe(0);
      expect(p['2k_kms']).toBe(8288990);
      expect(p['3k_kms']).toBe(8288990);
    });
    it('GX preserves 0 / 7961990 / 7961990', () => {
      const p = getCategory('GX').month_prices[0];
      expect(p['1k_kms']).toBe(0);
      expect(p['2k_kms']).toBe(7961990);
      expect(p['3k_kms']).toBe(7961990);
    });
  });
});
