export interface StartTestResponse {
  start_time: string;
  end_time: string;
  duration_minutes: number;
}

export interface TimeRemainingResponse {
  remaining_seconds: number;
  end_time: string;
  error?: string;
}

export interface TimerState {
  remaining: number;
  endTime: number | null;
  isRunning: boolean;
}

export interface StartTestRequest {
  section_type: string
  duration_mins: number
}