// src/components/doctor/MetricsChart.tsx
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", progress: 70 },
  { day: "Tue", progress: 72 },
  { day: "Wed", progress: 75 },
  { day: "Thu", progress: 80 },
  { day: "Fri", progress: 82 },
  { day: "Sat", progress: 84 },
  { day: "Sun", progress: 86 },
];

export default function MetricsChart() {
  return (
    <div className="p-5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Weekly Improvement Metrics
      </h3>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="day" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              color: "#f9fafb",
              borderRadius: 0,
              border: "1px solid #4b5563",
            }}
          />
          <Line
            type="monotone"
            dataKey="progress"
            stroke="#4f46e5"
            strokeWidth={2}
            dot={{ r: 3, fill: "#4f46e5" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
