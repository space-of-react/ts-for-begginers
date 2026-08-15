// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { AdminUser } from '../src/10-пересечение-через-amp.решение';

describe('10 — пересечение типов (&)', () => {
  test('AdminUser — пересечение User и { role: string }', () => {
    expectTypeOf<AdminUser>().toEqualTypeOf<{ name: string } & { role: string }>();
  });
});
