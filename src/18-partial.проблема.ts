export type User = {
  name: string;
  email: string;
};

export type UserPatch = User;

export const patch: UserPatch = {
  email: "max@maxroslow.ru",
};
