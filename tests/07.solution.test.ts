// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { Theme } from '../src/07-union-из-литералов.решение';

describe('07 — union из литералов', () => {
  test('тип Theme должен быть "light" | "dark"', () => {
    expectTypeOf<Theme>().toEqualTypeOf<'light' | 'dark'>();
  });
});
