import { apiService } from './api';
import type { ApiError } from '../types/api';
import type { NumberOfTopics } from '../types/diagnosticTest';

export const diagnosticService = {
  getNumberOfTopics: async () => {
    try {
      const response = await apiService.get<NumberOfTopics>(`/diagnostic/number_topics`);
      return response;
    } catch (error) {
      throw error as ApiError;
    }
  },
};