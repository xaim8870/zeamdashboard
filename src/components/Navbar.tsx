import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { ThemeContext } from '../App';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r bg-white dark:from-gray-800 dark:to-gray-900 text-black dark:text-white px-6 py-4 fixed w-full top-0 shadow-lg z-50 transition-all duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-extrabold tracking-tight">Zeam Health</Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-lg font-medium hover:text-blue-200 dark:hover:text-gray-300 transition-colors">Home</Link>
          <Link to="/patients" className="text-lg font-medium hover:text-blue-200 dark:hover:text-gray-300 transition-colors">Patients</Link>
          <Link to="/users" className="text-lg font-medium hover:text-blue-200 dark:hover:text-gray-300 transition-colors">Users</Link>
          <Link to="/admin" className="text-lg font-medium hover:text-blue-200 dark:hover:text-gray-300 transition-colors">Admin</Link>
          <Link to="/contact" className="text-lg font-medium hover:text-blue-200 dark:hover:text-gray-300 transition-colors">Contact</Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-blue-500 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 bg-blue-600 dark:bg-gray-800 p-4 rounded-lg">
          <Link to="/" className="text-lg font-medium hover:text-blue-200 dark:hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/patients" className="text-lg font-medium hover:text-blue-200 dark:hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Patients</Link>
          <Link to="/users" className="text-lg font-medium hover:text-blue-200 dark:hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Users</Link>
          <Link to="/admin" className="text-lg font-medium hover:text-blue-200 dark:hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Admin</Link>
          <Link to="/contact" className="text-lg font-medium hover:text-blue-200 dark:hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <button
            onClick={() => {
              toggleTheme();
              setIsMenuOpen(false);
            }}
            className="p-2 rounded-full hover:bg-blue-500 dark:hover:bg-gray-700 transition-colors flex items-center"
          >
            {theme === 'light' ? (
              <>
                <MoonIcon className="h-6 w-6 mr-2" /> Dark Mode
              </>
            ) : (
              <>
                <SunIcon className="h-6 w-6 mr-2" /> Light Mode
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;