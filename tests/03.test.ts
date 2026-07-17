import { describe, test, expectTypeOf } from 'vitest';
import type { Product } from '../src/03-несколько-полей.проблема';

describe('03 — несколько полей', () => {
  test('тип Product должен быть { title: string; price: number }', () => {
    expectTypeOf<Product>().toEqualTypeOf<{ title: string; price: number }>();
  });
});
