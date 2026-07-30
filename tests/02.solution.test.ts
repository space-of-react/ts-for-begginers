// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { User } from '../src/02-объект-с-одним-полем.решение';

describe('02 — объектный тип с одним полем', () => {
  test('User описывает объект с полем name: string', () => {
    expectTypeOf<User>().toEqualTypeOf<{ name: string }>();
  });
});
