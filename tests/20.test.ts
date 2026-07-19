import { describe, test, expectTypeOf } from 'vitest';
import type { PublicUser } from '../src/20-omit.проблема';

describe('20 — утилита Omit', () => {
  test('PublicUser — это User без поля email', () => {
    expectTypeOf<PublicUser>().toEqualTypeOf<{ name: string; age: number }>();
  });
});
