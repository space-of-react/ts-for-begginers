export interface User {
  name: string;
}

export interface Admin extends User {
  role: string;
}

export const a: Admin = { 
  name: "Макс", 
  role: "lead" 
};
