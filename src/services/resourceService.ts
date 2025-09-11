import { apiService } from './api';
import type { ApiError } from '../types/api';
import type { FolderNode } from '../types/resources';

export const resourceService = {
  getSubFolders: async (folder_id: string) => {
    try {
      const response = await apiService.get<FolderNode[]>(`/resources/folders/${folder_id}`);
      return response;
    } catch (error) {
      throw error as ApiError;
    }
  }
};