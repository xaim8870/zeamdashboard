// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface MenuItem {
  label: string;
  path: string;
}

const Navbar = () => {
  const { user, logout } = useAuth();

  // Define roles and their menu items
  const menuItems: Record<string, MenuItem[]> = {
    "doctor-admin": [
      { label: "Dashboard", path: "/admin/dashboard" },
      { label: "Doctors", path: "/admin/doctors" },
      { label: "Staff", path: "/admin/staff" },
      { label: "Patients", path: "/admin/patients" },
      { label: "Analytics", path: "/admin/analytics" },
    ],
    doctor: [
      { label: "Dashboard", path: "/doctor/dashboard" },
      { label: "My Patients", path: "/doctor/patients" },
      { label: "Reports", path: "/doctor/reports" },
      { label: "Schedule", path: "/doctor/schedule" },
    ],
    staff: [
      { label: "Dashboard", path: "/staff/dashboard" },
      { label: "Doctor Schedule", path: "/staff/schedule" },
      { label: "Appointments", path: "/staff/appointments" },
    ],
  };

  // If user is not logged in yet (e.g. loading), show nothing
  if (!user) {
    return null;
  }

  const items = menuItems[user.role ?? ""] || [];

  return (
    <nav className="bg-white z-10 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-3 flex justify-between items-center">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <span className="font-bold text-indigo-600 text-lg">ZEAM Health</span>
        <div className="hidden md:flex gap-4">
          {items.map((item: MenuItem) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {user.name ?? "User"} ({user.role})
        </span>
        <button
          onClick={logout}
          className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
