import { describe, test, expectTypeOf } from 'vitest';
import type { Handler } from '../src/17-тип-функции.проблема';

describe('17 — тип функции', () => {
  test('Handler — тип функции-обработчика (event: string) => void', () => {
    expectTypeOf<Handler>().toEqualTypeOf<(event: string) => void>();
  });
});
