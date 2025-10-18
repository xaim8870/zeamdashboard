import { Eye, Edit3, Activity, User } from "lucide-react";
import React from "react";

export default function MyPatients() {
  const patients = [
    { id: 1, name: "Ali Raza", age: 34, condition: "Epilepsy", lastVisit: "2025-08-20" },
    { id: 2, name: "Sara Khan", age: 29, condition: "Migraine", lastVisit: "2025-08-15" },
    { id: 3, name: "Hamza Ahmed", age: 41, condition: "Parkinson’s", lastVisit: "2025-08-10" },
  ];

  return (
    <div className="p-8 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-300 dark:border-gray-700 mb-8 pb-3 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">My Patients</h1>
        <button className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-sm border border-emerald-900">
          + Add New Patient
        </button>
      </div>

      {/* Table Container */}
      <div className="border border-gray-300 dark:border-gray-700 shadow-sm overflow-x-auto bg-white dark:bg-gray-800">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
            <tr>
              <th className="py-3 px-4 font-semibold text-sm text-gray-700 dark:text-gray-300">#</th>
              <th className="py-3 px-4 font-semibold text-sm text-gray-700 dark:text-gray-300">Name</th>
              <th className="py-3 px-4 font-semibold text-sm text-gray-700 dark:text-gray-300">Age</th>
              <th className="py-3 px-4 font-semibold text-sm text-gray-700 dark:text-gray-300">Condition</th>
              <th className="py-3 px-4 font-semibold text-sm text-gray-700 dark:text-gray-300">Last Visit</th>
              <th className="py-3 px-4 font-semibold text-sm text-gray-700 dark:text-gray-300 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((patient, index) => (
              <tr
                key={patient.id}
                className={`border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition ${
                  index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900"
                }`}
              >
                <td className="py-3 px-4">{patient.id}</td>
                <td className="py-3 px-4 flex items-center gap-2">
                  <User className="w-4 h-4 text-indigo-600" />
                  <span className="font-medium">{patient.name}</span>
                </td>
                <td className="py-3 px-4">{patient.age}</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center gap-1 text-sm">
                    <Activity className="w-4 h-4 text-green-600" /> {patient.condition}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                  {patient.lastVisit}
                </td>
                <td className="py-3 px-4 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      className="flex items-center gap-1 text-xs px-3 py-1 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
                    >
                      <Eye className="w-3 h-3" /> View
                    </button>
                    <button
                      className="flex items-center gap-1 text-xs px-3 py-1 border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white transition"
                    >
                      <Edit3 className="w-3 h-3" /> Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
