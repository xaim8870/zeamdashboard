import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Activity } from "lucide-react";

interface EEGLiveSessionProps {
  device: string;
  onNext: () => void;
}

const mockData = [
  { time: 1, focus: 50, relaxation: 30 },
  { time: 2, focus: 55, relaxation: 35 },
  { time: 3, focus: 60, relaxation: 40 },
  { time: 4, focus: 62, relaxation: 43 },
  { time: 5, focus: 65, relaxation: 46 },
];

const EEGLiveSession: React.FC<EEGLiveSessionProps> = ({
  device,
  onNext,
}) => {
  return (
    <div className="p-6 bg-[#f8f9fa] min-h-screen text-gray-800">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <Activity className="text-emerald-700" /> EEG Session in Progress
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Connected Device: <strong>{device}</strong>
      </p>

      <div className="bg-white border border-gray-200 p-4">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="focus"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="relaxation"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="text-right mt-6">
        <button
          onClick={onNext}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 text-sm"
        >
          End Session & Continue
        </button>
      </div>
    </div>
  );
};

export default EEGLiveSession;
