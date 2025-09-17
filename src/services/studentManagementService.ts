import { apiService } from './api';
import type { ApiError } from '../types/api';
import type { Student, DiagnosticResult, StudyPlan } from '../types/student-management';

export const studentManagementService = {
  getStudents: async () => {
    try {
      const response = await apiService.get<Student[]>(`/user/shared_students`);
      return response;
    } catch (error) {
      throw error as ApiError;
    }
  },
  getDiagnosticResults: async (studentId: string) => {
    try {
      const response = await apiService.get<DiagnosticResult[]>(`/diagnostic/get-history/${studentId}`);
      return response;
    } catch (error) {
      throw error as ApiError
    }
  },
  getSharedPlan: async (studentId: string) => {
    try {
      const response = await apiService.get<StudyPlan>(`/plan/${studentId}`);
      return response;
    } catch (error) {
      throw error as ApiError
    }
  }
};