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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative  dark:from-blue-800 dark:to-indigo-800 text-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            HealthSync Dashboard
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Streamline patient care with real-time health insights and advanced monitoring tools
          </p>
          <div className="mt-8">
            <Link
              to="/dashboard"
              className="inline-block bg-white text-blue-700 dark:bg-gray-800 dark:text-blue-300 px-6 py-3 rounded-md font-medium shadow-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Explore Dashboard
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/10"></div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Monitoring Profile",
              icon: <FaHeartbeat className="text-3xl" />,
              color: "text-blue-500",
              link: "/monitoring",
              desc: "Track mood stability and activity levels in real-time",
            },
            {
              title: "Event Insights",
              icon: <FaBrain className="text-3xl" />,
              color: "text-red-500",
              link: "/events",
              desc: "Review new medical data and detected signal breaches",
            },
            {
              title: "AI Scribe (DeepCura)",
              icon: <FaNotesMedical className="text-3xl" />,
              color: "text-indigo-500",
              link: "/ai-scribe",
              desc: "Automate clinical notes and transcripts for patient visits",
            },
            {
              title: "Biometric Analytics",
              icon: <FaChartLine className="text-3xl" />,
              color: "text-green-500",
              link: "/biometric",
              desc: "Monitor heart rate, sleep patterns, and vital metrics",
            },
            {
              title: "Treatment Progress",
              icon: <FaNotesMedical className="text-3xl" />,
              color: "text-purple-500",
              link: "/treatment",
              desc: "Evaluate treatment effectiveness and therapy progress",
            },
            {
              title: "Specialty Care",
              icon: <FaUserMd className="text-3xl" />,
              color: "text-teal-500",
              link: "/specialty",
              desc: "Access nutrition plans and lab results",
            },
            {
              title: "Admin Controls",
              icon: <FaCog className="text-3xl" />,
              color: "text-gray-500",
              link: "/admin",
              desc: "Manage provider settings and system configurations",
            },
          ].map((card, idx) => (
            <Link
              key={idx}
              to={card.link}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 group border border-gray-200 dark:border-gray-700"
              aria-label={`View ${card.title}`}
            >
              <div className="flex items-center gap-4">
                <span className={`${card.color} group-hover:scale-110 transition-transform duration-200`}>
                  {card.icon}
                </span>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {card.title}
                </h2>
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                {card.desc}
              </p>
              <div className="mt-4 text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                View Details
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Recent Activity
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Last updated: October 9, 2025, 7:16 PM PKT
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              to="/patients"
              className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              View Patients
            </Link>
            <Link
              to="/dashboard"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md shadow hover:bg-indigo-700 transition-colors duration-200 font-medium"
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