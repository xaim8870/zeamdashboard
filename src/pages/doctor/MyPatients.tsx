import React from "react";

export default function MyPatients() {
  // Dummy patients data (later you can fetch from API/backend)
  const patients = [
    { id: 1, name: "Ali Raza", age: 34, condition: "Epilepsy", lastVisit: "2025-08-20" },
    { id: 2, name: "Sara Khan", age: 29, condition: "Migraine", lastVisit: "2025-08-15" },
    { id: 3, name: "Hamza Ahmed", age: 41, condition: "Parkinson’s", lastVisit: "2025-08-10" },
  ];

  return (
    <div className="pt-20 px-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Doctor's Patients
      </h1>

      <div className="bg-white shadow-md rounded-2xl overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Age</th>
              <th className="py-3 px-4">Condition</th>
              <th className="py-3 px-4">Last Visit</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr
                key={patient.id}
                className={`border-b hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="py-3 px-4">{patient.id}</td>
                <td className="py-3 px-4 font-medium text-gray-900">
                  {patient.name}
                </td>
                <td className="py-3 px-4">{patient.age}</td>
                <td className="py-3 px-4">{patient.condition}</td>
                <td className="py-3 px-4">{patient.lastVisit}</td>
                <td className="py-3 px-4">
                  <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    View
                  </button>
                  <button className="ml-2 px-3 py-1 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
