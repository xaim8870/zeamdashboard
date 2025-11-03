import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Existing pages
import Patients from "./pages/Patients";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ZeamBot from "./pages/ZeamBot";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Monitoring from "./pages/Monitoring";
import Events from "./pages/Events";
import Biometric from "./pages/Biometric";
import Treatment from "./pages/Treatment";
import Specialty from "./pages/Speciality";
import AiScribe from "./pages/AiScribe";
import Layout from "./pages/Layout";

// Layouts
import StaffLayout from "./components/layouts/StaffLayout";
import DoctorLayout from "./components/layouts/DoctorLayout";
import AdminLayout from "./components/layouts/AdminLayout";

// Role Pages
import StaffDashboard from "./pages/staff/Dashboard";
import StaffSchedule from "./pages/staff/Schedule";
import StaffPatients from "./pages/staff/Patients";

import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import DoctorMyPatients from "./pages/doctor/MyPatients";
import DoctorReports from "./pages/doctor/Reports";
import DoctorPatientProfile from "./pages/doctor/PatientProfile";
import DoctorEEGPage from "./pages/doctor/EEGPage";
import DeepCura from "./pages/doctor/DeepCura";

import AdminDashboard from "./pages/admin/Dashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import AdminSettings from "./pages/admin/Settings";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

const AppContent = () => {
  const location = useLocation(); // 👈 React hook that updates automatically
  const hideNavAndFooter = ["/login", "/signup"].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavAndFooter && <Navbar />}

      <Routes>
        {/* Auth Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Public Pages */}
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="patients" element={<Patients />} />
          
          <Route path="zeambot" element={<ZeamBot />} />
          <Route path="monitoring" element={<Monitoring />} />
          <Route path="events" element={<Events />} />
          <Route path="biometric" element={<Biometric />} />
          <Route path="treatment" element={<Treatment />} />
          <Route path="specialty" element={<Specialty />} />
          <Route path="ai-scribe" element={<AiScribe />} />
        </Route>

        {/* Role-Based Layouts */}
        <Route path="/staff" element={<StaffLayout />}>
          <Route path="dashboard" element={<StaffDashboard />} />
          <Route path="schedule" element={<StaffSchedule />} />
          <Route path="patients" element={<StaffPatients />} />
        </Route>

        <Route path="/doctor" element={<DoctorLayout />}>
          <Route path="dashboard" element={<DoctorDashboard />} />
          <Route path="mypatients" element={<DoctorMyPatients />} />
          <Route path="reports" element={<DoctorReports />} />
          <Route path="patient/:id" element={<DoctorPatientProfile />} />
          <Route path="eeg" element={<DoctorEEGPage />} /> {/* ✅ new EEG page */}
          <Route path="/doctor/deepcura" element={<DeepCura />} />



        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>

      {!hideNavAndFooter && <Footer />}
    </div>
  );
};

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        
          <div className={theme === "light" ? "light" : "dark"}>
            <AppContent />
          </div>
        
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
