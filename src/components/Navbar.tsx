import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { ThemeContext } from '../App';
import Logo from "../assets/images/nav-logo.png";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white h-20 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 text-green-900 dark:text-white px-6 py-4 fixed w-full top-0 shadow-xl z-50 transition-all duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <NavLink to="/" className="text-4xl  tracking-tight hover:opacity-90 transition-opacity font-extrabold">
          <img src={Logo} alt="Zeam Health Logo" className="h-10 mr-2 inline-block" />
          Zeam Health
        </NavLink>
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) => `text-md font-medium hover:text-red-900 dark:hover:text-red-300 transition-colors ${isActive ? 'text-red-900 dark:text-red-300 border-b-2 border-blue-200 dark:border-blue-400' : ''}`}
          >
            HOME <ChevronDownIcon className="h-5 w-5 ml-1 inline-block" />
          </NavLink>
          <NavLink
            to="/patients"
            className={({ isActive }) => `text-md font-medium hover:text-red-900 dark:hover:text-red-300 transition-colors ${isActive ? 'text-red-900 dark:text-red-300 border-b-2 border-blue-200 dark:border-blue-400' : ''}`}
          >
            PATIENTS <ChevronDownIcon className="h-5 w-5 ml-1 inline-block" />
          </NavLink>
          <NavLink
            to="/zeambot"
            className={({ isActive }) => `text-md font-medium hover:text-red-900 dark:hover:text-red-300 transition-colors ${isActive ? 'text-red-900 dark:text-red-300 border-b-2 border-blue-200 dark:border-blue-400' : ''}`}
          >
            ZEAMBOT <ChevronDownIcon className="h-5 w-5 ml-1 inline-block" />
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) => `text-md font-medium hover:text-red-900 dark:hover:text-red-300 transition-colors ${isActive ? 'text-red-900 dark:text-red-300 border-b-2 border-blue-200 dark:border-blue-400' : ''}`}
          >
            ADMIN <ChevronDownIcon className="h-5 w-5 ml-1 inline-block" />
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `text-md font-medium hover:text-red-900 dark:hover:text-red-300 transition-colors ${isActive ? 'text-red-900 dark:text-red-300 border-b-2 border-blue-200 dark:border-blue-400' : ''}`}
          >
            CONTACT <ChevronDownIcon className="h-5 w-5 ml-1 inline-block" />
          </NavLink>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-green-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <MoonIcon className="h-6 w-6 text-gray-800 dark:text-white" />
            ) : (
              <SunIcon className="h-6 w-6 text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
        <button
          className="md:hidden p-2 rounded-md hover:bg-green-100 dark:hover:bg-gray-700 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <XMarkIcon className="h-6 w-6 text-gray-800 dark:text-white" /> : <Bars3Icon className="h-6 w-6 text-gray-800 dark:text-white" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 bg-green-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg animate-slide-down">
          <NavLink
            to="/"
            className={({ isActive }) => `text-lg font-medium hover:text-red-900 dark:hover:text-red-300 transition-colors ${isActive ? 'text-red-900 dark:text-red-300' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home <ChevronDownIcon className="h-5 w-5 ml-1 inline-block" />
          </NavLink>
          <NavLink
            to="/patients"
            className={({ isActive }) => `text-lg font-medium hover:text-red-900 dark:hover:text-red-300 transition-colors ${isActive ? 'text-red-900 dark:text-red-300' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Patients <ChevronDownIcon className="h-5 w-5 ml-1 inline-block" />
          </NavLink>
          <NavLink
            to="/zeambot"
            className={({ isActive }) => `text-lg font-medium hover:text-red-900 dark:hover:text-red-300 transition-colors ${isActive ? 'text-red-900 dark:text-red-300' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            ZeamBot <ChevronDownIcon className="h-5 w-5 ml-1 inline-block" />
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) => `text-lg font-medium hover:text-red-900 dark:hover:text-red-300 transition-colors ${isActive ? 'text-red-900 dark:text-red-300' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Admin <ChevronDownIcon className="h-5 w-5 ml-1 inline-block" />
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `text-lg font-medium hover:text-red-900 dark:hover:text-red-300 transition-colors ${isActive ? 'text-red-900 dark:text-red-300' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact <ChevronDownIcon className="h-5 w-5 ml-1 inline-block" />
          </NavLink>
          <button
            onClick={() => {
              toggleTheme();
              setIsMenuOpen(false);
            }}
            className="p-2 rounded-full hover:bg-green-100 dark:hover:bg-gray-700 transition-colors flex items-center"
          >
            {theme === 'light' ? (
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