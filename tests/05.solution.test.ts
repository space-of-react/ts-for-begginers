// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { Names } from '../src/05-массивы.решение';

describe('05 — тип массива', () => {
  test('Names — это массив строк (string[])', () => {
    expectTypeOf<Names>().toEqualTypeOf<string[]>();
  });
});
