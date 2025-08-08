export interface LoginCredentials {
  email: string;
  password: string;
}

export interface UserData {
  id: string;
  email: string;
  name: string;
  token: string;
}

export interface AuthResponse {
  user: UserData;
  token: string;
}