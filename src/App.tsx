import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Patients from './pages/Patients';
import PatientProfile from './pages/PatientProfile';
import Home from './pages/Home';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <div className={theme === 'light' ? 'light' : 'dark'}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/patients" element={<Patients />} />
            <Route path="/patients/:id" element={<PatientProfile />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;