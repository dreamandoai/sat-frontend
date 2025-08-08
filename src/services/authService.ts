import { apiService } from './api';
import type { ApiError } from '../types/api';
import type { LoginCredentials, AuthResponse } from '../types/auth';

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      return await apiService.post<AuthResponse>('/auth/login', credentials);
    } catch (error) {
      throw error as ApiError;
    }
  },
  logout: async (): Promise<void> => {
  },
};