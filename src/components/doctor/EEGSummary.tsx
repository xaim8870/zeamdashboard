import React from "react";
import { Brain } from "lucide-react";

interface EEGSummaryProps {
  patientId: string;
  device: string;
  onRestart: () => void;
}

const EEGSummary: React.FC<EEGSummaryProps> = ({
  patientId,
  device,
  onRestart,
}) => {
  return (
    <div className="p-6 bg-[#f8f9fa] min-h-screen text-gray-800">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <Brain className="text-emerald-700" /> Session Summary
      </h2>

      <div className="bg-white border border-gray-200 p-6">
        <p className="mb-2">
          <strong>Device:</strong> {device}
        </p>
        <p className="mb-2">
          <strong>Patient ID:</strong> {patientId || "Not provided"}
        </p>
        <p className="mb-2">
          <strong>Duration:</strong> ~25 minutes
        </p>
        <p className="mb-2">
          <strong>Average Focus:</strong> 72%
        </p>
        <p className="mb-4">
          <strong>Average Relaxation:</strong> 65%
        </p>

        <div className="text-right">
          <button
            onClick={onRestart}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 text-sm"
          >
            Save Session & Start New
          </button>
        </div>
      </div>
    </div>
  );
};

export default EEGSummary;
