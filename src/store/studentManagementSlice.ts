import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Student, DiagnosticResult, StudyPlan } from '../types/student-management';

interface StudentManagementState {
  students: Student[],
  diagnosticResults: DiagnosticResult[]
  studyPlan: StudyPlan | null
}

const initialState: StudentManagementState = {
  students: [],
  diagnosticResults: [],
  studyPlan: null
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
    },
    setSharedPlan: (state, action: PayloadAction<StudyPlan>) => {
      state.studyPlan = action.payload;
    } 
  },
});

export const { setStudents, setDiagnosticResults, setSharedPlan } = studentManagementSlice.actions;

export default studentManagementSlice.reducer;