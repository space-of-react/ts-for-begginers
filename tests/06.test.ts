import { describe, test, expectTypeOf } from 'vitest';
import type { Theme } from '../src/06-литеральный-тип.проблема';

describe('06 — литеральный тип', () => {
  test('тип Theme должен быть литералом "light" (а не string)', () => {
    expectTypeOf<Theme>().toEqualTypeOf<'light'>();
  });
});
