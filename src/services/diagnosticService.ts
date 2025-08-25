import { apiService } from './api';
import type { ApiError } from '../types/api';
import type { AdaptiveQuestion, Topic, SubmitAnswer } from '../types/diagnostic';

export const diagnosticService = {
  getTopics: async () => {
    try {
      const response = await apiService.get<Topic[]>("/diagnostic/topics");
      return response;
    } catch (error) {
      throw error as ApiError;
    }
  },

  getQuestion: async (answer: SubmitAnswer) => {
    try {
      const response = await apiService.post<AdaptiveQuestion>("/diagnostic/submit-answer", answer);
      return response;
    } catch(error) {
      throw error as ApiError
    }
  }
};