// src/components/doctor/PatientCard.tsx
import { Heart, Activity, User } from "lucide-react";

interface Patient {
  id: number;
  name: string;
  age: number;
  sessions: number;
  improvement: number;
  heartRate: number;
}

export default function PatientCard({ patient }: { patient: Patient }) {
  return (
    <div className="p-5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-sm transition-all hover:shadow-md cursor-pointer">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {patient.name}
        </h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Age: {patient.age}
        </span>
      </div>

      <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
        <p className="flex items-center gap-2">
          <User className="w-4 h-4 text-indigo-600" />
          Sessions: {patient.sessions}
        </p>
        <p className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-pink-600" />
          Improvement: {patient.improvement}%
        </p>
        <p className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-red-600" />
          Heart Rate: {patient.heartRate} bpm
        </p>
      </div>
    </div>
  );
}
