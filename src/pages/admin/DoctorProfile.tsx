// src/pages/admin/DoctorProfile.tsx
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Calendar, Brain, Activity, BarChart3 } from "lucide-react";

export default function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  // This data can later come from backend via API call
  const doctor = {
    id,
    name: "Dr. Usama",
    email: "usama@zeamhealth.com",
    phone: "+92 300 1234567",
    specialization: "Neurology",
    totalPatients: 42,
    totalEEGSessions: 123,
    joined: "2024-01-15",
  };

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-full border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
          Doctor Profile
        </h1>
      </div>

      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">{doctor.name}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> {doctor.email}</div>
          <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {doctor.phone}</div>
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Joined: {doctor.joined}</div>
          <div className="flex items-center gap-2"><Brain className="w-4 h-4" /> Specialization: {doctor.specialization}</div>
        </div>

        <div className="mt-6 border-t border-gray-300 dark:border-gray-700 pt-4 flex gap-4">
          <div className="p-4 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex-1">
            <h3 className="text-sm font-semibold">Total EEG Sessions</h3>
            <p className="text-2xl font-bold">{doctor.totalEEGSessions}</p>
          </div>
          <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg flex-1">
            <h3 className="text-sm font-semibold">Patients Handled</h3>
            <p className="text-2xl font-bold">{doctor.totalPatients}</p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            className="px-5 py-2 border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition"
            onClick={() => alert("View Doctor’s EEG Sessions")}
          >
            <BarChart3 className="inline w-4 h-4 mr-2" /> View EEG Data
          </button>
        </div>
      </div>
    </div>
  );
}
