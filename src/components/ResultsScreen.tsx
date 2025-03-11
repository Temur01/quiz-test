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

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Sinov yakunlandi. Siz natijalaringiz bilan tanishib chiqishingiz
          mumkin.
        </h2>
      </div>

      <div className="flex mb-8">
        <div className="w-1/4 pr-6">
          <img
            src="https://via.placeholder.com/150"
            alt="User photo"
            className="w-32 h-40 object-cover border border-gray-300 shadow-sm"
          />
        </div>
        <div className="w-3/4">
          <h3 className="font-bold text-xl mb-3 text-gray-800">
            {userInfo?.name || "RAVSHANOV ELYOR AXTAM O'G'LI"}
          </h3>
          <div className="grid grid-cols-1 gap-2 text-sm">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-[#33B5F1]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium text-gray-700">testUzinfocom</span>
            </div>

            <div className="grid grid-cols-6 gap-y-2">
              <div className="col-span-3 font-medium text-gray-700">
                Davogarlık tavoizmi:
              </div>
              <div className="col-span-3 text-gray-600">test uchun tavoizm</div>

              <div className="col-span-3 font-medium text-gray-700">
                Ariza raqami:
              </div>
              <div className="col-span-3 text-gray-600">
                {userInfo?.pin || "680559"}
              </div>

              <div className="col-span-3 font-medium text-gray-700">
                Sinov turi:
              </div>
              <div className="col-span-3 text-gray-600">
                Davlat fuqarolik xizmatchisi
              </div>
            </div>
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

      <div className="bg-gray-50 p-4 rounded-lg mb-8 border border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-sm">
            <div className="font-medium text-gray-700 mb-1">
              Sinov boshlangan vaqt:
            </div>
            <div className="text-gray-600">25.02.2025 12:01:51</div>
          </div>
          <div className="text-sm">
            <div className="font-medium text-gray-700 mb-1">
              Sinov yakunlangan vaqt:
            </div>
            <div className="text-gray-600">25.02.2025 12:02:05</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <motion.button
          onClick={onRestartQuiz}
          className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-md hover:shadow-lg"
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
