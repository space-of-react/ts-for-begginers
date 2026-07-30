import { describe, test, expectTypeOf } from 'vitest';
import type { Names } from '../src/05-массивы.проблема';

describe('05 — тип массива', () => {
  test('Names — это массив строк (string[])', () => {
    expectTypeOf<Names>().toEqualTypeOf<string[]>();
  });
});
