import { describe, test, expect, expectTypeOf } from 'vitest';
import { greet } from '../src/15-опциональный-параметр.проблема';

describe('15 — параметр со значением по умолчанию', () => {
  test('greet можно вызвать без аргументов', () => {
    expectTypeOf(greet).toBeCallableWith();
  });

  test('greet() без аргументов возвращает "Привет, гость"', () => {
    expect(greet()).toBe('Привет, гость');
  });
});
