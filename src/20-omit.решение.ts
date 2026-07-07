export type User = {
  name: string;
  email: string;
  age: number;
};

export type PublicUser = Omit<User, "email">;

const publicUser: PublicUser = {
  name: "Макс",
  age: 25,
  // @ts-expect-error в публичном профиле не должно быть email
  email: "max@maxroslow.ru",
};
