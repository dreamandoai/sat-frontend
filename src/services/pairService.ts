import { apiService } from './api';
import type { ApiError } from '../types/api';
import type { TeacherShort } from '../types/bookaclass';

export const pairService = {
  getTeachers: async () => {
    try {
      const response = await apiService.get<TeacherShort[]>('/pair/teachers');
      return response;
    } catch (error) {
      throw error as ApiError;
    }
  },
  checkPairingStatus: async () => {
    try {
      const response = await apiService.get<boolean>("/pair/check-pair");
      return response;
    } catch (error) {
      throw error as ApiError;
    }
  }
};