import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
import { FaHeartbeat, FaBrain, FaChartLine, FaNotesMedical, FaUserMd, FaCog } from 'react-icons/fa';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 text-gray-900 dark:text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-700 dark:to-teal-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Health Monitoring Dashboard</h1>
          <p className="text-lg mt-3 max-w-3xl mx-auto">
            Your centralized hub for real-time health insights and patient management
          </p>
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173fd1bece7"
            alt="Health Monitoring Dashboard"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mt-6"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Overall Monitoring Profile */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaHeartbeat className="text-blue-600 dark:text-blue-400 text-3xl mr-3" aria-hidden="true" />
              <h2 className="text-xl font-semibold">Overall Monitoring Profile</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Mood: Stable | Activity: Moderate</p>
            <Link
              to="/monitoring"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
              aria-label="View Overall Monitoring Data"
            >
              View Monitoring Data
            </Link>
          </div>

          {/* Identified Events */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaBrain className="text-red-600 dark:text-red-400 text-3xl mr-3" aria-hidden="true" />
              <h2 className="text-xl font-semibold">Identified Events</h2>
            </div>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-4">
              <li>New Medical Data Available</li>
              <li>Signal Breach Detected</li>
            </ul>
            <Link
              to="/events"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
              aria-label="View Identified Events"
            >
              View Events
            </Link>
          </div>

          {/* Biometric Data Details */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaChartLine className="text-green-600 dark:text-green-400 text-3xl mr-3" aria-hidden="true" />
              <h2 className="text-xl font-semibold">Biometric Data Details</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Heart Rate: 72 bpm | Sleep: 7h</p>
            <Link
              to="/biometric"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
              aria-label="View Biometric Data Summary"
            >
              View Biometric Summary
            </Link>
          </div>

          {/* Treatment Response Data */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaNotesMedical className="text-purple-600 dark:text-purple-400 text-3xl mr-3" aria-hidden="true" />
              <h2 className="text-xl font-semibold">Treatment Response Data</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Effectiveness: 85% | CBT in Progress</p>
            <Link
              to="/treatment"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
              aria-label="View Treatment Response Summary"
            >
              View Treatment Summary
            </Link>
          </div>

          {/* Specialty Treatment Data */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaUserMd className="text-teal-600 dark:text-teal-400 text-3xl mr-3" aria-hidden="true" />
              <h2 className="text-xl font-semibold">Specialty Treatment Data</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Nutrition: Balanced | Labs: Normal</p>
            <Link
              to="/specialty"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
              aria-label="View Specialty Treatment Monitoring"
            >
              View Specialty Monitoring
            </Link>
          </div>

          {/* Admin Options */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaCog className="text-gray-600 dark:text-gray-400 text-3xl mr-3" aria-hidden="true" />
              <h2 className="text-xl font-semibold">Admin Options (Providers)</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Manage provider settings and corrections</p>
            <Link
              to="/admin"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
              aria-label="Go to Admin Dashboard"
            >
              Go to Admin Dashboard
            </Link>
          </div>
        </div>

        {/* Recent Activity Footer */}
        <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Last updated: August 14, 2025, 6:50 PM PKT
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <Link
              to="/patients"
              className="bg-teal-600 text-white px-5 py-2 rounded-md hover:bg-teal-700 transition-colors duration-200 font-medium"
              aria-label="View Patients Dashboard"
            >
              View Patients
            </Link>
            <Link
              to="/dashboard"
              className="bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200 font-medium"
              aria-label="View Main Dashboard"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;