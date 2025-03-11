import React from "react";
import { Question } from "../types";

interface QuestionMapProps {
  currentQuestionIndex: number;
  answers: Record<number, string>;
  onQuestionClick: (index: number) => void;
  questions: Question[];
  totalQuestions?: number;
}

const QuestionMap: React.FC<QuestionMapProps> = ({
  currentQuestionIndex,
  answers,
  onQuestionClick,
  questions,
}) => {
  const groupedQuestions = questions.reduce(
    (acc, question, index) => {
      const type = question.type || "Davlat tili";
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push({ question, index });
      return acc;
    },
    {} as Record<string, { question: Question; index: number }[]>,
  );

  return (
    <div>
      {Object.entries(groupedQuestions).map(
        ([type, questionGroup], groupIndex) => (
          <div key={groupIndex} className="mt-3 bg-white p-5 rounded-md">
            <h3 className="text-sm font-medium text-gray-500 mb-3 py-2 pe-3">
              {type}
            </h3>
            <div className="grid grid-cols-5 gap-2.5">
              {questionGroup.map(({ question, index }) => {
                const isAnswered = answers[question.id] !== undefined;
                const isCurrent = index === currentQuestionIndex;

                const questionNumber = index + 1;

                return (
                  <button
                    key={index}
                    onClick={() => onQuestionClick(index)}
                    className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
                      isCurrent
                        ? "bg-[#7B90C2] text-white shadow-md ring-2 ring-[#A7B7DB]"
                        : isAnswered
                          ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-sm"
                          : "bg-[#8CA1D3] text-white hover:bg-[#8CA1D3]"
                    }`}
                  >
                    {isAnswered && !isCurrent ? (
                      <div className="flex justify-center items-center">
                        {questionNumber}
                      </div>
                    ) : (
                      questionNumber
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default QuestionMap;
