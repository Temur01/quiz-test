import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { QuizState } from "../types";
import { questions } from "../data/questions";
import { ChevronLeft, ChevronRight } from "lucide-react";
import QuestionMap from "./QuestionMap";
import UserInfo from "./UserInfo";
import ResultsScreen from "./ResultsScreen";

const QuizApp: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    pin: "",
  });

  const [quizState, setQuizState] = useState<QuizState>({
    questions: [...questions],
    currentQuestionIndex: 0,
    answers: {},
    isCompleted: false,
    score: 0,
  });

  useEffect(() => {
    // Get user info from cookies
    const name = Cookies.get("user_name") || "RAVSHANOV ELYOR";
    const pin = Cookies.get("user_pin") || "680559";
    setUserInfo({ name, pin });

    // Initialize quiz with questions in order
    setQuizState({
      questions: [...questions],
      currentQuestionIndex: 0,
      answers: {},
      isCompleted: false,
      score: 0,
    });
  }, []);

  const handleAnswerSelect = (answer: string) => {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    setQuizState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: answer,
      },
    }));

    setTimeout(() => {
      if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
        goToNextQuestion();
      } else {
        calculateScore();
      }
    }, 300);
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

  const goToQuestion = (index: number) => {
    if (index >= 0 && index < quizState.questions.length) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: index,
      }));
    }
  };

  const handleRestartQuiz = () => {
    setQuizState({
      questions: [...questions],
      currentQuestionIndex: 0,
      answers: {},
      score: 0,
      isCompleted: false,
    });
  };

  const calculateScore = () => {
    const correctAnswers = quizState.questions.filter((question) => {
      return question.correctAnswer === quizState.answers[question.id];
    });
    const score = correctAnswers.length;
    setQuizState((prev) => ({
      ...prev,
      score,
      isCompleted: true,
    }));
  };

  if (quizState.questions.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8CA1D3]"></div>
      </div>
    );
  }

  if (quizState.isCompleted) {
    const totalQuestions = quizState.questions.length;
    return (
      <ResultsScreen
        score={quizState.score}
        totalQuestions={totalQuestions}
        userInfo={userInfo}
        onRestartQuiz={handleRestartQuiz}
      />
    );
  }

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const selectedAnswer = quizState.answers[currentQuestion.id];
  const currentQuestionNumber = quizState.currentQuestionIndex + 1;
  const totalQuestions = quizState.questions.length;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="flex flex-col md:flex-row">
        {/* Left sidebar */}
        <div className="md:w-1/4 border-r border-gray-200 bg-gray-50">
          <div className="p-5 border-b border-gray-200 bg-white shadow-sm">
            <UserInfo name={userInfo.name} pin={userInfo.pin} />
          </div>

          <QuestionMap
            totalQuestions={quizState.questions.length}
            currentQuestionIndex={quizState.currentQuestionIndex}
            answers={quizState.answers}
            onQuestionClick={goToQuestion}
            questions={quizState.questions}
          />
        </div>

        <div className="md:w-3/4">
          <div className="flex justify-between items-center p-5 border-b border-gray-200 bg-white shadow-sm">
            <div className="text-lg font-semibold text-gray-800">
              Savol № {currentQuestionNumber}
            </div>
          </div>

          <motion.div
            key={quizState.currentQuestionIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="p-6"
          >
            <div className="mb-8">
              <p className="text-lg mb-8 text-gray-800 leading-relaxed font-medium">
                {currentQuestion.question}
              </p>

              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === option;

                  return (
                    <div key={index} className="mb-4">
                      <label
                        className={`flex items-start cursor-pointer p-4 rounded-lg border ${
                          isSelected
                            ? "border-[#33B5F1] bg-blue-50"
                            : "border-gray-200 hover:border-[#33B5F1] hover:bg-gray-50"
                        } transition-all duration-200 shadow-sm hover:shadow-md`}
                      >
                        <input
                          type="radio"
                          name="answer"
                          checked={isSelected}
                          onChange={() => handleAnswerSelect(option)}
                          className="mt-1 mr-1 hidden"
                        />
                        <div className="flex items-center">
                          <div className="relative mr-3">
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                isSelected
                                  ? "bg-[#33B5F1] border-2 border-[#33B5F1]"
                                  : "border-2 border-gray-300"
                              }`}
                            >
                              {isSelected && (
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              )}
                            </div>
                          </div>
                          <div className="flex">
                            <span
                              className={`text-gray-800 ${isSelected ? "font-medium" : ""}`}
                            >
                              {option}
                            </span>
                          </div>
                        </div>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between mt-8 pt-4 border-t border-gray-200">
              <button
                onClick={goToPreviousQuestion}
                disabled={quizState.currentQuestionIndex === 0}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center ${
                  quizState.currentQuestionIndex === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-[#33B5F1] border border-[#33B5F1] hover:bg-blue-50 shadow-sm hover:shadow-md"
                }`}
              >
                <ChevronLeft size={18} className="mr-2" />
                Oldingi
              </button>

              <div className="flex items-center">
                <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium shadow-sm">
                  {currentQuestionNumber} / {totalQuestions}
                </span>
              </div>

              <button
                onClick={goToNextQuestion}
                className="px-4 py-3 bg-[#33B5F1] text-white rounded-lg font-medium hover:bg-[#1c94c4] transition-all duration-200 flex items-center shadow-sm hover:shadow-md"
              >
                Keyingi
                <ChevronRight size={18} className="ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
