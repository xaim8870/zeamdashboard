import { Users, UserCog, Activity, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Doctors", value: 8, icon: <UserCog className="text-green-700" /> },
    { label: "Total Staff", value: 12, icon: <Users className="text-blue-700" /> },
    { label: "Total Patients", value: 230, icon: <Activity className="text-indigo-700" /> },
    { label: "Active EEG Sessions", value: 48, icon: <BrainCircuit className="text-pink-700" /> },
  ];

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-300 dark:border-gray-700 mb-8 pb-3">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          System Overview and Activity
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-5 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm flex items-center gap-4"
          >
            <div className="p-3 border border-gray-200 dark:border-gray-600">{item.icon}</div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
              <h2 className="text-2xl font-bold">{item.value}</h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Activity Section */}
      <div className="mt-10 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li>👩‍⚕️ Dr. Usama updated patient EEG record.</li>
          <li>🧑‍💼 Staff member Ali Raza added new appointment slots.</li>
          <li>🧠 New EEG device registered for clinic node #14.</li>
          <li>🗓️ Backup completed successfully on Oct 16, 2025.</li>
        </ul>
      </div>
    </div>
  );
}
