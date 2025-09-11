import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./authSlice";
import diagnosticReducer from "./diagnosticSlice";
import timerReducer from "./timerSlice";
import studentManagementReducer from "./studentManagementSlice";
import pairReducer from "./pairSlice";
import resourceReducer from "./resourceSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    diagnostic: diagnosticReducer,
    timer: timerReducer,
    studentManagement: studentManagementReducer,
    pair: pairReducer,
    resource: resourceReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch