// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { Names } from '../src/05-массивы.решение';

describe('05 — массивы', () => {
  test('тип Names должен быть string[] (а не any)', () => {
    expectTypeOf<Names>().toEqualTypeOf<string[]>();
  });
});
