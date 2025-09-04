
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaUserMd,
  FaNotesMedical,
  FaCog,
  FaUsers,
} from "react-icons/fa";

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b dark:border-gray-700">
          <h1
            className={`text-xl font-bold text-blue-600 dark:text-white transition-opacity ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            HealthDash
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 dark:text-gray-300"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 mt-4">
          {[
            { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
            { name: "Patients", icon: <FaUsers />, path: "/patients" },
            { name: "AI Scribe", icon: <FaNotesMedical />, path: "/ai-scribe" },
            { name: "Doctors", icon: <FaUserMd />, path: "/doctors" },
            { name: "Settings", icon: <FaCog />, path: "/settings" },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              <span
                className={`ml-3 transition-opacity ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Outlet /> {/* React Router will load the page content here */}
      </div>
    </div>
  );
};

export default Layout;
