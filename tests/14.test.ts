import { describe, test, expect, expectTypeOf } from 'vitest';
import { getAge } from '../src/14-тип-возврата.проблема';

describe('14 — тип возвращаемого значения', () => {
  test('getAge возвращает значение типа number', () => {
    expectTypeOf(getAge).returns.toEqualTypeOf<number>();
  });

  test('getAge() возвращает 25', () => {
    expect(getAge()).toBe(25);
  });
});
