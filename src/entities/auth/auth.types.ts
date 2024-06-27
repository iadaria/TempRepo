export type User = {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
};

export type LoginDto = {
  email: string;
  password: string;
};

export type AuthResponse = {
  user: User;
  token: string;
};
