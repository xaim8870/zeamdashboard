import React, { useState } from "react";
import { CalendarDays, User, Clock, Save, Plus } from "lucide-react";

const StaffDashboard: React.FC = () => {
  const [schedules, setSchedules] = useState([
    { id: 1, patientId: "P-101", patient: "Ali Raza", doctorId: "D-01", doctor: "Dr. Usama", date: "2025-10-18", time: "10:00 AM" },
  ]);

  const [newSchedule, setNewSchedule] = useState({
    patientId: "",
    patient: "",
    doctorId: "",
    doctor: "",
    date: "",
    time: "",
  });

  const [showForm, setShowForm] = useState(false);

  const handleAddSchedule = (e: React.FormEvent) => {
    e.preventDefault();

    const { patientId, doctorId, patient, doctor, date, time } = newSchedule;
    if (!patientId || !doctorId || !patient || !doctor || !date || !time) {
      alert("Please fill all fields (patient/doctor IDs are required).");
      return;
    }

    setSchedules([...schedules, { id: schedules.length + 1, ...newSchedule }]);
    setNewSchedule({
      patientId: "",
      patient: "",
      doctorId: "",
      doctor: "",
      date: "",
      time: "",
    });
    setShowForm(false);
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-300 dark:border-gray-700 mb-8 pb-3 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
          Staff Scheduling Dashboard
        </h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition"
        >
          <Plus className="w-4 h-4" /> Add Meeting
        </button>
      </div>

      {/* Add Schedule Form */}
      {showForm && (
        <form
          onSubmit={handleAddSchedule}
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm p-6 mb-8"
        >
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-blue-600" />
            Create New Meeting
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Patient ID</label>
              <input
                type="text"
                value={newSchedule.patientId}
                onChange={(e) => setNewSchedule({ ...newSchedule, patientId: e.target.value })}
                placeholder="e.g., P-105"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Patient Name</label>
              <input
                type="text"
                value={newSchedule.patient}
                onChange={(e) => setNewSchedule({ ...newSchedule, patient: e.target.value })}
                placeholder="e.g., Ali Raza"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Doctor ID</label>
              <input
                type="text"
                value={newSchedule.doctorId}
                onChange={(e) => setNewSchedule({ ...newSchedule, doctorId: e.target.value })}
                placeholder="e.g., D-01"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Doctor Name</label>
              <input
                type="text"
                value={newSchedule.doctor}
                onChange={(e) => setNewSchedule({ ...newSchedule, doctor: e.target.value })}
                placeholder="e.g., Dr. Usama"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Date</label>
              <input
                type="date"
                value={newSchedule.date}
                onChange={(e) => setNewSchedule({ ...newSchedule, date: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Time</label>
              <input
                type="time"
                value={newSchedule.time}
                onChange={(e) => setNewSchedule({ ...newSchedule, time: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition"
            >
              <Save className="w-4 h-4" /> Save Meeting
            </button>
          </div>
        </form>
      )}

      {/* Schedule List */}
      <div className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
        <table className="w-full border-collapse text-left">
          <thead className="bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
            <tr>
              <th className="py-3 px-4 text-sm font-semibold">#</th>
              <th className="py-3 px-4 text-sm font-semibold">Patient ID</th>
              <th className="py-3 px-4 text-sm font-semibold">Patient</th>
              <th className="py-3 px-4 text-sm font-semibold">Doctor ID</th>
              <th className="py-3 px-4 text-sm font-semibold">Doctor</th>
              <th className="py-3 px-4 text-sm font-semibold">Date</th>
              <th className="py-3 px-4 text-sm font-semibold">Time</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((s, i) => (
              <tr
                key={s.id}
                className={`border-b border-gray-200 dark:border-gray-700 ${
                  i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900"
                }`}
              >
                <td className="py-3 px-4 text-sm">{s.id}</td>
                <td className="py-3 px-4 text-sm">{s.patientId}</td>
                <td className="py-3 px-4 text-sm">{s.patient}</td>
                <td className="py-3 px-4 text-sm">{s.doctorId}</td>
                <td className="py-3 px-4 text-sm">{s.doctor}</td>
                <td className="py-3 px-4 text-sm">{s.date}</td>
                <td className="py-3 px-4 text-sm">{s.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffDashboard;
