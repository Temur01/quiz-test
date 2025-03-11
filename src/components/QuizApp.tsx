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
    questions: [],
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
      />
    );
  }

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const selectedAnswer = quizState.answers[currentQuestion.id];
  const currentQuestionNumber = quizState.currentQuestionIndex + 1;
  const totalQuestions = quizState.questions.length;

  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden border border-gray-200">
      <div className="flex flex-col md:flex-row">
        {/* Left sidebar */}
        <div className="md:w-1/4 border-r border-gray-200 bg-gray-50">
          <div className="p-5 border-b border-gray-200 bg-white">
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

        {/* Main content */}
        <div className="md:w-3/4">
          {/* Header with question number */}
          <div className="flex justify-between items-center p-5 border-b border-gray-200 bg-white">
            <div className="text-base font-medium text-gray-800">
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
              <p className="text-base mb-6 text-gray-800 leading-relaxed">
                {currentQuestion.question}
              </p>

              {/* Question content - for image-based questions */}
              {currentQuestion.id === 1 && (
                <div className="mb-6 flex justify-center">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="border border-gray-200 rounded-md p-3 flex justify-center shadow-sm">
                      <img
                        src="/question-figure-1.png"
                        alt="Figure 1"
                        className="h-20"
                      />
                    </div>
                    <div className="border border-gray-200 rounded-md p-3 flex justify-center shadow-sm">
                      <img
                        src="/question-figure-2.png"
                        alt="Figure 2"
                        className="h-20"
                      />
                    </div>
                    <div className="border border-gray-200 rounded-md p-3 flex justify-center shadow-sm">
                      <img
                        src="/question-figure-3.png"
                        alt="Figure 3"
                        className="h-20"
                      />
                    </div>
                    <div className="border border-gray-200 rounded-md p-3 flex justify-center shadow-sm">
                      <img
                        src="/question-figure-4.png"
                        alt="Figure 4"
                        className="h-20"
                      />
                    </div>
                    <div className="border border-gray-200 rounded-md p-3 flex justify-center shadow-sm">
                      <img
                        src="/question-figure-5.png"
                        alt="Figure 5"
                        className="h-20"
                      />
                    </div>
                    <div className="border border-gray-200 rounded-md p-3 flex justify-center shadow-sm">
                      <img
                        src="/question-figure-6.png"
                        alt="Figure 6"
                        className="h-20"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === option;

                  return (
                    <div key={index} className="mb-4">
                      <label className="flex items-start cursor-pointer p-3 rounded-md border border-gray-200 hover:border-[#8CA1D3] hover:bg-gray-50 transition-all duration-200">
                        <input
                          type="radio"
                          name="answer"
                          checked={isSelected}
                          onChange={() => handleAnswerSelect(option)}
                          className="mt-1 mr-2 hidden"
                        />
                        <div className="flex items-center">
                          <div className="relative mr-3">
                            <div
                              className={`w-6 h-6 rounded-md flex items-center justify-center ${isSelected ? "bg-[#8CA1D3] border border-[#8CA1D3]" : "border border-gray-300"}`}
                            >
                              {isSelected && (
                                <div className="w-2 h-2 bg-white rounded-sm"></div>
                              )}
                            </div>
                          </div>
                          <div className="flex">
                            {index === 0 && currentQuestion.id === 1 ? (
                              <div className="border border-gray-200 rounded-md p-3 w-40 h-40 flex justify-center items-center shadow-sm">
                                <img
                                  src="/option-a.png"
                                  alt="Option A"
                                  className="h-full"
                                />
                              </div>
                            ) : index === 1 && currentQuestion.id === 1 ? (
                              <div className="border border-gray-200 rounded-md p-3 w-40 h-40 flex justify-center items-center shadow-sm">
                                <img
                                  src="/option-b.png"
                                  alt="Option B"
                                  className="h-full"
                                />
                              </div>
                            ) : index === 2 && currentQuestion.id === 1 ? (
                              <div className="border border-gray-200 rounded-md p-3 w-40 h-40 flex justify-center items-center shadow-sm">
                                <img
                                  src="/option-c.png"
                                  alt="Option C"
                                  className="h-full"
                                />
                              </div>
                            ) : (
                              <span className="text-gray-800">{option}</span>
                            )}
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
                className={`px-4 py-2 rounded-md font-medium transition-colors flex items-center ${
                  quizState.currentQuestionIndex === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-[#8CA1D3] border border-[#8CA1D3] hover:bg-gray-50"
                }`}
              >
                <ChevronLeft size={18} className="mr-1" />
                Oldingi
              </button>

              <div className="flex items-center">
                <span className="px-3 py-1 bg-gray-100 rounded-md text-gray-700 font-medium">
                  {currentQuestionNumber} / {totalQuestions}
                </span>
              </div>

              <button
                onClick={goToNextQuestion}
                className="px-4 py-2 bg-[#8CA1D3] text-white rounded-md font-medium hover:bg-[#7b8fc0] transition-colors flex items-center"
              >
                Keyingi
                <ChevronRight size={18} className="ml-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
