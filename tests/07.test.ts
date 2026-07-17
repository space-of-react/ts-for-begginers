import { describe, test, expectTypeOf } from 'vitest';
import type { Theme } from '../src/07-union-из-литералов.проблема';

describe('07 — union из литералов', () => {
  test('тип Theme должен быть "light" | "dark"', () => {
    expectTypeOf<Theme>().toEqualTypeOf<'light' | 'dark'>();
  });
});
