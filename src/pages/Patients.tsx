import { useState, useContext } from 'react';
import { ThemeContext } from '../App';

// Mock data (replace with API fetch in production)
const mockPatients = [
  { id: 1, name: 'John Doe', gender: 'M', age: 34, doctor: 'Dr. Jane Smith', depression: 45, stress: 60, anxiety: 50, improvement: '+15%', startDate: '2025-07-01', eegCount: 3 },
  { id: 2, name: 'Alice Johnson', gender: 'F', age: 28, doctor: 'Dr. Bob Brown', depression: 30, stress: 40, anxiety: 35, improvement: 'Improved', startDate: '2025-06-15', eegCount: 2 },
  { id: 3, name: 'Michael Lee', gender: 'M', age: 45, doctor: 'Dr. Jane Smith', depression: 70, stress: 85, anxiety: 65, improvement: '-5%', startDate: '2025-08-01', eegCount: 1 },
  { id: 4, name: 'Sarah Davis', gender: 'F', age: 31, doctor: 'Dr. Bob Brown', depression: 25, stress: 30, anxiety: 20, improvement: '+20%', startDate: '2025-07-10', eegCount: 4 },
];

const Patients = () => {
  const { theme } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPatients, setFilteredPatients] = useState(mockPatients);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredPatients(
      mockPatients.filter((patient) =>
        patient.name.toLowerCase().includes(term) || patient.id.toString().includes(term)
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Patients Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Monitor and manage patient data effectively</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name or ID..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Patients Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Gender</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Age</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Doctor</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Depression</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Stress</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Anxiety</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Improvement</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Start Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">EEG Count</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient) => (
                <tr
                  key={patient.id}
                  className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                  onClick={() => setSelectedPatient(patient)}
                >
                  <td className="px-6 py-4">{patient.name}</td>
                  <td className="px-6 py-4">{patient.gender}</td>
                  <td className="px-6 py-4">{patient.age}</td>
                  <td className="px-6 py-4">{patient.doctor}</td>
                  <td className={`px-6 py-4 ${patient.depression > 50 ? 'text-red-500' : 'text-green-500'}`}>
                    {patient.depression}%
                  </td>
                  <td className={`px-6 py-4 ${patient.stress > 50 ? 'text-red-500' : 'text-green-500'}`}>
                    {patient.stress}%
                  </td>
                  <td className={`px-6 py-4 ${patient.anxiety > 50 ? 'text-red-500' : 'text-green-500'}`}>
                    {patient.anxiety}%
                  </td>
                  <td className={`px-6 py-4 ${patient.improvement.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
                    {patient.improvement}
                  </td>
                  <td className="px-6 py-4">{patient.startDate}</td>
                  <td className="px-6 py-4">{patient.eegCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detailed View */}
        {selectedPatient && (
          <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Patient Profile: {selectedPatient.name}</h2>
            <p>Gender: {selectedPatient.gender} | Age: {selectedPatient.age}</p>
            <p>Doctor: {selectedPatient.doctor}</p>
            <p>Depression: {selectedPatient.depression}% | Stress: {selectedPatient.stress}% | Anxiety: {selectedPatient.anxiety}%</p>
            <p>Improvement: {selectedPatient.improvement} | Start Date: {selectedPatient.startDate} | EEGs: {selectedPatient.eegCount}</p>
            <button onClick={() => setSelectedPatient(null)} className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Patients;