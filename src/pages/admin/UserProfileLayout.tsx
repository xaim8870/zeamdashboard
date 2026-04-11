// src/components/admin/UserProfileLayout.tsx
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UserProfileLayout({ title, children }: { title: string; children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-full border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
          {title}
        </h1>
      </div>

      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-6 rounded-lg shadow-sm">
        {children}
      </div>
    </div>
  );
}
