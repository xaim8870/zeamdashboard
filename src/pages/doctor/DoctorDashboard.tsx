import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, HeartPulse, UserRound, TrendingUp } from "lucide-react";
import { getAssignedPatients, getDoctorStats } from "../../services/doctorService";
import PatientCard from "../../components/doctor/PatientCard";
import MetricsChart from "../../components/doctor/MetricsChart";
import NotesTimeline from "../../components/doctor/NotesTimeLine";

interface Patient {
  id: number;
  name: string;
  age: number;
  sessions: number;
  improvement: number;
  heartRate: number;
}

const DoctorDashboard = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [stats, setStats] = useState({ totalPatients: 0, avgImprovement: 0, activeSessions: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getAssignedPatients(), getDoctorStats()])
      .then(([patientsData, statsData]) => {
        setPatients(patientsData);
        setStats(statsData);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500">
        Loading dashboard...
      </div>
    );

  return (
    <div className="p-6 mt-8 space-y-8 bg-gray-50 dark:bg-gray-900 min-h-screen transition-all">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center border-b border-gray-300 dark:border-gray-700 pb-3"
      >
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Welcome, Dr. Usama 👨‍⚕️
        </h1>
        <button className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 border border-indigo-800">
          New Observation
        </button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={<UserRound className="w-6 h-6 text-indigo-600" />}
          title="Assigned Patients"
          value={stats.totalPatients}
        />
        <StatCard
          icon={<TrendingUp className="w-6 h-6 text-green-600" />}
          title="Avg Improvement"
          value={`${stats.avgImprovement}%`}
        />
        <StatCard
          icon={<Activity className="w-6 h-6 text-pink-600" />}
          title="Active EEG Sessions"
          value={stats.activeSessions}
        />
      </div>

      {/* Patient Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {patients.map((p) => (
          <PatientCard key={p.id} patient={p} />
        ))}
      </div>

      {/* Metrics + Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        <MetricsChart />
        <NotesTimeline />
      </div>
    </div>
  );
};

// ✅ Stat Card (Square-edged version)
const StatCard = ({ icon, title, value }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-sm"
  >
    <div className="p-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{value}</h2>
    </div>
  </motion.div>
);

export default DoctorDashboard;
