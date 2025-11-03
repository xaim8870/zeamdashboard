import { Eye, Edit3, Activity, User } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Patient {
  id: number;
  name: string;
  age: number;
  condition: string;
  lastVisit: string;
}

export default function MyPatients() {
  const navigate = useNavigate();

  const [patients, setPatients] = useState<Patient[]>([
    { id: 1, name: "Ali Raza", age: 34, condition: "Epilepsy", lastVisit: "2025-08-20" },
    { id: 2, name: "Sara Khan", age: 29, condition: "Migraine", lastVisit: "2025-08-15" },
    { id: 3, name: "Hamza Ahmed", age: 41, condition: "Parkinson’s", lastVisit: "2025-08-10" },
  ]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const handleEdit = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (updatedPatient: Patient) => {
    setPatients((prev) =>
      prev.map((p) => (p.id === updatedPatient.id ? updatedPatient : p))
    );
    setIsEditModalOpen(false);
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-300 dark:border-gray-700 mb-8 pb-3 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">My Patients</h1>
        <button className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-sm border border-emerald-900">
          + Add New Patient
        </button>
      </div>

      {/* Table */}
      <div className="border border-gray-300 dark:border-gray-700 shadow-sm overflow-x-auto bg-white dark:bg-gray-800">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
            <tr>
              <th className="py-3 px-4 text-sm font-semibold">#</th>
              <th className="py-3 px-4 text-sm font-semibold">Name</th>
              <th className="py-3 px-4 text-sm font-semibold">Age</th>
              <th className="py-3 px-4 text-sm font-semibold">Condition</th>
              <th className="py-3 px-4 text-sm font-semibold">Last Visit</th>
              <th className="py-3 px-4 text-sm font-semibold text-center">Actions</th>
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
                  {patient.name}
                </td>
                <td className="py-3 px-4">{patient.age}</td>
                <td className="py-3 px-4 flex items-center gap-1">
                  <Activity className="w-4 h-4 text-green-600" /> {patient.condition}
                </td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                  {patient.lastVisit}
                </td>
                <td className="py-3 px-4 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => navigate(`/doctor/patient/${patient.id}`)} // 👈 Direct navigation
                      className="flex items-center gap-1 text-xs px-3 py-1 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
                    >
                      <Eye className="w-3 h-3" /> View
                    </button>
                    <button
                      onClick={() => handleEdit(patient)}
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

      {/* ✅ Only Edit Modal Remains */}
      {isEditModalOpen && selectedPatient && (
        <EditModal
          patient={selectedPatient}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
}

/* ===============================
   Edit Modal Component (Unchanged)
================================= */
const EditModal = ({
  patient,
  onClose,
  onSave,
}: {
  patient: Patient;
  onClose: () => void;
  onSave: (updated: Patient) => void;
}) => {
  const [formData, setFormData] = useState(patient);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Patient</h2>
          <button onClick={onClose}>✖</button>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700"
            placeholder="Patient Name"
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700"
            placeholder="Age"
          />
          <input
            type="text"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700"
            placeholder="Condition"
          />
          <input
            type="date"
            name="lastVisit"
            value={formData.lastVisit}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700"
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-400 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={() => onSave(formData)}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
