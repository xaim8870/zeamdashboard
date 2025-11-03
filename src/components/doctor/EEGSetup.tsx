import React, { useState } from "react";
import { Brain, Plus, Trash2, FileQuestion } from "lucide-react";

interface EEGSetupProps {
  selectedDevice: string;
  setSelectedDevice: (device: string) => void;
  selectedPatient: string;
  setSelectedPatient: (id: string) => void;
  questions: { id: number; text: string; type: string }[];
  setQuestions: React.Dispatch<
    React.SetStateAction<{ id: number; text: string; type: string }[]>
  >;
  onNext: () => void;
}

const EEGSetup: React.FC<EEGSetupProps> = ({
  selectedDevice,
  setSelectedDevice,
  selectedPatient,
  setSelectedPatient,
  questions,
  setQuestions,
  onNext,
}) => {
  const [questionText, setQuestionText] = useState("");
  const [questionType, setQuestionType] = useState("short");

  const addQuestion = () => {
    if (!questionText.trim()) return;
    setQuestions([
      ...questions,
      { id: questions.length + 1, text: questionText, type: questionType },
    ]);
    setQuestionText("");
  };

  const removeQuestion = (id: number) =>
    setQuestions(questions.filter((q) => q.id !== id));

  return (
    <div className="p-6 bg-[#f8f9fa] text-gray-800 min-h-screen">
      <div className="flex items-center justify-between mb-8 border-b border-gray-300 pb-3">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <Brain className="text-emerald-700" /> In-Clinic EEG Setup
        </h1>
      </div>

      {/* Device + Patient */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 p-5">
          <h2 className="font-semibold mb-3 text-gray-800">Select EEG Device</h2>
          <select
            className="w-full border border-gray-300 p-2 focus:border-emerald-600 outline-none"
            value={selectedDevice}
            onChange={(e) => setSelectedDevice(e.target.value)}
          >
            <option>Muse S Athena</option>
            <option>Neurosity Crown</option>
          </select>
          <p className="mt-2 text-sm text-gray-500">
            Selected Device:{" "}
            <span className="font-medium">{selectedDevice}</span>
          </p>
        </div>

        <div className="bg-white border border-gray-200 p-5">
          <h2 className="font-semibold mb-3 text-gray-800">Select Patient</h2>
          <input
            type="text"
            placeholder="Enter or search patient ID..."
            className="w-full border border-gray-300 p-2 focus:border-emerald-600 outline-none"
            value={selectedPatient}
            onChange={(e) => setSelectedPatient(e.target.value)}
          />
          <p className="mt-2 text-sm text-gray-500">
            Assigned Patient:{" "}
            <span className="font-medium">
              {selectedPatient || "Not selected"}
            </span>
          </p>
        </div>
      </div>

      {/* Questionnaire */}
      <div className="bg-white border border-gray-200 p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FileQuestion className="text-emerald-600" /> EEG Questionnaire
          </h2>
          <button
            onClick={addQuestion}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm"
          >
            <Plus size={16} /> Add Question
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter question..."
            className="border border-gray-300 p-2 focus:border-emerald-600 outline-none"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
          <select
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
            className="border border-gray-300 p-2 focus:border-emerald-600 outline-none"
          >
            <option value="short">Short Answer</option>
            <option value="scale">Scale (1–5)</option>
          </select>
        </div>

        {questions.length ? (
          <ul className="divide-y divide-gray-200">
            {questions.map((q) => (
              <li
                key={q.id}
                className="flex justify-between items-center py-3 text-sm"
              >
                <span>
                  <strong>Q{q.id}:</strong> {q.text}{" "}
                  <span className="text-gray-500">({q.type})</span>
                </span>
                <button
                  onClick={() => removeQuestion(q.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 size={16} />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">No questions added yet.</p>
        )}
      </div>

      <div className="text-right">
        <button
          onClick={onNext}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 text-sm"
        >
          Proceed to Pre-Session
        </button>
      </div>
    </div>
  );
};

export default EEGSetup;
