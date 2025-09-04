import React, { useState } from "react";

// Dummy data
const appointmentsToday = [
  { time: "09:00 AM", patient: "John Doe", type: "Follow-up" },
  { time: "11:30 AM", patient: "Jane Smith", type: "EEG Review" },
  { time: "02:00 PM", patient: "Robert Brown", type: "Consultation" },
];

const calendarAppointments = [2, 5, 8, 15, 22]; // Days in the month with appointments

const patients = [
  { id: 1, name: "John Doe", age: 34, condition: "Anxiety" },
  { id: 2, name: "Jane Smith", age: 29, condition: "Depression" },
  { id: 3, name: "Robert Brown", age: 42, condition: "Stress Disorder" },
];

const patientProfiles: Record<number, any> = {
  1: {
    stress: 70,
    anxiety: 55,
    depression: 40,
    eegs: [
      { date: "2025-08-20", time: "10:00 AM" },
      { date: "2025-08-25", time: "02:00 PM" },
    ],
  },
  2: {
    stress: 50,
    anxiety: 75,
    depression: 65,
    eegs: [{ date: "2025-08-15", time: "01:30 PM" }],
  },
  3: {
    stress: 80,
    anxiety: 60,
    depression: 45,
    eegs: [
      { date: "2025-08-10", time: "09:00 AM" },
      { date: "2025-08-28", time: "03:15 PM" },
    ],
  },
};

const DoctorDashboard: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Doctor Dashboard
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Appointments Today */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Today&apos;s Appointments
          </h2>
          <ul className="space-y-3">
            {appointmentsToday.map((appt, idx) => (
              <li
                key={idx}
                className="flex justify-between border-b pb-2 last:border-b-0"
              >
                <span className="font-medium">{appt.time}</span>
                <span>{appt.patient}</span>
                <span className="text-gray-500 text-sm">{appt.type}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Calendar */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-green-600 mb-4">
            Appointment Calendar
          </h2>
          <div className="grid grid-cols-7 gap-2 text-center">
            {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
              <div
                key={day}
                className={`p-2 rounded-lg ${
                  calendarAppointments.includes(day)
                    ? "bg-green-100 border border-green-500 font-bold"
                    : "bg-gray-100"
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>

        {/* Assigned Patients */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">
            Assigned Patients
          </h2>
          <ul className="space-y-3">
            {patients.map((patient) => (
              <li
                key={patient.id}
                className="flex justify-between items-center border-b pb-2 last:border-b-0"
              >
                <div>
                  <p className="font-medium">{patient.name}</p>
                  <p className="text-sm text-gray-500">
                    {patient.age} yrs — {patient.condition}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedPatient(patient.id)}
                  className="px-3 py-1 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                >
                  View
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Patient Profile */}
      {selectedPatient && (
        <div className="mt-10 bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Patient Profile — {patients.find((p) => p.id === selectedPatient)?.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-100 p-4 rounded-xl text-center">
              <p className="text-lg font-semibold">Stress</p>
              <p className="text-2xl font-bold">
                {patientProfiles[selectedPatient].stress}%
              </p>
            </div>
            <div className="bg-green-100 p-4 rounded-xl text-center">
              <p className="text-lg font-semibold">Anxiety</p>
              <p className="text-2xl font-bold">
                {patientProfiles[selectedPatient].anxiety}%
              </p>
            </div>
            <div className="bg-red-100 p-4 rounded-xl text-center">
              <p className="text-lg font-semibold">Depression</p>
              <p className="text-2xl font-bold">
                {patientProfiles[selectedPatient].depression}%
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3">EEG History</h3>
          <ul className="list-disc list-inside space-y-2">
            {patientProfiles[selectedPatient].eegs.map(
              (eeg: { date: string; time: string }, idx: number) => (
                <li key={idx} className="text-gray-700">
                  {eeg.date} — {eeg.time}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;
