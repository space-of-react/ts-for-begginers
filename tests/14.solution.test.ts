// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect, expectTypeOf } from 'vitest';
import { getAge } from '../src/14-тип-возврата.решение';

describe('14 — тип возврата', () => {
  test('getAge должна возвращать number', () => {
    expectTypeOf(getAge).returns.toEqualTypeOf<number>();
  });

  test('getAge() возвращает 25', () => {
    expect(getAge()).toBe(25);
  });
});
