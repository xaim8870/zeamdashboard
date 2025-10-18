// src/components/doctor/NotesTimeLine.tsx
import { Clock, FileText } from "lucide-react";

const notes = [
  {
    date: "2025-10-10",
    note: "EEG session completed successfully with consistent alpha activity.",
  },
  {
    date: "2025-10-08",
    note: "Patient reported better sleep quality after neurofeedback session.",
  },
  {
    date: "2025-10-06",
    note: "Slight irregularity in beta waves detected; follow-up scheduled.",
  },
];

export default function NotesTimeline() {
  return (
    <div className="p-5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Recent Notes
      </h3>

      <div className="space-y-4">
        {notes.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 border-l-2 border-indigo-600 pl-3">
            <Clock className="w-4 h-4 mt-1 text-indigo-600" />
            <div>
              <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">
                {item.note}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
