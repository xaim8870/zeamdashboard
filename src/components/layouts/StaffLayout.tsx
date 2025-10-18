import { Outlet, NavLink } from "react-router-dom";
import { FiTriangle } from "react-icons/fi";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { LayoutDashboard, Users, CalendarDays, LogOut } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function StaffLayout() {
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
              <FiTriangle size={22} className="text-blue-700 dark:text-blue-400" />
            </motion.div>
            <h1 className="text-lg font-bold tracking-wide text-blue-800 dark:text-blue-400">
              ZEAM HEALTH
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-1">
            <NavLink
              to="/staff/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-3 text-sm font-medium border-l-4 transition-all ${
                  isActive
                    ? "border-blue-700 bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-300"
                    : "border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`
              }
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </NavLink>

            <NavLink
              to="/staff/patients"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-3 text-sm font-medium border-l-4 transition-all ${
                  isActive
                    ? "border-blue-700 bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-300"
                    : "border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`
              }
            >
              <Users className="w-4 h-4" />
              Patients
            </NavLink>
          </nav>
        </div>

        {/* Logout */}
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
        <header className="mb-6 border-b border-gray-300 dark:border-gray-700 pb-3 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">
            Welcome, {user?.name || "Staff Member"}
          </h2>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Theme: {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </span>
        </header>

        <Outlet />
      </main>
    </div>
  );
}
