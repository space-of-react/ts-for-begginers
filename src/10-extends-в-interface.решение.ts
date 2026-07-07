export interface User {
  name: string;
}

export interface Admin extends User {
  role: string;
}

const a: Admin = { 
  name: "Макс", 
  role: "lead" 
};
