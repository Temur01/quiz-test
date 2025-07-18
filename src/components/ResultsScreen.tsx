import { motion } from "framer-motion";
import { Award, CheckCircle, FileText } from "lucide-react";
import { useEffect } from "react";
import { SendResultApi } from "../api/SendResultApi";
import Cookies from "js-cookie";

interface ResultsScreenProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  questions: any[];
  answers: Record<string, string>;
  onRestartQuiz: () => void;
  userInfo?: {
    name: string;
    pin: string;
    image: string;
  };
}

const ResultsScreen = ({
  questions = [],
  answers = {},
  onRestartQuiz,
}: ResultsScreenProps) => {
  const resultsByCategory: Record<
    string,
    { total: number; correct: number; points: number }
  > = {};

  if (questions.length > 0) {
    questions.forEach((question) => {
      if (!resultsByCategory[question.type]) {
        resultsByCategory[question.type] = { total: 0, correct: 0, points: 0 };
      }

      resultsByCategory[question.type].total += 1;

      if (answers[question.id] === question.correctAnswer) {
        resultsByCategory[question.type].correct += 1;
        resultsByCategory[question.type].points += 2.5;
      }
    });
  }

  const totalScore = Object.values(resultsByCategory).reduce(
    (sum, category) => sum + category.points,
    0,
  );

  useEffect(() => {
    if (totalScore) {
      const userPin = Cookies.get("user_pin");
      if (userPin) {
        SendResultApi(userPin, totalScore);
      }
    }
  }, [totalScore]);

  const totalCorrect = Object.values(resultsByCategory).reduce(
    (sum, category) => sum + category.correct,
    0,
  );

  const totalQuestionsCount = Object.values(resultsByCategory).reduce(
    (sum, category) => sum + category.total,
    0,
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8"
        variants={containerVariants}
      >
        <motion.div
          className="bg-white rounded-xl border border-gray-100 shadow-md p-6 flex items-center hover:shadow-lg transition-shadow duration-300"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <div className="rounded-full bg-blue-100 p-4 mr-4">
            <FileText size={24} className="text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Jami savollar</p>
            <p className="text-2xl font-bold text-gray-800">
              {totalQuestionsCount}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl border border-gray-100 shadow-md p-6 flex items-center hover:shadow-lg transition-shadow duration-300"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <div className="rounded-full bg-green-100 p-4 mr-4">
            <CheckCircle size={24} className="text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">To'g'ri javoblar</p>
            <p className="text-2xl font-bold text-gray-800">{totalCorrect}</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl border border-gray-100 shadow-md p-6 flex items-center hover:shadow-lg transition-shadow duration-300"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <div className="rounded-full bg-purple-100 p-4 mr-4">
            <Award size={24} className="text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Umumiy ball</p>
            <p className="text-2xl font-bold text-gray-800">{totalScore}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Results Table */}
      <motion.div className="px-8 pb-8" variants={itemVariants}>
        <div className="overflow-x-auto rounded-xl shadow-md border border-gray-100">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fanlar nomi
                </th>
                <th className="py-4 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Savollar soni
                </th>
                <th className="py-4 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  To'g'ri javoblar
                </th>
                <th className="py-4 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ball
                </th>
                <th className="py-4 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tili
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Object.entries(resultsByCategory).map(
                ([category, result], index) => (
                  <motion.tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors duration-150"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">
                      {category}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 text-center">
                      {result.total}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 text-center">
                      <span
                        className={`inline-flex items-center ${result.correct === result.total ? "text-green-600" : result.correct === 0 ? "text-red-600" : "text-yellow-600"}`}
                      >
                        {result.correct}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 text-center">
                      {result.points}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 text-center">
                      O'zbek tili
                    </td>
                  </motion.tr>
                ),
              )}
              <motion.tr
                className="bg-gray-50 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <td className="py-4 px-6 text-sm font-medium text-gray-900">
                  Jami
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 text-center">
                  {totalQuestionsCount}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 text-center">
                  {totalCorrect}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 text-center">
                  {totalScore}
                </td>
                <td className="py-4 px-6"></td>
              </motion.tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Action Button */}
      <motion.div className="px-8 pb-8 text-center" variants={itemVariants}>
        <motion.button
          onClick={onRestartQuiz}
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Qayta urinib ko'rish
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ResultsScreen;
