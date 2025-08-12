import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Dashboard (Main Landing Page)</h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mt-2">Welcome to your health monitoring hub</p>
        </div>

        {/* Overall Monitoring Profile */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('monitoring')}
            className="w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-xl font-semibold">Overall Monitoring Profile</h2>
            <span>{activeSection === 'monitoring' ? '−' : '+'}</span>
          </button>
          {activeSection === 'monitoring' && (
            <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300">Mood: Stable | Activity: Moderate</p>
              <div className="mt-2">
                <Link to="/monitoring" className="text-blue-600 dark:text-blue-400 hover:underline">View Detailed Monitoring Data</Link>
              </div>
            </div>
          )}
        </div>

        {/* Identified Events */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('events')}
            className="w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-xl font-semibold">Identified Events</h2>
            <span>{activeSection === 'events' ? '−' : '+'}</span>
          </button>
          {activeSection === 'events' && (
            <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                <li>New Medical Data Available</li>
                <li>Signal Breach Detected</li>
              </ul>
            </div>
          )}
        </div>

        {/* Biometric Data Details */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('biometric')}
            className="w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-xl font-semibold">Biometric Data Details</h2>
            <span>{activeSection === 'biometric' ? '−' : '+'}</span>
          </button>
          {activeSection === 'biometric' && (
            <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300">Heart Rate: 72 bpm | Sleep: 7h</p>
              <div className="mt-2">
                <Link to="/biometric" className="text-blue-600 dark:text-blue-400 hover:underline">View Detailed Biometric Summary</Link>
              </div>
            </div>
          )}
        </div>

        {/* Treatment Response Data */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('treatment')}
            className="w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-xl font-semibold">Treatment Response Data</h2>
            <span>{activeSection === 'treatment' ? '−' : '+'}</span>
          </button>
          {activeSection === 'treatment' && (
            <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300">Effectiveness: 85% | CBT in Progress</p>
              <div className="mt-2">
                <Link to="/treatment" className="text-blue-600 dark:text-blue-400 hover:underline">View Treatment Summary</Link>
              </div>
            </div>
          )}
        </div>

        {/* Specialty Treatment Data */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('specialty')}
            className="w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-xl font-semibold">Specialty Treatment Data</h2>
            <span>{activeSection === 'specialty' ? '−' : '+'}</span>
          </button>
          {activeSection === 'specialty' && (
            <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300">Nutrition: Balanced | Labs: Normal</p>
              <div className="mt-2">
                <Link to="/specialty" className="text-blue-600 dark:text-blue-400 hover:underline">View Specialty Monitoring</Link>
              </div>
            </div>
          )}
        </div>

        {/* Admin Options (Placeholder for Providers) */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('admin')}
            className="w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-xl font-semibold">Admin Options (Providers)</h2>
            <span>{activeSection === 'admin' ? '−' : '+'}</span>
          </button>
          {activeSection === 'admin' && (
            <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-gray-600 dark:text-gray-300">Manage provider settings and corrections.</p>
              <div className="mt-2">
                <Link to="/admin" className="text-blue-600 dark:text-blue-400 hover:underline">Go to Admin Dashboard</Link>
              </div>
            </div>
          )}
        </div>

        
        
      </div>
    </div>
  );
};

export default Home;