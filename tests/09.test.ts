import { readFileSync } from 'node:fs';
import { describe, test, expect, expectTypeOf } from 'vitest';
import type { Product } from '../src/09-простой-interface.проблема';

const source = readFileSync(
  new URL('../src/09-простой-interface.проблема.ts', import.meta.url),
  'utf8',
);

describe('09 — интерфейс (interface)', () => {
  test('Product объявлен через ключевое слово interface', () => {
    expect(source).toMatch(/interface\s+Product/);
  });

  test('Product содержит поля title: string и price: number', () => {
    expectTypeOf<Product>().toEqualTypeOf<{ title: string; price: number }>();
  });
});
