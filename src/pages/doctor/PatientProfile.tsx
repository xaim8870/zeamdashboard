import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Brain,
  Moon,
  Activity,
  HeartPulse,
  Info,
  Clock,
  BarChart3,
  FileText,
  User,
  Send,
  MessageCircle,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import EEGSessionTable from "../../components/doctor/EEGSessionTable";

// Mock patient data (replace later with API)
const mockPatients = [
  {
    id: 1,
    name: "Ali Raza",
    gender: "Male",
    age: 34,
    condition: "Epilepsy",
    status: "Active",
    email: "ali.raza@example.com",
    phone: "+92 300 1234567",
    joinDate: "2025-07-01",
    lastEEG: "2025-09-20",
    sessions: 6,
    sleepScore: 82,
    stressScore: 46,
    anxietyScore: 54,
    depressionScore: 33,
  },
];

// Mock EEG session trend data
const eegTrend = [
  { session: "1", Stress: 55, Sleep: 70, Anxiety: 50 },
  { session: "2", Stress: 52, Sleep: 75, Anxiety: 48 },
  { session: "3", Stress: 50, Sleep: 78, Anxiety: 45 },
  { session: "4", Stress: 49, Sleep: 80, Anxiety: 43 },
  { session: "5", Stress: 46, Sleep: 82, Anxiety: 41 },
  { session: "6", Stress: 44, Sleep: 83, Anxiety: 40 },
];

const PatientProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const patient = mockPatients.find((p) => p.id === parseInt(id || ""));
  const [doctorNotes, setDoctorNotes] = useState("");

  // 🧠 Chat State
  const [chat, setChat] = useState<{ sender: string; text: string }[]>([]);
  const [message, setMessage] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (!message.trim()) return;
    setChat((prev) => [...prev, { sender: "doctor", text: message }]);
    setMessage("");
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!patient) {
    return (
      <div className="p-10 min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Patient Not Found</h2>
        <button
          onClick={() => navigate("/doctor/mypatients")}
          className="bg-emerald-600 hover:bg-emerald-700 px-6 py-2 text-white"
        >
          Back to My Patients
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 min-h-screen bg-[#f8f9fa] text-gray-800">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 mb-6 font-medium"
      >
        <ArrowLeft size={18} /> Back to Patients
      </button>

      {/* Header */}
      <div className="bg-white shadow-sm border border-gray-200 p-6 mb-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-emerald-100 text-emerald-700">
            <User size={32} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{patient.name}</h1>
            <p className="text-gray-600">
              {patient.gender}, {patient.age} years old
            </p>
            <p className="text-sm text-gray-500">
              Condition: {patient.condition}
            </p>
          </div>
        </div>
        <div>
          <span
            className={`px-4 py-2 text-sm font-medium ${
              patient.status === "Active"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {patient.status}
          </span>
        </div>
      </div>

      {/* EEG Summary */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <SummaryCard
          icon={<Brain />}
          label="EEG Sessions"
          value={patient.sessions}
          color="bg-emerald-50 text-emerald-700"
        />
        <SummaryCard
          icon={<Moon />}
          label="Sleep Performance"
          value={`${patient.sleepScore}%`}
          color="bg-blue-50 text-blue-700"
        />
        <SummaryCard
          icon={<Activity />}
          label="Stress Level"
          value={`${patient.stressScore}%`}
          color="bg-yellow-50 text-yellow-700"
        />
        <SummaryCard
          icon={<HeartPulse />}
          label="Anxiety"
          value={`${patient.anxietyScore}%`}
          color="bg-red-50 text-red-700"
        />
      </div>

      {/* EEG Trend Chart */}
      <div className="bg-white border border-gray-200 p-6 mb-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="text-emerald-600" />
          <h2 className="text-xl font-semibold">EEG Session Trends</h2>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={eegTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="session" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Stress" stroke="#facc15" strokeWidth={2} />
            <Line type="monotone" dataKey="Sleep" stroke="#3b82f6" strokeWidth={2} />
            <Line type="monotone" dataKey="Anxiety" stroke="#ef4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* EEG & Health Metrics */}
      <div className="bg-white border border-gray-200 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          EEG & Health Metrics
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Metric label="Sleep Performance" value={patient.sleepScore} color="bg-blue-500" />
          <Metric label="Stress" value={patient.stressScore} color="bg-yellow-500" />
          <Metric label="Anxiety" value={patient.anxietyScore} color="bg-red-500" />
          <Metric label="Depression" value={patient.depressionScore} color="bg-purple-500" />
        </div>
      </div>

      {/* Info Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <InfoCard
          title="Personal Information"
          icon={<Info />}
          items={[
            { label: "Email", value: patient.email },
            { label: "Phone", value: patient.phone },
            { label: "Join Date", value: patient.joinDate },
          ]}
        />
        <InfoCard
          title="EEG Activity"
          icon={<Clock />}
          items={[
            { label: "Last EEG Session", value: patient.lastEEG },
            { label: "Session Count", value: patient.sessions },
            { label: "Average Duration", value: "25 mins" },
          ]}
        />
      </div>

      {/* Doctor’s Notes */}
      <div className="bg-white border border-gray-200 p-6 mb-12 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="text-emerald-600" />
          <h2 className="text-xl font-semibold">Doctor’s Notes</h2>
        </div>
        <textarea
          value={doctorNotes}
          onChange={(e) => setDoctorNotes(e.target.value)}
          placeholder="Add your observations, EEG interpretations, or treatment adjustments..."
          className="w-full h-32 p-3 border border-gray-300 focus:border-emerald-600 outline-none text-sm"
        />
        <div className="mt-4 text-right">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 text-sm">
            Save Notes
          </button>
        </div>
      </div>

      {/* 💬 Doctor–Patient Chat */}
      <div className="bg-white border border-gray-200 p-6 mb-12 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle className="text-purple-600" />
          <h2 className="text-xl font-semibold">Send Message To This User</h2>
        </div>

        <div className="flex flex-col h-[400px] border border-gray-200 dark:border-gray-700  overflow-hidden">
          {/* Chat Window */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            {chat.length === 0 ? (
              <p className="text-gray-500 text-sm text-center mt-10">
                No messages yet. Start the conversation.
              </p>
            ) : (
              chat.map((msg, index) => (
                <div
                  key={index}
                  className={`my-2 flex ${
                    msg.sender === "doctor" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-xl max-w-xs text-sm ${
                      msg.sender === "doctor"
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Section */}
          <div className="p-3 flex items-center border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
            />
            <button
              onClick={handleSend}
              className="ml-3 p-2  bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* EEG Session History */}
      <EEGSessionTable
        sessions={[
          { id: 1, date: "2025-08-01", duration: "25 mins", focus: 72, sleep: 80, stress: 50, improvement: 5 },
          { id: 2, date: "2025-08-05", duration: "28 mins", focus: 75, sleep: 83, stress: 47, improvement: 7 },
          { id: 3, date: "2025-08-12", duration: "27 mins", focus: 78, sleep: 85, stress: 44, improvement: 10 },
          { id: 4, date: "2025-08-20", duration: "26 mins", focus: 81, sleep: 86, stress: 42, improvement: 8 },
          { id: 5, date: "2025-09-01", duration: "25 mins", focus: 83, sleep: 88, stress: 40, improvement: 9 },
        ]}
      />

      {/* Back Button */}
      <div className="text-center">
        <button
          onClick={() => navigate("/doctor/mypatients")}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 shadow-sm"
        >
          Back to My Patients
        </button>
      </div>
    </div>
  );
};

/* ===============================
   Reusable Components
================================= */
const SummaryCard = ({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color: string;
}) => (
  <div
    className={`p-5 ${color} shadow-sm border border-gray-200 text-center flex flex-col items-center justify-center`}
  >
    <div className="mb-2">{icon}</div>
    <p className="text-sm font-medium">{label}</p>
    <h3 className="text-2xl font-bold">{value}</h3>
  </div>
);

const Metric = ({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) => (
  <div>
    <div className="flex justify-between mb-1 text-sm">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full bg-gray-200 h-3">
      <div className={`${color} h-3`} style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

const InfoCard = ({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: { label: string; value: string | number }[];
}) => (
  <div className="bg-white border border-gray-200 p-6 shadow-sm">
    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900">
      {icon} {title}
    </h3>
    <ul className="space-y-2 text-sm">
      {items.map((item, idx) => (
        <li key={idx}>
          <span className="font-medium">{item.label}: </span>
          <span className="text-gray-700">{item.value}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default PatientProfile;
