export type TestSection = 'RW' | 'Math';
export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export type TestProgress = {
  questionTypeIndex: number;
  currentDifficulty: DifficultyLevel;
  hasAnsweredMedium: boolean;
  selectedAnswer?: number;
  isCorrect?: boolean;
};

export type NumberOfTopics = {
  rw: number;
  math: number;
}

export type Topic = {
  id: string;
  name: string;
  section: TestSection;
}

export type SubmitAnswer = {
  next_topic_id: string;
  current_topic_id: string;
  answer_index: number;
  time_sec: number;
  difficulty: DifficultyLevel;
}

export type AdaptiveQuestion = {
  section: TestSection;
  question: string;
  notes?:string;
  passage?: string;
  chart_image?: string;
  figure_image?: string;
  options: string[];
  explanation?: string;
  difficulty: DifficultyLevel;
};