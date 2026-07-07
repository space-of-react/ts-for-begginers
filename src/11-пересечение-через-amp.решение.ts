export type User = {
  name: string;
};

export type AdminUser = User & { role: string };

const u: AdminUser = { 
  name: "Макс", 
  role: "admin" 
};