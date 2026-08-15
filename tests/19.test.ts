import { describe, test, expectTypeOf } from 'vitest';
import type { PublicUser } from '../src/19-omit.проблема';

describe('19 — утилита Omit', () => {
  test('PublicUser — это User без поля email', () => {
    expectTypeOf<PublicUser>().toEqualTypeOf<{ name: string; age: number }>();
  });
});
