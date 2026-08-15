// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { Admin } from '../src/09-extends-в-interface.решение';

describe('09 — наследование интерфейсов (extends)', () => {
  test('Admin наследует поля User и добавляет role', () => {
    expectTypeOf<Admin>().toEqualTypeOf<{ name: string; role: string }>();
  });
});
