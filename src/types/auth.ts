export interface LoginCredentials {
  email: string;
  password: string;
}

export interface UserData {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: "student" | "teacher" | "admin";
  target_score: number;
}

export interface AuthResponse {
  user: UserData;
  token: string;
}