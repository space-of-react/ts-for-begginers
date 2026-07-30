import { describe, test, expectTypeOf } from 'vitest';
import type { User } from '../src/04-опциональное-поле.проблема';

describe('04 — опциональное поле объекта', () => {
  test('В User поле name обязательное, email — опциональное', () => {
    expectTypeOf<User>().toEqualTypeOf<{ name: string; email?: string }>();
  });
});
