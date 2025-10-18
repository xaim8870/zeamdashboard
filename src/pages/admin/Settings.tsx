import { Moon, Sun, RefreshCw, Database } from "lucide-react";
import { useState, useContext } from "react";
import { ThemeContext } from "../../App";

export default function AdminSettings() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [lastBackup, setLastBackup] = useState("Oct 10, 2025");

  const handleBackup = () => {
    setLastBackup(new Date().toDateString());
    alert("System backup completed successfully ✅");
  };

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      <div className="border-b border-gray-300 dark:border-gray-700 mb-8 pb-3">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          System preferences and maintenance tools
        </p>
      </div>

      <div className="space-y-6">
        {/* Theme Control */}
        <div className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Theme</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Current mode: {theme === "dark" ? "Dark" : "Light"}
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 border border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
            Toggle Theme
          </button>
        </div>

        {/* Backup Section */}
        <div className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Database className="text-indigo-600" /> Database Backup
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Last backup: {lastBackup}
          </p>
          <button
            onClick={handleBackup}
            className="flex items-center gap-2 px-4 py-2 border border-indigo-700 text-indigo-700 hover:bg-indigo-700 hover:text-white"
          >
            <RefreshCw className="w-4 h-4" /> Run Backup
          </button>
        </div>
      </div>
    </div>
  );
}
