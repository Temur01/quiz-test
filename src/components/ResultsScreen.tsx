import { Question } from "../types";
import { motion } from "framer-motion";

interface ResultsScreenProps {
  score: number;
  totalQuestions?: number;
  questions?: Question[];
  answers?: Record<number, string>;
  onRestartQuiz?: () => void;
  userInfo?: {
    name: string;
    pin: string;
    image?: string;
  };
}

const ResultsScreen = ({
  questions = [],
  answers = {},
  onRestartQuiz,
  userInfo,
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

  // Calculate total score
  const totalScore = Object.values(resultsByCategory).reduce(
    (sum, category) => sum + category.points,
    0,
  );

  // Calculate total correct answers
  const totalCorrect = Object.values(resultsByCategory).reduce(
    (sum, category) => sum + category.correct,
    0,
  );

  // Calculate total questions
  const totalQuestionsCount = Object.values(resultsByCategory).reduce(
    (sum, category) => sum + category.total,
    0,
  );

  // Function to check if the image is a valid base64 string
  const isValidBase64 = (str: string) => {
    if (!str) return false;
    try {
      // Check if it starts with data:image format
      if (str.startsWith("data:image")) {
        return true;
      }

      // Check if it's a raw base64 string
      return /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/.test(
        str,
      );
    } catch {
      return false;
    }
  };

  // Prepare the image source with proper format if needed
  const getImageSrc = (imageStr: string) => {
    if (!imageStr) return "https://via.placeholder.com/150";

    // If it already starts with data:image, it's already formatted correctly
    if (imageStr.startsWith("data:image")) {
      return imageStr;
    }

    // Otherwise, assume it's a raw base64 string and add the prefix
    return `data:image/jpeg;base64,${imageStr}`;
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Sinov yakunlandi
        </h2>
        <p className="text-gray-600">
          Siz natijalaringiz bilan tanishib chiqishingiz mumkin
        </p>
      </div>

      <div className="flex mb-8">
        <div className="w-1/4 pr-6">
          <img
            src={
              userInfo?.image && isValidBase64(userInfo.image)
                ? getImageSrc(userInfo.image)
                : "https://via.placeholder.com/150"
            }
            alt="User photo"
            className="w-32 h-40 object-cover border border-gray-300 shadow-sm rounded-md"
          />
        </div>
        <div className="w-3/4">
          <h3 className="font-bold text-xl mb-3 text-gray-800">
            {userInfo?.name || "RAVSHANOV ELYOR AXTAM O'G'LI"}
          </h3>
        </div>
      </div>

      {/* Score Summary Card */}
      <div className="bg-gradient-to-r from-[#8CA1D3] to-[#9EAFD9] text-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm font-medium mb-1 opacity-90">Jami savollar</p>
            <p className="text-3xl font-bold">{totalQuestionsCount}</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium mb-1 opacity-90">
              To'g'ri javoblar
            </p>
            <p className="text-3xl font-bold">{totalCorrect}</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium mb-1 opacity-90">Umumiy ball</p>
            <p className="text-3xl font-bold">{totalScore}</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mb-8 shadow-md rounded-lg">
        <table className="min-w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                Fanlar nomi
              </th>
              <th className="py-3 px-6 text-center text-sm font-semibold text-gray-700">
                Savollar soni
              </th>
              <th className="py-3 px-6 text-center text-sm font-semibold text-gray-700">
                To'g'ri javoblar
              </th>
              <th className="py-3 px-6 text-center text-sm font-semibold text-gray-700">
                Ball
              </th>
              <th className="py-3 px-6 text-center text-sm font-semibold text-gray-700">
                Tili
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6 border-r border-gray-200">IQ</td>
              <td className="py-3 px-6 text-center border-r border-gray-200">
                10
              </td>
              <td className="py-3 px-6 text-center border-r border-gray-200">
                1
              </td>
              <td className="py-3 px-6 text-center border-r border-gray-200">
                2.5
              </td>
              <td className="py-3 px-6 text-center">O'zbek tili</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6 border-r border-gray-200">
                Davlat tili
              </td>
              <td className="py-3 px-6 text-center border-r border-gray-200">
                10
              </td>
              <td className="py-3 px-6 text-center border-r border-gray-200">
                1
              </td>
              <td className="py-3 px-6 text-center border-r border-gray-200">
                2.5
              </td>
              <td className="py-3 px-6 text-center">O'zbek tili</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6 border-r border-gray-200">
                Axborot-kommunikatsiya texnologiyalari
              </td>
              <td className="py-3 px-6 text-center border-r border-gray-200">
                10
              </td>
              <td className="py-3 px-6 text-center border-r border-gray-200">
                1
              </td>
              <td className="py-3 px-6 text-center border-r border-gray-200">
                2.5
              </td>
              <td className="py-3 px-6 text-center">O'zbek tili</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6 border-r border-gray-200">
                Milliy qonunchilik
              </td>
              <td className="py-3 px-6 text-center border-r border-gray-200">
                10
              </td>
              <td className="py-3 px-6 text-center border-r border-gray-200">
                0
              </td>
              <td className="py-3 px-6 text-center border-r border-gray-200">
                0
              </td>
              <td className="py-3 px-6 text-center">O'zbek tili</td>
            </tr>
            <tr className="bg-gray-50 font-medium">
              <td className="py-3 px-6 border-r border-gray-200 font-semibold">
                Jami
              </td>
              <td className="py-3 px-6 text-center border-r border-gray-200 font-semibold">
                40
              </td>
              <td className="py-3 px-6 text-center border-r border-gray-200 font-semibold">
                3
              </td>
              <td className="py-3 px-6 text-center border-r border-gray-200 font-semibold">
                7.5
              </td>
              <td className="py-3 px-6"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center">
        <motion.button
          onClick={onRestartQuiz}
          className="px-8 py-3 bg-[#8CA1D3] text-white rounded-lg font-medium hover:bg-[#7B8FC0] transition-all duration-200 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Chiqish
        </motion.button>
      </div>
    </div>
  );
};

export default ResultsScreen;
