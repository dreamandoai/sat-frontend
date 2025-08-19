import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TimerState } from "../types/timer";
import { startTest, fetchRemaining } from "../services/timerService";

const initialState: TimerState = {
  remaining: 0,
  endTime: null,
  isRunning: false
}

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setRemaining: (state, action: PayloadAction<number>) => {
      state.remaining = action.payload;
      if (action.payload <= 0) {
        state.isRunning = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(startTest.fulfilled, (state, action) => {
      const { end_time } = action.payload;
      state.endTime = new Date(end_time).getTime();
      state.remaining = Math.floor((state.endTime - Date.now()) / 1000);
      state.isRunning = true;
    });
    builder.addCase(fetchRemaining.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.isRunning = false;
        state.remaining = 0;
        return;
      }
      const { remaining_seconds, end_time } = action.payload;
      state.endTime = new Date(end_time).getTime();
      state.remaining = remaining_seconds;
      state.isRunning = remaining_seconds > 0;
    });
  },
});

export const { setRemaining } = timerSlice.actions;
export default timerSlice.reducer;