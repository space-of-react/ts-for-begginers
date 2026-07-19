// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { Product } from '../src/03-несколько-полей.решение';

describe('03 — объектный тип с несколькими полями', () => {
  test('Product содержит поля title: string и price: number', () => {
    expectTypeOf<Product>().toEqualTypeOf<{ title: string; price: number }>();
  });
});
