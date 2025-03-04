import { Question } from "../types";

// Shuffle array using Fisher-Yates algorithm
export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Calculate score based on correct answers
export const calculateScore = (
  questions: Question[],
  answers: Record<number, string>
): number => {
  const pointsPerQuestion = 2.5; // 100 points total for 40 questions
  
  const correctAnswers = questions.filter(
    (q) => answers[q.id] === q.correctAnswer
  ).length;
  
  return correctAnswers * pointsPerQuestion;
};
