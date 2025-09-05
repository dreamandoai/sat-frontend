export interface DiagnosticResult {
  topic_id: string,
  topic_name: string,
  section: "RW" | "Math",
  student_id: string,
  medium: {
    correct: boolean,
    time_sec: number
  },
  follow_up: {
    level: "easy" | "medium" | "hard",
    correct: boolean,
    time_sec: number
  },
  mastery: "PRIORITY_GAP" | "DEVELOPING" | "PROFICIENT" | "MASTERED" | "UNKNOWN",
}

export interface Student {
  id: string
  first_name: string
  last_name: string
  email: string
  subject: 'Math' | 'RW'
  tested_date: string
}

export interface PlanBlock {
  section: "RW"| "Math";
  topic_id: string;
  topic: string;
  mastery: 'MASTERED' | 'PROFICIENT' | 'DEVELOPING' | 'PRIORITY_GAP' | 'UNKNOWN';
  minutes: number;
  practice_items: number;
  resource_slugs?: string[];
  due_date: string;
  goal: string;
}

export interface StudyPlan {
  userId: string;
  weeks: {
    week: number;
    blocks: PlanBlock[];
  }[];
  meta: {
    generated_at: string;
    cap_per_week: number;
    student_name?: string;
  };
}