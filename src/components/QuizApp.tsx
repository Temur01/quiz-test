import { useState, useEffect } from "react";
import { Question, QuizState } from "../types";
import { questions as allQuestions } from "../data/questions";
import { calculateScore, getRandomQuestions } from "../utils/quizUtils";
import QuestionCard from "./QuestionCard";
import Navigation from "./Navigation";
import ProgressBar from "./ProgressBar";
import ResultsScreen from "./ResultsScreen";
import { motion } from "framer-motion";

const QuizApp = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    questions: [],
    currentQuestionIndex: 0,
    answers: {},
    isCompleted: false,
    score: 0,
  });
  
  // State to track if auto-navigation is in progress
  const [isNavigating, setIsNavigating] = useState(false);

  // Initialize quiz with random questions
  useEffect(() => {
    startQuiz();
  }, []);

  const startQuiz = () => {
    // Get 40 random questions from the question pool
    const randomQuestions = getRandomQuestions(allQuestions, 40);
    setQuizState({
      questions: randomQuestions,
      currentQuestionIndex: 0,
      answers: {},
      isCompleted: false,
      score: 0,
    });
    setIsNavigating(false);
  };

  const handleSelectAnswer = (answer: string) => {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    
    // Update the answer
    setQuizState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: answer,
      },
    }));
    
    // Prevent multiple auto-navigations
    if (!isNavigating) {
      setIsNavigating(true);
      
      // Automatically go to the next question after selecting an answer
      setTimeout(() => {
        if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
          goToNextQuestion();
        } else {
          // If it's the last question, submit the quiz after a short delay
          setTimeout(() => submitQuiz(), 250);
        }
        setIsNavigating(false);
      }, 250);
    }
  };

  const goToNextQuestion = () => {
    if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    }
  };

  const goToPreviousQuestion = () => {
    if (quizState.currentQuestionIndex > 0) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
      }));
    }
  };

  const submitQuiz = () => {
    const score = calculateScore(quizState.questions, quizState.answers);
    setQuizState((prev) => ({
      ...prev,
      isCompleted: true,
      score,
    }));
  };

  // Get current question
  const currentQuestion: Question =
    quizState.questions[quizState.currentQuestionIndex];

  // If quiz is not initialized yet
  if (!currentQuestion) {
    return <div className="text-center p-8">Test yuklanmoqda...</div>;
  }

  // If quiz is completed, show results
  if (quizState.isCompleted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ResultsScreen
          score={quizState.score}
          questions={quizState.questions}
          answers={quizState.answers}
          onRestartQuiz={startQuiz}
        />
      </motion.div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        Test dasturi
      </h1>
      
      <ProgressBar
        current={quizState.currentQuestionIndex + 1}
        total={quizState.questions.length}
      />
      
      <motion.div
        key={quizState.currentQuestionIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <QuestionCard
          question={currentQuestion}
          selectedAnswer={quizState.answers[currentQuestion.id]}
          onSelectAnswer={handleSelectAnswer}
          questionNumber={quizState.currentQuestionIndex + 1}
          totalQuestions={quizState.questions.length}
        />
      </motion.div>
      
      <Navigation
        currentQuestion={quizState.currentQuestionIndex + 1}
        totalQuestions={quizState.questions.length}
        goToPrevious={goToPreviousQuestion}
        goToNext={goToNextQuestion}
        submitQuiz={submitQuiz}
        isLastQuestion={
          quizState.currentQuestionIndex === quizState.questions.length - 1
        }
      />
    </div>
  );
};

export default QuizApp;
