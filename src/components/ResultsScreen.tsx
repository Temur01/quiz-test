import { Question } from "../types";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

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
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  useEffect(() => {
    if (showCaptcha) {
      loadCaptchaEnginge(6);
    }
  }, [showCaptcha]);

  const totalQuestions = questions.length;
  const correctAnswers = questions.filter(
    (q) => answers[q.id] === q.correctAnswer,
  ).length;
  const incorrectAnswers = totalQuestions - correctAnswers;
  const percentage = (correctAnswers / totalQuestions) * 100;

  const getFeedback = () => {
    if (percentage >= 90) return "Ajoyib natija!";
    if (percentage >= 70) return "Yaxshi natija!";
    if (percentage >= 50) return "O'rtacha natija.";
    return "Yaxshiroq tayyorlanishingiz kerak.";
  };

  const handleRestartRequest = () => {
    setShowCaptcha(true);
  };

  const handleCaptchaSubmit = () => {
    if (validateCaptcha(captchaValue)) {
      setCaptchaError("");
      setShowCaptcha(false);
      onRestartQuiz();
    } else {
      setCaptchaError("Noto'g'ri CAPTCHA. Iltimos, qayta urinib ko'ring.");
      loadCaptchaEnginge(6); // Reload captcha
      setCaptchaValue("");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Test natijalarif</h2>

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
            <h4 className="font-medium text-purple-800">
              Muvaffaqiyat darajasi
            </h4>
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
          {!showCaptcha ? (
            <motion.button
              onClick={handleRestartRequest}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Qayta boshlash
            </motion.button>
          ) : (
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Testni qayta boshlash uchun CAPTCHA-ni tasdiqlang
              </h3>
              <div className="flex flex-col items-center space-y-4">
                <div className="captcha-container">
                  <LoadCanvasTemplate />
                </div>
                <input
                  type="text"
                  placeholder="CAPTCHA kodini kiriting"
                  value={captchaValue}
                  onChange={(e) => setCaptchaValue(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {captchaError && (
                  <p className="text-red-500 text-sm">{captchaError}</p>
                )}
                <div className="flex space-x-4">
                  <motion.button
                    onClick={() => setShowCaptcha(false)}
                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Bekor qilish
                  </motion.button>
                  <motion.button
                    onClick={handleCaptchaSubmit}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Tasdiqlash
                  </motion.button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
