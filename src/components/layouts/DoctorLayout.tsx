import { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";

export default function DoctorLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-60 bg-green-600 text-white p-4 space-y-4">
        <h2 className="text-lg font-bold">Doctor Panel</h2>
        <nav className="space-y-2">
          <Link to="/doctor/dashboard" className="block hover:underline">
            Dashboard
          </Link>
          <Link to="/doctor/mypatients" className="block hover:underline">
            My Patients
          </Link>
          <Link to="/doctor/reports" className="block hover:underline">
            Reports
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
