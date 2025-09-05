import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Student, DiagnosticResult } from '../types/student-management';

interface StudentManagementState {
  students: Student[],
  diagnosticResults: DiagnosticResult[]
}

const initialState: StudentManagementState = {
  students: [],
  diagnosticResults: []
};

const studentManagementSlice = createSlice({
  name: 'student-management',
  initialState,
  reducers: {
    setStudents: ( state, action: PayloadAction<Student[]> ) => {
      state.students = action.payload
    },
    setDiagnosticResults: (state, action: PayloadAction<DiagnosticResult[]>) => {
      state.diagnosticResults = action.payload;
    }
  },
});

export const { setStudents, setDiagnosticResults } = studentManagementSlice.actions;

export default studentManagementSlice.reducer;