import { motion } from "framer-motion";

interface NavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  goToPrevious: () => void;
  goToNext: () => void;
  submitQuiz: () => void;
  isLastQuestion: boolean;
}

const Navigation = ({
  currentQuestion,
  totalQuestions,
  goToPrevious,
  goToNext,
  submitQuiz,
  isLastQuestion,
}: NavigationProps) => {
  return (
    <div className="flex justify-between items-center mt-8 max-w-3xl mx-auto">
      <button
        onClick={goToPrevious}
        disabled={currentQuestion === 1}
        className={`px-6 py-2 rounded-md ${
          currentQuestion === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        Oldingi
      </button>
      
      <div className="text-gray-600">
        {currentQuestion} / {totalQuestions}
      </div>
      
      {isLastQuestion ? (
        <motion.button
          onClick={submitQuiz}
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Testni yakunlash
        </motion.button>
      ) : (
        <button
          onClick={goToNext}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Keyingi
        </button>
      )}
    </div>
  );
};

export default Navigation;
