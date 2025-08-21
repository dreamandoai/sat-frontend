import { apiService } from './api';
import type { ApiError } from '../types/api';
import type { AdaptiveQuestion, Topic } from '../types/diagnostic';

export const diagnosticService = {
  getTopics: async () => {
    try {
      const response = await apiService.get<Topic[]>("/diagnostic/topics");
      return response;
    } catch (error) {
      throw error as ApiError;
    }
  },

  getQuestion: async (topic_id: string, answer_index: number) => {
    try {
      const response = await apiService.get<AdaptiveQuestion>(`/diagnostic/submit-answer/${topic_id}/${answer_index}`);
      return response;
    } catch(error) {
      throw error as ApiError
    }
  }
};