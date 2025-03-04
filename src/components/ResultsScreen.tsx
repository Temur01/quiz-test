import { Question } from "../types";
import { motion } from "framer-motion";

interface ResultsScreenProps {
  score: number;
  questions: Question[];
  answers: Record<number, string>;
  onRestartQuiz: () => void;
}

const ResultsScreen = ({
  score,
  questions,
  answers,
  onRestartQuiz,
}: ResultsScreenProps) => {
  const totalQuestions = questions.length;
  const correctAnswers = questions.filter(
    (q) => answers[q.id] === q.correctAnswer
  ).length;
  const incorrectAnswers = totalQuestions - correctAnswers;
  const percentage = (correctAnswers / totalQuestions) * 100;

  const getFeedback = () => {
    if (percentage >= 90) return "Ajoyib natija!";
    if (percentage >= 70) return "Yaxshi natija!";
    if (percentage >= 50) return "O'rtacha natija.";
    return "Yaxshiroq tayyorlanishingiz kerak.";
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        Test natijalarif
      </h2>

      <div className="space-y-6">
        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Umumiy ball</h3>
          <div className="text-5xl font-bold text-blue-600">{score}</div>
          <div className="text-sm text-gray-500 mt-2">100 balldan</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg text-center">
            <h4 className="font-medium text-green-800">To'g'ri javoblar</h4>
            <div className="text-2xl font-bold text-green-600 mt-2">
              {correctAnswers}
            </div>
          </div>
          
          <div className="p-4 bg-red-50 rounded-lg text-center">
            <h4 className="font-medium text-red-800">Noto'g'ri javoblar</h4>
            <div className="text-2xl font-bold text-red-600 mt-2">
              {incorrectAnswers}
            </div>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <h4 className="font-medium text-purple-800">Muvaffaqiyat darajasi</h4>
            <div className="text-2xl font-bold text-purple-600 mt-2">
              {percentage.toFixed(1)}%
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Fikr-mulohaza</h3>
          <p className="text-gray-700">{getFeedback()}</p>
        </div>

        <div className="text-center mt-8">
          <motion.button
            onClick={onRestartQuiz}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Qayta boshlash
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
