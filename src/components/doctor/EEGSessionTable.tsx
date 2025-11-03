import React from "react";
import { Brain, Activity, Moon, ArrowUpRight, ArrowDownRight } from "lucide-react";

interface EEGSession {
  id: number;
  date: string;
  duration: string;
  focus: number;
  sleep: number;
  stress: number;
  improvement: number; // positive = improvement, negative = decline
}

interface EEGSessionTableProps {
  sessions: EEGSession[];
}

const EEGSessionTable: React.FC<EEGSessionTableProps> = ({ sessions }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-sm p-6 mt-8 mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
        <Brain className="text-emerald-600" /> EEG Session History
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm text-left">
                    <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
                <th className="py-3 px-4 border-b border-gray-200 text-left">Session ID</th>
                <th className="py-3 px-4 border-b border-gray-200 text-left">Date</th>
                <th className="py-3 px-4 border-b border-gray-200 text-left">Duration</th>
                <th className="py-3 px-4 border-b border-gray-200 text-left">
                <span className="inline-flex items-center gap-1">
                    <Activity size={14} className="text-emerald-600" /> Focus %
                </span>
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-left">
                <span className="inline-flex items-center gap-1">
                    <Moon size={14} className="text-blue-600" /> Sleep %
                </span>
                </th>
                <th className="py-3 px-4 border-b border-gray-200 text-left">Stress %</th>
                <th className="py-3 px-4 border-b border-gray-200 text-center">
                Improvement
                </th>
            </tr>
            </thead>


          <tbody>
            {sessions.map((session) => (
              <tr
                key={session.id}
                className="hover:bg-gray-50 border-b border-gray-100 transition"
              >
                <td className="py-3 px-4 font-medium text-gray-800">
                  #{session.id}
                </td>
                <td className="py-3 px-4 text-gray-600">{session.date}</td>
                <td className="py-3 px-4 text-gray-600">{session.duration}</td>
                <td className="py-3 px-4 text-gray-700">{session.focus}%</td>
                <td className="py-3 px-4 text-gray-700">{session.sleep}%</td>
                <td className="py-3 px-4 text-gray-700">{session.stress}%</td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`inline-flex items-center gap-1 font-medium ${
                      session.improvement >= 0
                        ? "text-emerald-600"
                        : "text-red-600"
                    }`}
                  >
                    {session.improvement >= 0 ? (
                      <ArrowUpRight size={14} />
                    ) : (
                      <ArrowDownRight size={14} />
                    )}
                    {session.improvement}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EEGSessionTable;
