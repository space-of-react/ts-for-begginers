export type Scores = any;

export const scores: Scores = {
  math: 90,
  history: 85,
};

// @ts-expect-error оценка должна быть числом, а не строкой
scores.russian = "отлично";
