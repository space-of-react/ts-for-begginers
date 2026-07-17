// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { Admin } from '../src/10-extends-в-interface.решение';

describe('10 — extends в interface', () => {
  test('Admin должен наследовать name у User: { name: string; role: string }', () => {
    expectTypeOf<Admin>().toEqualTypeOf<{ name: string; role: string }>();
  });
});
