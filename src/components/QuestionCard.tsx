import { Question } from "../types";
import { motion } from "framer-motion";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | undefined;
  onSelectAnswer: (answer: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  questionNumber,
  totalQuestions,
}: QuestionCardProps) => {
  const handleAnswerClick = (option: string) => {
    onSelectAnswer(option);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Savol {questionNumber} / {totalQuestions}
        </h2>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
          2.5 ball
        </span>
      </div>
      
      <h3 className="text-lg font-medium text-gray-900 mb-6">{question.question}</h3>
      
      <div className="space-y-3">
        {question.options.map((option) => (
          <motion.button
            key={option}
            onClick={() => handleAnswerClick(option)}
            className={`w-full text-left p-4 rounded-lg transition-colors ${
              selectedAnswer === option
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
