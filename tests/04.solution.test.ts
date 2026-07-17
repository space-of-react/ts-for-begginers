// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { User } from '../src/04-опциональное-поле.решение';

describe('04 — опциональное поле', () => {
  test('тип User: name обязателен, email опционален', () => {
    expectTypeOf<User>().toEqualTypeOf<{ name: string; email?: string }>();
  });
});
