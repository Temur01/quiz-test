import QuizApp from "../../components/QuizApp";
import logo from "../../assets/logo.png";
import Timer from "../../components/Timer";
import { useState } from "react";

export const QuizPage = () => {
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleTimeUp = () => {
    console.log("Time is up!");
    // You could also automatically complete the quiz here if needed
  };

  const handleQuizComplete = (completed: boolean) => {
    setIsQuizCompleted(completed);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <img
            src={logo}
            alt="O'zbekiston Respublikasi Davlat Xizmati"
            className="h-14"
          />
          <Timer
            initialTime={3600}
            onTimeUp={handleTimeUp}
            isCompleted={isQuizCompleted}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <QuizApp onQuizComplete={handleQuizComplete} />
      </div>
    </div>
  );
};
