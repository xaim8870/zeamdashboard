import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Calendar, Shield, Activity, HeartPulse } from "lucide-react";

export default function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock user data — replace with API
  const user = {
    id,
    name: "Admin Ahsan",
    email: "ahsan@zeamhealth.com",
    phone: "+92 312 7891234",
    role: "System Administrator",
    joinDate: "2023-12-01",
    systemAccess: "Full",
    logins: 257,
  };

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 tracking-wide">
          User Profile
        </h1>
      </div>

      {/* Profile Box */}
      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">{user.name}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-emerald-700" /> {user.email}
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-700" /> {user.phone}
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-700" /> Role: {user.role}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-emerald-700" /> Joined: {user.joinDate}
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-700" /> System Access: {user.systemAccess}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-300 dark:border-gray-700 bg-emerald-50 dark:bg-emerald-950">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Total Logins</h3>
            <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mt-1">
              {user.logins}
            </p>
          </div>
          <div className="p-4 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-950">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Status</h3>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-1">
              Active
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={() => alert('Viewing user system activity...')}
            className="px-5 py-2 border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition text-sm"
          >
            View Access Logs
          </button>
        </div>
      </div>
    </div>
  );
}
