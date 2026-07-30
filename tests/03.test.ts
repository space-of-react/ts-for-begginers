import { describe, test, expectTypeOf } from 'vitest';
import type { Product } from '../src/03-несколько-полей.проблема';

describe('03 — объектный тип с несколькими полями', () => {
  test('Product содержит поля title: string и price: number', () => {
    expectTypeOf<Product>().toEqualTypeOf<{ title: string; price: number }>();
  });
});
