import { apiService } from './api';
import type { ApiError } from '../types/api';
import type { LoginCredentials, AuthResponse, UserData } from '../types/auth';

const storeToken = (token: string): void => {
  localStorage.setItem('access_token', token);
};

const storeUser = (user: UserData): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

const getUser = (): UserData | null => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

const getToken = (): string | null => {
  return localStorage.getItem('access_token');
};

const removeToken = (): void => {
  localStorage.removeItem('access_token');
};

const removeUser = (): void => {
  localStorage.removeItem('user');
};

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      const response = await apiService.post<AuthResponse>('/auth/login', credentials);
      storeToken(response.token);
      storeUser(response.user);
      return response;
    } catch (error) {
      removeToken();
      removeUser();
      throw error as ApiError;
    }
  },

  logout: () => {
    removeToken();
    removeUser();
  },

  getCurrentToken: (): string | null => {
    return getToken();
  },

  getCurrentUser: (): UserData | null => {
    return getUser();
  },

  isAuthenticated: (): boolean => {
    return !!getToken();
  }
};