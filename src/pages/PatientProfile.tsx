import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../App';

// Mock data (replace with API fetch in production)
const mockPatients = [
  { id: 1, name: 'John Doe', gender: 'M', age: 34, doctor: 'Dr. Jane Smith', depression: 45, stress: 60, anxiety: 50, improvement: '+15%', startDate: '2025-07-01', eegCount: 3 },
  { id: 2, name: 'Alice Johnson', gender: 'F', age: 28, doctor: 'Dr. Bob Brown', depression: 30, stress: 40, anxiety: 35, improvement: 'Improved', startDate: '2025-06-15', eegCount: 2 },
  { id: 3, name: 'Michael Lee', gender: 'M', age: 45, doctor: 'Dr. Jane Smith', depression: 70, stress: 85, anxiety: 65, improvement: '-5%', startDate: '2025-08-01', eegCount: 1 },
  { id: 4, name: 'Sarah Davis', gender: 'F', age: 31, doctor: 'Dr. Bob Brown', depression: 25, stress: 30, anxiety: 20, improvement: '+20%', startDate: '2025-07-10', eegCount: 4 },
];

const PatientProfile = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const patient = mockPatients.find((p) => p.id === parseInt(id || ''));

  // Form state for doctor inputs
  const [formData, setFormData] = useState({
    stress: '',
    sleep: '',
    anxiety: '',
    depression: '',
    eegs: '',
    menstrualCycle: '',
    menstrualSymptoms: '',
    hormonalChanges: '',
    pms: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Feed formData to AI model for insights (e.g., API call)
    console.log('Submitted Data:', formData);
    // Optionally, show a success message or redirect
  };

  if (!patient) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-semibold">Patient Not Found</h2>
          <button
            onClick={() => navigate('/patients')}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Back to Patients
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center mb-8">
          <img
            src={`https://i.pravatar.cc/150?u=${patient.id}`} // Placeholder image from internet (pravatar.cc)
            alt={`${patient.name}'s profile`}
            className="w-24 h-24 rounded-full mr-6 border-4 border-blue-500"
          />
          <div>
            <h1 className="text-4xl font-bold">{patient.name}</h1>
            <p className="text-gray-600 dark:text-gray-300">Patient ID: {patient.id}</p>
          </div>
        </div>

        {/* Patient Info Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Patient Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
              <strong>Gender:</strong> {patient.gender}
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
              <strong>Age:</strong> {patient.age}
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
              <strong>Doctor:</strong> {patient.doctor}
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
              <strong>Start Date:</strong> {patient.startDate}
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
              <strong>EEG Count:</strong> {patient.eegCount}
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-md text-center">
              <strong>Depression</strong>
              <p className={`text-2xl font-bold ${patient.depression > 50 ? 'text-red-500' : 'text-green-500'}`}>
                {patient.depression}%
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-md text-center">
              <strong>Stress</strong>
              <p className={`text-2xl font-bold ${patient.stress > 50 ? 'text-red-500' : 'text-green-500'}`}>
                {patient.stress}%
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-md text-center">
              <strong>Anxiety</strong>
              <p className={`text-2xl font-bold ${patient.anxiety > 50 ? 'text-red-500' : 'text-green-500'}`}>
                {patient.anxiety}%
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-md text-center">
              <strong>Improvement</strong>
              <p className={`text-2xl font-bold ${patient.improvement.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
                {patient.improvement}
              </p>
            </div>
          </div>
        </div>

        {/* Devices Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Associated Devices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <img
                src="https://m.media-amazon.com/images/I/61+8rW7A3JL._AC_SL1500_.jpg" // Muse Headband image from Amazon (internet source)
                alt="Muse Headband"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
              <p className="mt-2 font-semibold">Muse EEG Headband</p>
            </div>
            <div className="text-center">
              <img
                src="https://neurosity.co/cdn/shop/files/Crown_Front_View.png?v=1692891234" // Neurosity Crown image from official site
                alt="Neurosity Crown"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
              <p className="mt-2 font-semibold">Neurosity Crown EEG Device</p>
            </div>
          </div>
        </div>

        {/* Doctor Input Form Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Doctor Input Form</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* General Fields */}
            <div>
              <label className="block text-sm font-medium mb-1">Stress Notes</label>
              <textarea
                name="stress"
                value={formData.stress}
                onChange={handleInputChange}
                placeholder="Enter stress-related notes..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Sleep Notes</label>
              <textarea
                name="sleep"
                value={formData.sleep}
                onChange={handleInputChange}
                placeholder="Enter sleep-related notes..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Anxiety Notes</label>
              <textarea
                name="anxiety"
                value={formData.anxiety}
                onChange={handleInputChange}
                placeholder="Enter anxiety-related notes..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Depression Notes</label>
              <textarea
                name="depression"
                value={formData.depression}
                onChange={handleInputChange}
                placeholder="Enter depression-related notes..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">EEG Notes</label>
              <textarea
                name="eegs"
                value={formData.eegs}
                onChange={handleInputChange}
                placeholder="Enter EEG-related notes..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>

            {/* Women-Specific Fields */}
            {patient.gender === 'F' && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-1">Menstrual Cycle Notes</label>
                  <textarea
                    name="menstrualCycle"
                    value={formData.menstrualCycle}
                    onChange={handleInputChange}
                    placeholder="Enter notes on menstrual cycle phase, regularity, etc..."
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Menstrual Symptoms</label>
                  <textarea
                    name="menstrualSymptoms"
                    value={formData.menstrualSymptoms}
                    onChange={handleInputChange}
                    placeholder="Enter notes on symptoms like cramps, mood changes, etc..."
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Hormonal Changes</label>
                  <textarea
                    name="hormonalChanges"
                    value={formData.hormonalChanges}
                    onChange={handleInputChange}
                    placeholder="Enter notes on hormonal fluctuations, PCOS, etc..."
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">PMS/PMDD Notes</label>
                  <textarea
                    name="pms"
                    value={formData.pms}
                    onChange={handleInputChange}
                    placeholder="Enter notes on premenstrual syndrome or dysphoric disorder..."
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                  />
                </div>
              </>
            )}

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition duration-200 font-medium"
              >
                Submit Data for AI Insights
              </button>
            </div>
          </form>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate('/patients')}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-200"
        >
          Back to Patients
        </button>
      </div>
    </div>
  );
};

export default PatientProfile;