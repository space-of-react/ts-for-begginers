import { describe, test, expectTypeOf } from 'vitest';
import type { Names } from '../src/05-массивы.проблема';

describe('05 — массивы', () => {
  test('тип Names должен быть string[] (а не any)', () => {
    expectTypeOf<Names>().toEqualTypeOf<string[]>();
  });
});
