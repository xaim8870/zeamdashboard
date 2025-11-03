import React, { useState } from "react";
import { FileQuestion } from "lucide-react";

interface EEGQuestionnaireProps {
  title: string;
  questions: { id: number; text: string; type: string }[];
  onNext: () => void;
}

const EEGQuestionnaire: React.FC<EEGQuestionnaireProps> = ({
  title,
  questions,
  onNext,
}) => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  return (
    <div className="p-6 bg-[#f8f9fa] min-h-screen text-gray-800">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <FileQuestion className="text-emerald-700" /> {title}
      </h2>

      <div className="bg-white border border-gray-200 p-6">
        {questions.map((q) => (
          <div key={q.id} className="mb-5">
            <p className="font-medium mb-2">
              Q{q.id}. {q.text}
            </p>

            {q.type === "short" ? (
              <input
                type="text"
                className="border border-gray-300 p-2 w-full focus:border-emerald-600 outline-none"
                value={answers[q.id] || ""}
                onChange={(e) =>
                  setAnswers({ ...answers, [q.id]: e.target.value })
                }
              />
            ) : (
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((n) => (
                  <label key={n} className="flex flex-col items-center text-sm">
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      value={n}
                      onChange={(e) =>
                        setAnswers({ ...answers, [q.id]: e.target.value })
                      }
                    />
                    {n}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-right mt-6">
        <button
          onClick={onNext}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 text-sm"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default EEGQuestionnaire;
