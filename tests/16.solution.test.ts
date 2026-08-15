// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { Handler } from '../src/16-тип-функции.решение';

describe('16 — тип функции', () => {
  test('Handler — тип функции-обработчика (event: string) => void', () => {
    expectTypeOf<Handler>().toEqualTypeOf<(event: string) => void>();
  });
});
