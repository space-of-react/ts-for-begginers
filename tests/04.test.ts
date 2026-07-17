import { describe, test, expectTypeOf } from 'vitest';
import type { User } from '../src/04-опциональное-поле.проблема';

describe('04 — опциональное поле', () => {
  test('тип User: name обязателен, email опционален', () => {
    expectTypeOf<User>().toEqualTypeOf<{ name: string; email?: string }>();
  });
});
