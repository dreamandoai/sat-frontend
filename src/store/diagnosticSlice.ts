import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface DiagnosticState {
  numberOfRWTopics: number | null;
  numberOfMathTopics: number | null;
  question: any | null;
}

const initialState: DiagnosticState = {
  numberOfRWTopics: null,
  numberOfMathTopics: null,
  question: null
};

const diagnosticSlice = createSlice({
  name: 'diagnostic',
  initialState,
  reducers: {
    setNumberOfTopics: (
      state,
      action: PayloadAction<{ rw: number, math: number }>
    ) => {
      state.numberOfMathTopics = action.payload.math;
      state.numberOfRWTopics = action.payload.rw;
    },
  },
});

export const { setNumberOfTopics } = diagnosticSlice.actions;

export default diagnosticSlice.reducer;