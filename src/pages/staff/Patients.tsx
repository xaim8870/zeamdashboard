import React, { useState } from "react";
import { User, Search } from "lucide-react";

const StaffPatients: React.FC = () => {
  const patients = [
    { id: "P-101", name: "Ali Raza", age: 34, condition: "Epilepsy" },
    { id: "P-102", name: "Sara Khan", age: 29, condition: "Migraine" },
    { id: "P-103", name: "Hamza Ahmed", age: 41, condition: "Parkinson’s" },
    { id: "P-104", name: "Ayesha Malik", age: 26, condition: "Sleep Disorder" },
    { id: "P-105", name: "Bilal Hussain", age: 38, condition: "Anxiety" },
  ];

  const [search, setSearch] = useState("");

  // Filter by either patient ID or name
  const filteredPatients = patients.filter(
    (p) =>
      p.id.toLowerCase().includes(search.toLowerCase()) ||
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100">
      {/* Header */}
      <div className="border-b border-gray-300 dark:border-gray-700 mb-8 pb-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
            Patients List
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            All registered patients with unique IDs
          </p>
        </div>

        {/* 🔍 Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-500 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search by Patient ID or Name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:border-blue-600 dark:focus:border-blue-400"
          />
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
        <table className="w-full border-collapse text-left">
          <thead className="bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
            <tr>
              <th className="py-3 px-4 text-sm font-semibold">Patient ID</th>
              <th className="py-3 px-4 text-sm font-semibold">Name</th>
              <th className="py-3 px-4 text-sm font-semibold">Age</th>
              <th className="py-3 px-4 text-sm font-semibold">Condition</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((p, i) => (
                <tr
                  key={p.id}
                  className={`border-b border-gray-200 dark:border-gray-700 ${
                    i % 2 === 0
                      ? "bg-white dark:bg-gray-800"
                      : "bg-gray-50 dark:bg-gray-900"
                  }`}
                >
                  <td className="py-3 px-4 text-sm font-medium">{p.id}</td>
                  <td className="py-3 px-4 text-sm flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-600" /> {p.name}
                  </td>
                  <td className="py-3 px-4 text-sm">{p.age}</td>
                  <td className="py-3 px-4 text-sm">{p.condition}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="py-6 text-center text-gray-500 dark:text-gray-400 text-sm"
                >
                  No patients found matching “{search}”
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffPatients;
