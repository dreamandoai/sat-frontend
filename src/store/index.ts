import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./authSlice";
import diagnosticReducer from "./diagnosticSlice";
import timerReducer from "./timerSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    diagnostic: diagnosticReducer,
    timer: timerReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch