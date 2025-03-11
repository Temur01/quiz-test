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
    <div className="p-5 overflow-auto max-h-[calc(100vh-150px)]">
      {Object.entries(groupedQuestions).map(
        ([type, questionGroup], groupIndex) => (
          <div key={groupIndex} className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3 px-3 py-2 bg-white rounded-md">
              {type}
            </h3>
            <div className="grid grid-cols-5 gap-2.5">
              {questionGroup.map(({ question, index }) => {
                const isAnswered = answers[question.id] !== undefined;
                const isCurrent = index === currentQuestionIndex;

                // Use numbers instead of icons
                const questionNumber = index + 1;

                return (
                  <button
                    key={index}
                    onClick={() => onQuestionClick(index)}
                    className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
                      isCurrent
                        ? "bg-[#8CA1D3] text-white"
                        : isAnswered
                          ? "bg-[#8CA1D3] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {questionNumber}
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
