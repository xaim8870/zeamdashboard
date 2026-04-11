import { Outlet, NavLink } from "react-router-dom";
import { FiTriangle } from "react-icons/fi";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  Brain,
  Cpu,
  FileText,
  Activity,
} from "lucide-react";

export default function AdminLayout() {
  const { logout } = useAuth();
  const { theme } = useContext(ThemeContext);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-6 py-4 text-sm font-medium border-l-4 transition-all whitespace-nowrap ${
      isActive
        ? "border-green-700 bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-300"
        : "border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
    }`;

  return (
    <div className="h-screen overflow-hidden flex bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <aside className="w-64 shrink-0 h-screen border-r border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-center gap-2 py-6 border-b border-gray-300 dark:border-gray-700">
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              <FiTriangle
                size={22}
                className="text-green-700 dark:text-green-400"
              />
            </motion.div>

            <h1 className="text-lg font-bold tracking-wide text-green-800 dark:text-green-400 whitespace-nowrap">
              ZEAM HEALTH
            </h1>
          </div>

          <nav className="mt-6 space-y-1">
            <NavLink to="/admin/dashboard" className={navClass}>
              <LayoutDashboard className="w-4 h-4 shrink-0" />
              <span>Dashboard</span>
            </NavLink>

            <NavLink to="/admin/manage-users" className={navClass}>
              <Users className="w-4 h-4 shrink-0" />
              <span>Manage Users</span>
            </NavLink>

            <NavLink to="/admin/mentalab" className={navClass}>
              <Brain className="w-4 h-4 shrink-0" />
              <span>Mentalab Integration</span>
            </NavLink>

            <NavLink to="/admin/devices" className={navClass}>
              <Cpu className="w-4 h-4 shrink-0" />
              <span>Devices</span>
            </NavLink>

            <NavLink to="/admin/protocols" className={navClass}>
              <FileText className="w-4 h-4 shrink-0" />
              <span>Research Protocols</span>
            </NavLink>

            <NavLink to="/admin/eeg-sessions" className={navClass}>
              <Activity className="w-4 h-4 shrink-0" />
              <span>EEG Sessions</span>
            </NavLink>

            <NavLink to="/admin/settings" className={navClass}>
              <Settings className="w-4 h-4 shrink-0" />
              <span>Settings</span>
            </NavLink>
          </nav>
        </div>

        <div className="p-6 border-t border-gray-300 dark:border-gray-700">
          <button
            onClick={logout}
            className="w-full text-center text-sm px-4 py-2 border border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 min-w-0 h-screen flex flex-col">
        <header className="shrink-0 px-6 py-6 border-b border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Admin Panel</h2>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Current Theme: {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </span>
        </header>

        <main className="flex-1 min-h-0 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}