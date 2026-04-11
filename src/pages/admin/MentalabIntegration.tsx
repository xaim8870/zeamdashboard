//src/pages/admin/MentalabIntegration.tsx
import { useNavigate } from "react-router-dom";
import { Brain, Cpu, FileText, Activity, CheckCircle2, AlertCircle } from "lucide-react";

export default function MentalabIntegration() {
  const navigate = useNavigate();

  const integrationEnabled = true;

  const stats = [
    { label: "Registered Devices", value: 4, icon: Cpu },
    { label: "Research Protocols", value: 3, icon: FileText },
    { label: "EEG Sessions", value: 12, icon: Activity },
  ];

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      <div className="border-b border-gray-300 dark:border-gray-700 mb-8 pb-3">
        <h1 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400 tracking-wide">
          Mentalab Integration
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Manage Mentalab research-grade EEG configuration, devices, protocols, and recorded sessions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
            <h2 className="text-xl font-semibold">Integration Status</h2>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium">
            {integrationEnabled ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-green-700 dark:text-green-400">Enabled</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span className="text-red-700 dark:text-red-400">Disabled</span>
              </>
            )}
          </div>

          <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <p><span className="font-semibold">Provider:</span> Mentalab Explore</p>
            <p><span className="font-semibold">Mode:</span> Research Grade EEG</p>
            <p><span className="font-semibold">Default Sampling:</span> 256 Hz</p>
          </div>
        </div>

        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                  <h3 className="text-3xl font-bold mt-2">{item.value}</h3>
                </div>
                <Icon className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => navigate("/admin/devices")}
            className="px-4 py-2 border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition"
          >
            Manage Devices
          </button>

          <button
            onClick={() => navigate("/admin/protocols")}
            className="px-4 py-2 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition"
          >
            View Protocols
          </button>

          <button
            onClick={() => navigate("/admin/eeg-sessions")}
            className="px-4 py-2 border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white transition"
          >
            Open EEG Sessions
          </button>
          <button
              onClick={() => navigate("/admin/eeg-sessions")}
              className="px-4 py-2 border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition"
            >
            Process EEG Sessions
          </button>
        </div>
      </div>
    </div>
  );
}