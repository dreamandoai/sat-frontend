import { apiService } from './api';
import type { ApiError } from '../types/api';
import type { LoginCredentials, AuthResponse } from '../types/auth';

const storeToken = (token: string): void => {
  localStorage.setItem('access_token', token);
};

const getToken = (): string | null => {
  return localStorage.getItem('access_token');
};

const removeToken = (): void => {
  localStorage.removeItem('access_token');
};

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      const response = await apiService.post<AuthResponse>('/auth/login', credentials);
      storeToken(response.token)
      return response;
    } catch (error) {
      removeToken();
      throw error as ApiError;
    }
  },

  logout: () => {
    removeToken();
  },

  getCurrentToken: (): string | null => {
    return getToken();
  },

  isAuthenticated: (): boolean => {
    return !!getToken();
  }
};