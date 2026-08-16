# TypeScript для начинающих

Курс по TypeScript без React: 23 задания на чистых `.ts`-файлах, от `type Name = string` до дискриминированных объединений. Каждое задание и его решение запускаются отдельной npm-командой и проверяются тестами.

Идея простая: сначала разобраться, как устроена система типов сама по себе — один тип, одна функция, одна ошибка компилятора, которую нужно убрать. React, сборщики и Node-специфика тут не нужны, всё крутится вокруг самого TypeScript.

## Установка

```bash
git clone https://github.com/space-of-react/ts-for-begginers.git
cd ts-for-begginers
npm install
```

## Как запускать задания

Запуск задачи (например, задание 01):

```bash
npm run task:01
```

Запуск решения:

```bash
npm run solution-01
```

Обе команды открывают Vitest UI в браузере, где видно, какие тесты прошли, а какие упали. Устанавливать отдельно ничего не нужно.

Проверить типы во всём проекте разом:

```bash
npm run typecheck
```

## Список заданий

| № | Тема | Запуск задания | Запуск решения |
|----|------|----------------|----------------|
| 01 | Простой type alias | `npm run task:01` | `npm run solution-01` |
| 02 | Объект с одним полем | `npm run task:02` | `npm run solution-02` |
| 03 | Несколько полей | `npm run task:03` | `npm run solution-03` |
| 04 | Опциональное поле | `npm run task:04` | `npm run solution-04` |
| 05 | Массивы | `npm run task:05` | `npm run solution-05` |
| 06 | Литеральный тип | `npm run task:06` | `npm run solution-06` |
| 07 | Union из литералов | `npm run task:07` | `npm run solution-07` |
| 08 | Union с примитивами | `npm run task:08` | `npm run solution-08` |
| 09 | extends в interface | `npm run task:09` | `npm run solution-09` |
| 10 | Пересечение через & | `npm run task:10` | `npm run solution-10` |
| 11 | type vs interface | `npm run task:11` | `npm run solution-11` |
| 12 | Параметры функции | `npm run task:12` | `npm run solution-12` |
| 13 | Тип возврата | `npm run task:13` | `npm run solution-13` |
| 14 | void | `npm run task:14` | `npm run solution-14` |
| 15 | Опциональный параметр | `npm run task:15` | `npm run solution-15` |
| 16 | Тип функции | `npm run task:16` | `npm run solution-16` |
| 17 | Partial | `npm run task:17` | `npm run solution-17` |
| 18 | Pick | `npm run task:18` | `npm run solution-18` |
| 19 | Omit | `npm run task:19` | `npm run solution-19` |
| 20 | Record | `npm run task:20` | `npm run solution-20` |
| 21 | typeof guard | `npm run task:21` | `npm run solution-21` |
| 22 | Оператор in | `npm run task:22` | `npm run solution-22` |
| 23 | Дискриминированный union | `npm run task:23` | `npm run solution-23` |

## Как проходить курс

Каждое задание — один маленький файл в `src/`. Есть два вида файлов: `*.проблема.ts` и `*.решение.ts`.

В файле `*.проблема.ts` лежит код, который либо не компилируется, либо размечен слишком широко (например, через `any`). Задача — довести его до состояния, когда тесты становятся зелёными.

Чтобы пройти задание:

1. Запусти задачу:

   ```bash
   npm run task:01
   ```

2. Попробуй решить самостоятельно:
   - открой файл задания в `src/` (например, `src/01-простой-type-alias.проблема.ts`);
   - прочитай текст ошибки компилятора — в TypeScript он почти всегда указывает, чего не хватает;
   - при необходимости загляни в документацию TypeScript.

3. Проверь результат в Vitest UI — часть тестов сравнивает сами типы (`expectTypeOf`), часть проверяет поведение кода в рантайме.

4. Проверь решение:

   ```bash
   npm run solution-01
   ```

   Сравни свой вариант с предложенным. Возможно, твой окажется лучше.

## Что нужно знать заранее

Базовый JavaScript: переменные, объекты, массивы, функции, стрелочные функции. React и Node.js не требуются.

## Советы

- Не спеши открывать решение — сначала прочитай текст ошибки, он обычно и есть подсказка.
- Пользуйся документацией — [TypeScript Handbook](https://www.typescriptlang.org/docs/) и раздел [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) закрывают почти все темы курса.
- Экспериментируй — меняй тип, смотри, как реагирует компилятор.
- Сравнивай решения — твой подход может быть интереснее готового.
