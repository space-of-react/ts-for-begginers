import { describe, test, expect, expectTypeOf } from 'vitest';
import { greet } from '../src/16-опциональный-параметр.проблема';

describe('16 — параметр со значением по умолчанию', () => {
  test('greet можно вызвать без аргументов', () => {
    expectTypeOf(greet).toBeCallableWith();
  });

  test('greet() без аргументов возвращает "Привет, гость"', () => {
    expect(greet()).toBe('Привет, гость');
  });
});
