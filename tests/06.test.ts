import { describe, test, expectTypeOf } from 'vitest';
import type { Theme } from '../src/06-литеральный-тип.проблема';

describe('06 — литеральный тип', () => {
  test('Theme допускает единственное значение "light"', () => {
    expectTypeOf<Theme>().toEqualTypeOf<'light'>();
  });
});
