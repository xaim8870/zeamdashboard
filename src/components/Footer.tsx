import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 text-black dark:text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight mb-4">Zeam Health</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Empowering healthcare with innovative solutions. Based in Sacramento, California.
            </p>
          </div>
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-blue-500 dark:hover:text-gray-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/patients" className="text-sm hover:text-blue-500 dark:hover:text-gray-300 transition-colors">Patients</Link>
              </li>
              <li>
                <Link to="/users" className="text-sm hover:text-blue-500 dark:hover:text-gray-300 transition-colors">Users</Link>
              </li>
              <li>
                <Link to="/admin" className="text-sm hover:text-blue-500 dark:hover:text-gray-300 transition-colors">Admin</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-blue-500 dark:hover:text-gray-300 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          {/* Contact and Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              123 Health St, Sacramento, CA 95814
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Email: <a href="mailto:info@zeamhealth.com" className="hover:text-blue-500 dark:hover:text-gray-300 transition-colors">info@zeamhealth.com</a>
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-gray-300 transition-colors"
                aria-label="Twitter/X"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.85-3.037-1.852 0-2.136 1.447-2.136 2.941v5.665H9.352V9.747h3.414v1.561h.048c.476-.9 1.636-1.85 3.365-1.85 3.6 0 4.262 2.37 4.262 5.455v6.539zM5.337 7.433c-1.144 0-2.063-.93-2.063-2.077 0-1.147.919-2.078 2.063-2.078 1.143 0 2.062.931 2.062 2.078 0 1.147-.919 2.077-2.062 2.077zm1.777 13.019H3.56V9.747h3.554v10.705zM22.225 0H1.771C.792 0 0 .792 0 1.771v20.458C0 23.208.792 24 1.771 24h20.454c.979 0 1.771-.792 1.771-1.771V1.771C24 .792 23.208 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            &copy; {currentYear} Zeam Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;