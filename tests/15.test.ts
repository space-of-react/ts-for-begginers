import { describe, test, expectTypeOf } from 'vitest';
import type { Logger } from '../src/15-void.проблема';

describe('15 — void', () => {
  test('Logger должен возвращать void: (message: string) => void', () => {
    expectTypeOf<Logger>().toEqualTypeOf<(message: string) => void>();
  });
});
