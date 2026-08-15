// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect, expectTypeOf } from 'vitest';
import { getAge } from '../src/13-тип-возврата.решение';

describe('13 — тип возвращаемого значения', () => {
  test('getAge возвращает значение типа number', () => {
    expectTypeOf(getAge).returns.toEqualTypeOf<number>();
  });

  test('getAge() возвращает 25', () => {
    expect(getAge()).toBe(25);
  });
});
