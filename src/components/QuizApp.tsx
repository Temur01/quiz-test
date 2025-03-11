import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { QuizState } from "../types";
import { questions } from "../data/questions";
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import QuestionMap from "./QuestionMap";
import UserInfo from "./UserInfo";
import ResultsScreen from "./ResultsScreen";

interface QuizAppProps {
  onQuizComplete?: (completed: boolean) => void;
}

const QuizApp: React.FC<QuizAppProps> = ({ onQuizComplete }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    pin: "",
    image: "",
  });

  const [quizState, setQuizState] = useState<QuizState>({
    questions: [...questions],
    currentQuestionIndex: 0,
    answers: {},
    isCompleted: false,
    score: 0,
  });

  const [showCompletionError, setShowCompletionError] = useState(false);

  useEffect(() => {
    // Get user info from cookies
    const name = Cookies.get("user_name") || "RAVSHANOV ELYOR";
    const pin = Cookies.get("user_pin") || "680559";
    const image = localStorage.getItem("user_photo") || "";
    setUserInfo({ name, pin, image });

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
        handleNextQuestion();
      } else {
        completeQuiz();
      }
    }, 300);
  };

  const handleNextQuestion = () => {
    const nextIndex = quizState.currentQuestionIndex + 1;

    if (nextIndex < quizState.questions.length) {
      setQuizState((prevState) => ({
        ...prevState,
        currentQuestionIndex: nextIndex,
      }));
    } else {
      completeQuiz();
    }
  };

  const completeQuiz = () => {
    const answeredQuestionsCount = Object.keys(quizState.answers).length;

    if (answeredQuestionsCount < 40) {
      setShowCompletionError(true);
      setTimeout(() => setShowCompletionError(false), 5000);
      return;
    }

    setQuizState((prevState) => ({
      ...prevState,
      isCompleted: true,
    }));

    // Notify parent component that quiz is completed
    if (onQuizComplete) {
      onQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setQuizState({
      questions: [...questions],
      currentQuestionIndex: 0,
      answers: {},
      isCompleted: false,
      score: 0,
    });

    // Notify parent component that quiz is restarted
    if (onQuizComplete) {
      onQuizComplete(false);
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

  if (quizState.questions.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8CA1D3]"></div>
      </div>
    );
  }

  if (quizState.isCompleted) {
    return (
      <ResultsScreen
        questions={quizState.questions}
        answers={quizState.answers}
        userInfo={userInfo}
        onRestartQuiz={restartQuiz}
      />
    );
  }

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const selectedAnswer = quizState.answers[currentQuestion.id];
  const currentQuestionNumber = quizState.currentQuestionIndex + 1;
  const totalQuestions = quizState.questions.length;
  const answeredQuestionsCount = Object.keys(quizState.answers).length;

  return (
    <div className="rounded-lg shadow-lg overflow-hidden p-3">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 me-3">
          <div className="p-5 bg-white shadow-sm rounded-md">
            <UserInfo
              name={userInfo.name}
              pin={userInfo.pin}
              image={userInfo.image}
            />
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
          <div className="flex justify-between items-center p-5 rounded-md bg-white shadow-sm">
            <div className="text-lg font-semibold text-gray-800">
              Savol № {currentQuestionNumber}
            </div>
            <div className="text-sm font-medium text-gray-600">
              Javob berilgan: {answeredQuestionsCount} / 40
            </div>
          </div>

          {showCompletionError && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center text-red-600">
              <AlertCircle size={18} className="mr-2" />
              <span>
                Testni yakunlash uchun barcha savollarga javob berish kerak!
              </span>
            </div>
          )}

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
                            ? "border-[#8CA1D3] bg-blue-50"
                            : "border-gray-200 hover:border-[#8CA1D3] hover:bg-gray-50"
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
                                  ? "bg-[#8CA1D3] border-2 border-[#8CA1D3]"
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
                    : "bg-[#8CA1D3] text-white hover:bg-[#7B8FC0] shadow-sm hover:shadow-md"
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

              {quizState.currentQuestionIndex ===
              quizState.questions.length - 1 ? (
                <button
                  onClick={completeQuiz}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center ${
                    answeredQuestionsCount >= 40
                      ? "bg-green-600 text-white hover:bg-green-700 shadow-sm hover:shadow-md"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  Testni yakunlash
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-3 bg-[#8CA1D3] text-white rounded-lg font-medium hover:bg-[#7B8FC0] transition-all duration-200 flex items-center shadow-sm hover:shadow-md"
                >
                  Keyingi
                  <ChevronRight size={18} className="ml-2" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
