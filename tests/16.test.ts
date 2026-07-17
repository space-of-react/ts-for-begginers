import { describe, test, expect, expectTypeOf } from 'vitest';
import { greet } from '../src/16-опциональный-параметр.проблема';

describe('16 — опциональный параметр (значение по умолчанию)', () => {
  test('greet можно вызвать без аргумента', () => {
    expectTypeOf(greet).toBeCallableWith();
  });

  test('greet() без аргумента возвращает приветствие гостю', () => {
    expect(greet()).toBe('Привет, гость');
  });
});
