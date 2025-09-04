import { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-red-600 text-white p-4 space-y-4">
        <h2 className="text-lg font-bold">Admin Panel</h2>
        <nav className="space-y-2">
          <Link to="/admin/dashboard" className="block hover:underline">
            Dashboard
          </Link>
          <Link to="/admin/manage-users" className="block hover:underline">
            Manage Users
          </Link>
          <Link to="/admin/settings" className="block hover:underline">
            Settings
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
