import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Обычные (runtime) тесты
    include: ['tests/**/*.test.ts'],
    // Проверка типов — главное для курса про TypeScript.
    // expectTypeOf() ловит даже `any`, чего обычный tsc не делает.
    typecheck: {
      enabled: true,
      include: ['tests/**/*.test.ts'],
      tsconfig: './tsconfig.tests.json',
      // Ошибки внутри самих файлов src/ мы не показываем как отдельные:
      // за корректность отвечают явные проверки в тестах (читаются понятнее).
      ignoreSourceErrors: true,
    },
  },
});
