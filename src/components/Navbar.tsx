import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { ThemeContext } from '../App';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 text-green-900 dark:text-white px-6 py-4 fixed w-full top-0 shadow-lg z-50 transition-all duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo with Triangle */}
        <NavLink to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
          <svg width="36" height="36" viewBox="0 0 100 100" className="flex-shrink-0">
            <polygon
              points="50,5 95,90 5,90"
              fill="none"
              strokeWidth="6"
              strokeLinejoin="round"
              stroke="url(#triangleGradient)"
            />
            <defs>
              <linearGradient id="triangleGradient" gradientTransform="rotate(120)">
                <stop offset="0%" stopColor="green" />
                <stop offset="50%" stopColor="blue" />
                <stop offset="100%" stopColor="purple" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-3xl font-extrabold tracking-tight">Zeam Health</span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { to: "/", label: "HOME" },
            { to: "/patients", label: "PATIENTS" },
            { to: "/zeambot", label: "ZEAMBOT" },
            { to: "/admin", label: "ADMIN" },
            { to: "/contact", label: "CONTACT" },
            { to: "/login", label: "LOGIN" },
            { to: "/signup", label: "SIGN UP" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative text-md font-medium transition-colors group
                ${isActive ? "text-red-900 dark:text-red-300" : "hover:text-red-900 dark:hover:text-red-300"}`
              }
            >
              {label}
              {["HOME", "PATIENTS", "ZEAMBOT", "ADMIN", "CONTACT"].includes(label) && (
                <ChevronDownIcon className="h-5 w-5 ml-1 inline-block text-gray-500 group-hover:text-red-400 transition-colors" />
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 dark:bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full hover:bg-green-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <MoonIcon className="h-6 w-6 text-gray-800 dark:text-white" />
            ) : (
              <SunIcon className="h-6 w-6 text-gray-800 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-green-100 dark:hover:bg-gray-700 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-800 dark:text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-800 dark:text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 bg-green-50 dark:bg-gray-900 p-6 rounded-xl shadow-xl animate-slide-down">
          {[
            { to: "/", label: "Home" },
            { to: "/patients", label: "Patients" },
            { to: "/zeambot", label: "ZeamBot" },
            { to: "/admin", label: "Admin" },
            { to: "/contact", label: "Contact" },
            { to: "/login", label: "Login" },
            { to: "/signup", label: "Sign Up" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${isActive ? "text-red-900 dark:text-red-300" : "hover:text-red-900 dark:hover:text-red-300"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          {/* Theme Toggle in Mobile */}
          <button
            onClick={() => {
              toggleTheme();
              setIsMenuOpen(false);
            }}
            className="p-2 rounded-full hover:bg-green-100 dark:hover:bg-gray-700 transition-colors flex items-center"
          >
            {theme === "light" ? (
              <>
                <MoonIcon className="h-6 w-6 mr-2 text-gray-800 dark:text-white" /> Dark Mode
              </>
            ) : (
              <>
                <SunIcon className="h-6 w-6 mr-2 text-gray-800 dark:text-white" /> Light Mode
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
