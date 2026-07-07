export type User = {
  name: string;
};

export type AdminUser = User & { role: string };

export const u: AdminUser = { 
  name: "Макс", 
  role: "admin" 
};