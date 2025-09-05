import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TeacherShort } from '../types/bookaclass';

interface PairState {
  teachers: TeacherShort[] 
}

const initialState: PairState = {
  teachers: [],
};

const pairSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setTeachers: ( state, action: PayloadAction<TeacherShort[]> ) => {
      state.teachers = action.payload
    },
  },
});

export const { setTeachers } = pairSlice.actions;

export default pairSlice.reducer;