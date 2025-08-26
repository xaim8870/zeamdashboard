import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Add this import
import Patients from './pages/Patients';
import PatientProfile from './pages/PatientProfile';
import Home from './pages/Home';
import Admin from './pages/Admin';
import ZeamBot from './pages/ZeamBot';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Monitoring from './pages/Monitoring';
import Events from './pages/Events'; // Import for /events
import Biometric from './pages/Biometric'; // Import for /biometric
import Treatment from './pages/Treatment'; // Import for /treatment
import Specialty from './pages/Speciality'; // Import for /specialty (note: 'speciality' is often spelled 'specialty' in code)

export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const queryClient = new QueryClient(); // Create QueryClient instance

  return (
    <QueryClientProvider client={queryClient}> {/* Wrap the app here */}
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <BrowserRouter>
          <div className={theme === 'light' ? 'light' : 'dark'}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/zeambot" element={<ZeamBot />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/patients/:id" element={<PatientProfile />} />
              <Route path="/monitoring" element={<Monitoring />} />
           
              {/* Add these missing routes referenced in Home.tsx to avoid 404 errors */}
              <Route path="/events" element={<Events />} />
              <Route path="/biometric" element={<Biometric />} />
              <Route path="/treatment" element={<Treatment />} />
              <Route path="/specialty" element={<Specialty />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
};

export default App;