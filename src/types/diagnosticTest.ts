export type TestSection = 'reading-writing' | 'math';
export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export type QuestionTypeRW = 
  | 'CENTRAL IDEAS AND DETAILS'
  | 'INFERENCES'
  | 'CROSS TEXT CONNECTIONS'
  | 'INFORMATION AND IDEAS'
  | 'OVERALL STRUCTURE'
  | 'PURPOSE'
  | 'RHETORICAL SYNTHESIS'
  | 'STANDARD ENGLISH CONVENTIONS - PUNCTUATION'
  | 'STANDARD ENGLISH CONVENTIONS'
  | 'TRANSITIONS'
  | 'UNDERLINED SENTENCE'
  | 'WORDS IN CONTEXT'
  | 'COMMAND OF EVIDENCE - TEXTUAL'
  | 'COMMAND OF EVIDENCE - QUANTITATIVE';

export type QuestionTypeMath = 
  | 'LINEAR EQUATIONS IN 1 VARIABLE'
  | 'LINEAR EQUATIONS IN 2 VARIABLES'
  | 'EQUIVALENT EXPRESSIONS'
  | 'LINEAR FUNCTIONS'
  | 'LINEAR INEQUALITIES'
  | 'PERCENTAGES'
  | 'RATIOS AND PROPORTIONAL RELATIONSHIPS'
  | 'SYSTEMS OF LINEAR EQUATIONS'
  | 'NONLINEAR EQUATIONS'
  | 'NONLINEAR FUNCTIONS'
  | 'LINES, ANGLES, AND TRIANGLES'
  | 'CIRCLES'
  | 'AREA AND VOLUME'
  | 'RIGHT TRIANGLES AND TRIGONOMETRY'
  | 'SYSTEMS OF EQUATIONS'
  | 'ONE-VARIABLE DATA'
  | 'TWO-VARIABLE DATA AND SCATTERPLOTS'
  | 'PROBABILITY AND CONDITIONAL PROBABILITY'
  | 'INFERENCE FROM SAMPLE STATISTICS';

export type AdaptiveQuestion = {
  id: string;
  section: TestSection;
  questionType: QuestionTypeRW | QuestionTypeMath | string;
  difficulty: DifficultyLevel;
  question: string;
  passage?: string;
  chartImage?: string;
  figureImage?: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
};

export type QuestionSet = {
  questionType: QuestionTypeRW;
  easy: AdaptiveQuestion;
  medium: AdaptiveQuestion;
  hard: AdaptiveQuestion;
};

export type ReadingWritingQuestionSet = {
  questionType: QuestionTypeRW;
  easy: AdaptiveQuestion;
  medium: AdaptiveQuestion;
  hard: AdaptiveQuestion;
};

export type MathQuestionSet = {
  questionType: QuestionTypeMath | string;
  easy: AdaptiveQuestion;
  medium: AdaptiveQuestion;
  hard: AdaptiveQuestion;
};

export type TestProgress = {
  questionTypeIndex: number;
  currentDifficulty: DifficultyLevel;
  hasAnsweredMedium: boolean;
  selectedAnswer?: number;
  isCorrect?: boolean;
};

export type DiagnosticResults = {
  section: TestSection;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  questionTypeResults: {
    [questionType: string]: {
      correct: number;
      total: number;
      difficulty: DifficultyLevel;
    };
  };
};

export type UserData = {
  firstName: string;
  lastName: string;
  targetScore: string;
  email: string;
};

export type AppView = 'landing' | 'login' | 'register' | 'studentPortal' | 'diagnosticTest';

// Navigation utilities types
export type NavigationResult = {
  nextQuestion?: AdaptiveQuestion;
  isComplete: boolean;
  progress: TestProgress;
};

export type AnswerResult = {
  isCorrect: boolean;
  explanation?: string;
  nextDifficulty?: DifficultyLevel;
};