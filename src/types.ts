export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  type:
    | "Axborot kommunikatsiya texnologiyalari"
    | "Davlat tili"
    | "IQ"
    | "Milliy qonunchilik";
}

export type QuestionsByCategory = {
  "Davlat tili": Question[];
  "Axborot kommunikatsiya texnologiyalari": Question[];
  IQ: Question[];
  "Milliy qonunchilik": Question[];
};

export interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  answers: Record<number, string>;
  isCompleted: boolean;
  score: number;
}
