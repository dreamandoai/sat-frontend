import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Topic, AdaptiveQuestion } from '../types/diagnostic';

interface DiagnosticState {
  topics: Topic[] | null;
  question: AdaptiveQuestion | null;
}

const initialState: DiagnosticState = {
  topics: null,
  question: null
};

const diagnosticSlice = createSlice({
  name: 'diagnostic',
  initialState,
  reducers: {
    setTopics: (
      state,
      action: PayloadAction<Topic[]>
    ) => {
      state.topics = action.payload
    },
    setQuestion:(
      state,
      action: PayloadAction<AdaptiveQuestion>
    ) => {
      state.question = action.payload
    },
  },
});

export const { setTopics, setQuestion } = diagnosticSlice.actions;

export default diagnosticSlice.reducer;