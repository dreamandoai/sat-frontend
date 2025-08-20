import { apiService } from './api';
import type { ApiError } from '../types/api';
import type { Topic } from '../types/diagnostic';

export const diagnosticService = {
  getTopics: async () => {
    try {
      const response = await apiService.get<Topic[]>(`/diagnostic/topics`);
      return response;
    } catch (error) {
      throw error as ApiError;
    }
  },
};