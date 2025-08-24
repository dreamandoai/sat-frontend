export interface UserData {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: "student" | "teacher";
  target_score: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
  role: "student" | "teacher"
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
  target_score?: number;
  role: "student" | "teacher"; 
}

export interface RegisterResponse {
  user: UserData;
  status: string;
}