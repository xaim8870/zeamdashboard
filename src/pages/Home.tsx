import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import {
  FaHeartbeat,
  FaBrain,
  FaChartLine,
  FaNotesMedical,
  FaUserMd,
  FaCog,
} from "react-icons/fa";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 text-gray-900 dark:text-white pt-28 pb-16 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Banner */}
        <div className="relative bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 dark:from-blue-700 dark:via-teal-600 dark:to-green-700 text-white p-10 rounded-3xl shadow-2xl mb-14 text-center overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <h1 className="relative text-4xl md:text-5xl font-extrabold tracking-tight z-10 drop-shadow-lg">
            Health Monitoring Dashboard
          </h1>
          <p className="relative text-lg mt-3 max-w-2xl mx-auto z-10">
            Your centralized hub for real-time health insights and patient
            management
          </p>
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173fd1bece7"
            alt="Health Monitoring Dashboard"
            className="relative w-full max-w-3xl mx-auto rounded-2xl shadow-xl mt-6 z-10"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Overall Monitoring Profile",
              icon: <FaHeartbeat />,
              color: "text-blue-600",
              link: "/monitoring",
              desc: "Mood: Stable | Activity: Moderate",
            },
            {
              title: "Identified Events",
              icon: <FaBrain />,
              color: "text-red-600",
              link: "/events",
              desc: "New Medical Data Available | Signal Breach Detected",
            },
            {
              title: "AI Scribe (DeepCura)",
              icon: <FaNotesMedical />,
              color: "text-indigo-600",
              link: "/ai-scribe",
              desc: "Generate clinical notes & transcripts for patient visits",
            },
            {
              title: "Biometric Data Details",
              icon: <FaChartLine />,
              color: "text-green-600",
              link: "/biometric",
              desc: "Heart Rate: 72 bpm | Sleep: 7h",
            },
            {
              title: "Treatment Response Data",
              icon: <FaNotesMedical />,
              color: "text-purple-600",
              link: "/treatment",
              desc: "Effectiveness: 85% | CBT in Progress",
            },
            {
              title: "Specialty Treatment Data",
              icon: <FaUserMd />,
              color: "text-teal-600",
              link: "/specialty",
              desc: "Nutrition: Balanced | Labs: Normal",
            },
            {
              title: "Admin Options (Providers)",
              icon: <FaCog />,
              color: "text-gray-600",
              link: "/admin",
              desc: "Manage provider settings and corrections",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex items-center mb-4">
                <span
                  className={`${card.color} text-4xl mr-4 group-hover:scale-110 transition-transform`}
                >
                  {card.icon}
                </span>
                <h2 className="text-xl font-bold">{card.title}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {card.desc}
              </p>
              <Link
                to={card.link}
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2 rounded-lg shadow hover:from-blue-700 hover:to-blue-600 transition-colors duration-200 font-medium"
                aria-label={`View ${card.title}`}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        {/* Recent Activity Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">
            Recent Activity
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Last updated: September 1, 2025, 7:00 PM PKT
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/patients"
              className="bg-teal-600 text-white px-5 py-2 rounded-lg shadow hover:bg-teal-700 transition-colors duration-200 font-medium"
            >
              View Patients
            </Link>
            <Link
              to="/dashboard"
              className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700 transition-colors duration-200 font-medium"
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
