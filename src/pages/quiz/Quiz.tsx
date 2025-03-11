import QuizApp from "../../components/QuizApp";
import logo from "../../assets/logo_uz.png";
import Timer from "../../components/Timer";
import { useState, useRef } from "react";

export const QuizPage = () => {
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const quizAppRef = useRef<{ completeQuiz: () => void } | null>(null);

  const handleTimeUp = () => {
    setIsQuizCompleted(true);

    if (quizAppRef.current) {
      quizAppRef.current.completeQuiz();
    }
  };

  const handleQuizComplete = (completed: boolean) => {
    setIsQuizCompleted(completed);

    if (!completed) {
      setResetKey((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <img
            src={logo}
            alt="O'zbekiston Respublikasi Davlat Xizmati"
            className="h-16"
          />
          <Timer
            key={resetKey}
            initialTime={3600}
            onTimeUp={handleTimeUp}
            isCompleted={isQuizCompleted}
          />
          <div></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <QuizApp
          key={resetKey}
          ref={quizAppRef}
          onQuizComplete={handleQuizComplete}
        />
      </div>
    </div>
  );
};
