import { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";

export default function StaffLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-60 bg-blue-600 text-white p-4 space-y-4">
        <h2 className="text-lg font-bold">Staff Panel</h2>
        <nav className="space-y-2">
          <Link to="/staff/dashboard" className="block hover:underline">
            Dashboard
          </Link>
          <Link to="/staff/schedule" className="block hover:underline">
            Schedules
          </Link>
          <Link to="/staff/patients" className="block hover:underline">
            Patients
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
