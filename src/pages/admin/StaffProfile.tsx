import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Calendar, ClipboardList, UserCog } from "lucide-react";

export default function StaffProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock staff data — replace later with API call
  const staff = {
    id,
    name: "Ali Raza",
    email: "ali@zeamhealth.com",
    phone: "+92 300 4567890",
    role: "Nurse / Medical Assistant",
    department: "Neurology Ward",
    joinDate: "2024-02-10",
    tasksCompleted: 147,
    shiftsHandled: 83,
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
          Staff Profile
        </h1>
      </div>

      {/* Profile Info Box */}
      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">{staff.name}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-emerald-700" /> {staff.email}
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-700" /> {staff.phone}
          </div>
          <div className="flex items-center gap-2">
            <UserCog className="w-4 h-4 text-emerald-700" /> Role: {staff.role}
          </div>
          <div className="flex items-center gap-2">
            <ClipboardList className="w-4 h-4 text-emerald-700" /> Department: {staff.department}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-emerald-700" /> Joined: {staff.joinDate}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-300 dark:border-gray-700 bg-emerald-50 dark:bg-emerald-950">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Tasks Completed</h3>
            <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mt-1">
              {staff.tasksCompleted}
            </p>
          </div>
          <div className="p-4 border border-gray-300 dark:border-gray-700 bg-blue-50 dark:bg-blue-950">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Shifts Handled</h3>
            <p className="text-2xl font-bold text-blue-700 dark:text-blue-400 mt-1">
              {staff.shiftsHandled}
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={() => alert('Viewing staff activity logs...')}
            className="px-5 py-2 border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition text-sm"
          >
            View Activity Logs
          </button>
        </div>
      </div>
    </div>
  );
}
