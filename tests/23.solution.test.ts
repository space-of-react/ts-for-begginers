// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect, vi } from 'vitest';
import { speak } from '../src/23-оператор-in.решение';

describe('23 — оператор in', () => {
  test('для кота вызывается meow (а не bark)', () => {
    const cat = { meow: vi.fn() };
    speak(cat);
    expect(cat.meow).toHaveBeenCalledTimes(1);
  });

  test('для собаки вызывается bark', () => {
    const dog = { bark: vi.fn() };
    speak(dog);
    expect(dog.bark).toHaveBeenCalledTimes(1);
  });
});
