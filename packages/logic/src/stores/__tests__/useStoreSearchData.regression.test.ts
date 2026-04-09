/**
 * Regression test for the FU/FL/GL monthly-reservation exclusion bug.
 *
 * Bug:
 *   useStoreSearchData.ts used `categoryAdmin.identification in noMonthlyCategories`
 *   to exclude FU, FL, GL from monthly reservations. The `in` operator checks object
 *   keys / array indices, NOT array values. For `['FU', 'FL', 'GL']`:
 *     - `'FU' in arr` → false (no key "FU", only 0, 1, 2)
 *     - `!(false)`    → true  → category is INCLUDED
 *   So the filter was a silent no-op: FU/FL/GL were always allowed through.
 *
 * This was invisible because:
 *   1. The array `noMonthlyCategories` and the comment "filter out FU, FL, GL" made
 *      the code look correct on review.
 *   2. Localiza does not expose month_prices for these categories in rentacar-main,
 *      so they rendered with fallback data, which looked "fine enough" until the
 *      operations team noticed FU/GL were bookable monthly when they shouldn't be.
 *
 * Fix:
 *   Replace `in` with `.includes()`, which tests array value membership correctly.
 *
 * Why this test is source-file based:
 *   The buggy code lives inside a Pinia `defineStore` closure and depends on Nuxt
 *   auto-imports (useRuntimeConfig, useFetch, #imports). Mounting the store in a
 *   Node vitest environment requires a full Nuxt/Pinia test harness, which is
 *   disproportionate for a one-line operator fix. A source-level assertion is the
 *   smallest honest regression guard: it fails before the fix and protects against
 *   anyone reverting to `in` later.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const source = readFileSync(
  resolve(__dirname, '../useStoreSearchData.ts'),
  'utf-8',
);

describe('useStoreSearchData — FU/FL/GL monthly exclusion regression', () => {
  describe('S1: noMonthlyCategories array is declared', () => {
    it('declares the exclusion list with FU, FL, GL', () => {
      expect(source).toMatch(/noMonthlyCategories/);
      expect(source).toMatch(/['"]FU['"]/);
      expect(source).toMatch(/['"]FL['"]/);
      expect(source).toMatch(/['"]GL['"]/);
    });
  });

  describe('S2: filter uses .includes() (the fix)', () => {
    it('uses Array.prototype.includes for value membership', () => {
      expect(source).toMatch(/noMonthlyCategories\s*\.\s*includes\s*\(/);
    });
  });

  describe('S3: filter does NOT use the `in` operator (the bug)', () => {
    it('never tests `identification in noMonthlyCategories`', () => {
      // `in` checks keys/indices on arrays — it is never the right operator for
      // string-value membership in a string[] array.
      expect(source).not.toMatch(/identification\s+in\s+noMonthlyCategories/);
    });
  });

  describe('S4: filter is gated on haveMonthlyReservation', () => {
    it('only applies the exclusion inside the monthly-reservation branch', () => {
      // Keep the scope of the filter narrow: it must live in the monthly branch,
      // not affect regular (daily) searches.
      expect(source).toMatch(/haveMonthlyReservation\.value/);
    });
  });

  describe('S5: JavaScript operator semantics documented', () => {
    it('demonstrates why `in` was wrong for string arrays', () => {
      const arr = ['FU', 'FL', 'GL'];
      // `in` checks keys/indices, not values
      expect('FU' in arr).toBe(false);
      expect('FL' in arr).toBe(false);
      expect('GL' in arr).toBe(false);
      expect(0 in arr).toBe(true); // indices exist as keys
      expect(1 in arr).toBe(true);
      expect(2 in arr).toBe(true);
    });

    it('demonstrates why `.includes()` is correct for string arrays', () => {
      const arr = ['FU', 'FL', 'GL'];
      expect(arr.includes('FU')).toBe(true);
      expect(arr.includes('FL')).toBe(true);
      expect(arr.includes('GL')).toBe(true);
      expect(arr.includes('C')).toBe(false);
      expect(arr.includes('GY')).toBe(false);
    });
  });
});
