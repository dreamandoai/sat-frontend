import { createAsyncThunk } from "@reduxjs/toolkit";
import type { StartTestResponse, TimeRemainingResponse, StartTestRequest } from "../types/timer";
import { apiService } from "./api";

export const startTest = createAsyncThunk<StartTestResponse, StartTestRequest>(
  "timer/startTest",
  async (request: StartTestRequest) => {
    const res = await apiService.post<StartTestResponse>("/diagnostic/start-test", request);
    return res;
  }
);

export const fetchRemaining = createAsyncThunk<TimeRemainingResponse>(
  "timer/fetchRemaining",
  async () => {
    const res = await apiService.get<TimeRemainingResponse>("/diagnostic/time-remaining");
    return res;
  }
);