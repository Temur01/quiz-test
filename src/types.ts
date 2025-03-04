export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  answers: Record<number, string>;
  isCompleted: boolean;
  score: number;
}
