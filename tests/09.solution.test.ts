// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { readFileSync } from 'node:fs';
import { describe, test, expect, expectTypeOf } from 'vitest';
import type { Product } from '../src/09-простой-interface.решение';

const source = readFileSync(
  new URL('../src/09-простой-interface.решение.ts', import.meta.url),
  'utf8',
);

describe('09 — простой interface', () => {
  test('Product должен быть объявлен через ключевое слово interface', () => {
    expect(source).toMatch(/interface\s+Product/);
  });

  test('структура Product: { title: string; price: number }', () => {
    expectTypeOf<Product>().toEqualTypeOf<{ title: string; price: number }>();
  });
});
