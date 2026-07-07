export type User = {
  name: string;
  email: string;
};

export type UserPatch = Partial<User>;

const patch: UserPatch = {
  email: "max@maxroslow.ru",
};
