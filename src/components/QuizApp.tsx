import { useState, useEffect } from "react";
import { Question, QuizState } from "../types";
import { questions as allQuestions } from "../data/questions";
import { shuffleArray, calculateScore } from "../utils/quizUtils";
import QuestionCard from "./QuestionCard";
import Navigation from "./Navigation";
import ProgressBar from "./ProgressBar";
import ResultsScreen from "./ResultsScreen";
import { motion, AnimatePresence } from "framer-motion";

const QuizApp = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    questions: [],
    currentQuestionIndex: 0,
    answers: {},
    isCompleted: false,
    score: 0,
  });

  // Initialize quiz with shuffled questions
  useEffect(() => {
    startQuiz();
  }, []);

  const startQuiz = () => {
    const shuffledQuestions = shuffleArray(allQuestions);
    setQuizState({
      questions: shuffledQuestions,
      currentQuestionIndex: 0,
      answers: {},
      isCompleted: false,
      score: 0,
    });
  };

  const handleSelectAnswer = (answer: string) => {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    setQuizState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: answer,
      },
    }));
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
        transition={{ duration: 0.5 }}
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
      <motion.h1 
        className="text-3xl font-bold text-center mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Test dasturi
      </motion.h1>
      
      <ProgressBar
        current={quizState.currentQuestionIndex + 1}
        total={quizState.questions.length}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={quizState.currentQuestionIndex}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={quizState.answers[currentQuestion.id]}
            onSelectAnswer={handleSelectAnswer}
            questionNumber={quizState.currentQuestionIndex + 1}
            totalQuestions={quizState.questions.length}
          />
        </motion.div>
      </AnimatePresence>
      
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
