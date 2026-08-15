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
      // Запускается всегда ОДНО задание (`vitest run tests/NN.test.ts`), но tsc
      // видит весь проект и ругается на ещё не решённые СОСЕДНИЕ задания. Эти
      // ошибки к текущему прогону не относятся, а стоят дорого: тесты задания
      // проходят, `Type Errors no errors`, но exit-код красный из-за трёх
      // десятков чужих `Unhandled Source Error` — и задание не засчитывается
      // при полностью зелёном списке проверок.
      ignoreSourceErrors: true,
    },
  },
});
