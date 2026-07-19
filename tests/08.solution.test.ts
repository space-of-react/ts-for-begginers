// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { Id } from '../src/08-union-с-примитивами.решение';

describe('08 — объединение примитивов (union)', () => {
  test('Id может быть строкой или числом (string | number)', () => {
    expectTypeOf<Id>().toEqualTypeOf<string | number>();
  });
});
