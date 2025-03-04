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
  
  // If all answers are correct, return exactly 100
  if (correctAnswers === questions.length) {
    return 100;
  }
  
  return correctAnswers * pointsPerQuestion;
};

export const getRandomQuestions = (
  allQuestions: Question[],
  count: number = 40
): Question[] => {
  if (count >= allQuestions.length) {
    return shuffleQuestionsWithOptions([...allQuestions]); // Return all questions with shuffled options
  }
  
  // Shuffle the array, take the first 'count' elements, and shuffle options
  return shuffleQuestionsWithOptions(shuffleArray(allQuestions).slice(0, count));
};

// Helper function to shuffle options for each question while preserving the correct answer
export const shuffleQuestionsWithOptions = (questions: Question[]): Question[] => {
  return questions.map(question => {
    // Create a deep copy of the question to avoid modifying the original
    const questionCopy = { ...question };
    
    // Get the correct answer
    const correctAnswer = questionCopy.correctAnswer;
    
    // Create an array of options with their "correct" status
    const optionsWithStatus = questionCopy.options.map(option => ({
      text: option,
      isCorrect: option === correctAnswer
    }));
    
    // Shuffle the options
    const shuffledOptions = shuffleArray(optionsWithStatus);
    
    // Extract just the text for the new options array
    questionCopy.options = shuffledOptions.map(option => option.text);
    
    // Find the new position of the correct answer
    const newCorrectAnswer = shuffledOptions.find(option => option.isCorrect)?.text || correctAnswer;
    
    // Update the correct answer in the question
    questionCopy.correctAnswer = newCorrectAnswer;
    
    return questionCopy;
  });
};
