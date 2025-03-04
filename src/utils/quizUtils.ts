import { Question } from "../types";

export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const calculateScore = (
  questions: Question[],
  answers: Record<number, string>
): number => {
  const pointsPerQuestion = 2.5; 
  
  const correctAnswers = questions.filter(
    (q) => answers[q.id] === q.correctAnswer
  ).length;
  
  return correctAnswers * pointsPerQuestion;
};

export const getRandomQuestions = (
  allQuestions: Question[],
  count: number = 40
): Question[] => {
  if (count >= allQuestions.length) {
    return [...allQuestions]; // Return all questions if count is greater than available questions
  }
  
  // Shuffle the array and take the first 'count' elements
  return shuffleArray(allQuestions).slice(0, count);
};
