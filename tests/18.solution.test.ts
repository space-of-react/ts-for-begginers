// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { UserPatch } from '../src/18-partial.решение';

describe('18 — Partial', () => {
  test('UserPatch = Partial<User>: все поля опциональны', () => {
    expectTypeOf<UserPatch>().toEqualTypeOf<{ name?: string; email?: string }>();
  });
});
