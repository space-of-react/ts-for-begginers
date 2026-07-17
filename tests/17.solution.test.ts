// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { Handler } from '../src/17-тип-функции.решение';

describe('17 — тип функции', () => {
  test('Handler должен быть (event: string) => void', () => {
    expectTypeOf<Handler>().toEqualTypeOf<(event: string) => void>();
  });
});
