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
  // Calculate results by category
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
    <div className="bg-white max-w-3xl mx-auto p-6 rounded-lg shadow">
      <h2 className="text-center text-lg font-medium mb-4">
        Sinov yakunlandi. Siz natijalaringiz bilan tanishib chiqishingiz mumkin.
      </h2>

      <div className="flex mb-6">
        <div className="w-1/4">
          <img
            src="https://via.placeholder.com/100"
            alt="User photo"
            className="w-24 h-32 object-cover border border-gray-300"
          />
        </div>
        <div className="w-3/4">
          <h3 className="font-bold text-lg mb-1">
            {userInfo?.name || "RAVSHANOV ELYOR AXTAM O'G'LI"}
          </h3>
          <div className="grid grid-cols-6 gap-1 text-sm">
            <div className="col-span-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                  clipRule="evenodd"
                />
              </svg>
              testUzinfocom
            </div>
            <div className="col-span-4"></div>

            <div className="col-span-3 font-medium">Davogarlık tavoizmi:</div>
            <div className="col-span-3">test uchun tavoizm</div>

            <div className="col-span-3 font-medium">Ariza raqami:</div>
            <div className="col-span-3">{userInfo?.pin || "680559"}</div>

            <div className="col-span-3 font-medium">Sinov turi:</div>
            <div className="col-span-3">Davlat fuqarolik xizmatchisi</div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border text-left">Fanlar nomi</th>
              <th className="py-2 px-4 border text-center">Savollar soni</th>
              <th className="py-2 px-4 border text-center">To'g'ri javoblar</th>
              <th className="py-2 px-4 border text-center">Ball</th>
              <th className="py-2 px-4 border text-center">Tili</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border">IQ</td>
              <td className="py-2 px-4 border text-center">10</td>
              <td className="py-2 px-4 border text-center">1</td>
              <td className="py-2 px-4 border text-center">2.5</td>
              <td className="py-2 px-4 border text-center">O'zbek tili</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Davlat tili</td>
              <td className="py-2 px-4 border text-center">10</td>
              <td className="py-2 px-4 border text-center">1</td>
              <td className="py-2 px-4 border text-center">2.5</td>
              <td className="py-2 px-4 border text-center">O'zbek tili</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">
                Axborot-kommunikatsiya texnologiyalari
              </td>
              <td className="py-2 px-4 border text-center">10</td>
              <td className="py-2 px-4 border text-center">1</td>
              <td className="py-2 px-4 border text-center">2.5</td>
              <td className="py-2 px-4 border text-center">O'zbek tili</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">Milliy qonunchilik</td>
              <td className="py-2 px-4 border text-center">10</td>
              <td className="py-2 px-4 border text-center">0</td>
              <td className="py-2 px-4 border text-center">0</td>
              <td className="py-2 px-4 border text-center">O'zbek tili</td>
            </tr>
            <tr className="bg-gray-100 font-medium">
              <td className="py-2 px-4 border">Jami</td>
              <td className="py-2 px-4 border text-center">40</td>
              <td className="py-2 px-4 border text-center">3</td>
              <td className="py-2 px-4 border text-center">7.5</td>
              <td className="py-2 px-4 border"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center">
        <motion.button
          onClick={onRestartQuiz}
          className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
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
