export type User = {
  name: string;
  email: string;
};

export type UserPatch = Partial<User>;

export const patch: UserPatch = {
  email: "max@maxroslow.ru",
};
