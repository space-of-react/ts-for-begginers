export type User = {
  name: string;
  email: string;
  age: number;
};

export type UserPreview = Pick<User, "name">;

const preview: UserPreview = {
  name: "Макс",
  // @ts-expect-error в превью должно быть только имя, без email
  email: "max@maxroslow.ru",
};
