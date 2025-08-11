export interface UserData {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: "student" | "teacher" | "admin";
  target_score: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: UserData;
  token: string;
}

export interface RegisterCredentials {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  target_score: number; 
}

export interface RegisterResponse {
  user: UserData;
  status: string;
}