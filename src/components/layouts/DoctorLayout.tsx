import { Outlet, NavLink } from "react-router-dom";
import { FiTriangle } from "react-icons/fi";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { LayoutDashboard, Users, FileText, LogOut } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function DoctorLayout() {
  const { user, logout } = useAuth();
  const { theme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col justify-between">
        <div>
          {/* Brand Header */}
          <div className="flex items-center justify-center gap-2 py-6 border-b border-gray-300 dark:border-gray-700">
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              <FiTriangle
                size={22}
                className="text-emerald-700 dark:text-emerald-400"
              />
            </motion.div>
            <h1 className="text-lg font-bold tracking-wide text-emerald-800 dark:text-emerald-400">
              ZEAM HEALTH
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-1">
            <NavLink
              to="/doctor/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-3 text-sm font-medium border-l-4 transition-all ${
                  isActive
                    ? "border-emerald-700 bg-emerald-50 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300"
                    : "border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`
              }
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </NavLink>

            <NavLink
              to="/doctor/mypatients"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-3 text-sm font-medium border-l-4 transition-all ${
                  isActive
                    ? "border-emerald-700 bg-emerald-50 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300"
                    : "border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`
              }
            >
              <Users className="w-4 h-4" />
              My Patients
            </NavLink>

            <NavLink
              to="/doctor/reports"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-3 text-sm font-medium border-l-4 transition-all ${
                  isActive
                    ? "border-emerald-700 bg-emerald-50 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300"
                    : "border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`
              }
            >
              <FileText className="w-4 h-4" />
              Reports
            </NavLink>
          </nav>
        </div>

        {/* Logout Button */}
        <div className="p-6 border-t border-gray-300 dark:border-gray-700">
          <button
            onClick={logout}
            className="w-full text-center text-sm px-4 py-2 border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Header */}
        <header className="mb-6 border-b border-gray-300 dark:border-gray-700 pb-3 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">
            Welcome, {user?.name || "Doctor"}
          </h2>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Current Theme: {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </span>
        </header>

        {/* Content Outlet */}
        <Outlet />
      </main>
    </div>
  );
}
