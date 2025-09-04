import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Existing pages
import Patients from "./pages/Patients";
import PatientProfile from "./pages/PatientProfile";
import Home from "./pages/Home";
import Admin from "./pages/Admin"; // (Can later be moved inside /pages/admin/* if needed)
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

// 🔹 New Layouts
import StaffLayout from "./components/layouts/StaffLayout";
import DoctorLayout from "./components/layouts/DoctorLayout";
import AdminLayout from "./components/layouts/AdminLayout";

// 🔹 New Role Pages
import StaffDashboard from "./pages/staff/Dashboard";
import StaffSchedule from "./pages/staff/Schedule";
import StaffPatients from "./pages/staff/Patients";

import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import DoctorMyPatients from "./pages/doctor/MyPatients";
import DoctorReports from "./pages/doctor/Reports";

import AdminDashboard from "./pages/admin/Dashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import AdminSettings from "./pages/admin/Settings";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <BrowserRouter>
          <div className={theme === "light" ? "light" : "dark"}>
            <Navbar />
            <Routes>
              {/* Public Pages */}
              <Route path="/" element={<Layout />}> 
              <Route path="/" element={<Home />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/patients/:id" element={<PatientProfile />} />
              <Route path="/zeambot" element={<ZeamBot />} />
              <Route path="/monitoring" element={<Monitoring />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/events" element={<Events />} />
              <Route path="/biometric" element={<Biometric />} />
              <Route path="/treatment" element={<Treatment />} />
              <Route path="/specialty" element={<Specialty />} />
              <Route path="/ai-scribe" element={<AiScribe />} />
              <Route path="/admin" element={<Admin />} />
              </Route>
              {/* Role-Based Layouts */}
              {/* Staff */}
              <Route path="/staff" element={<StaffLayout />}>
                <Route path="dashboard" element={<StaffDashboard />} />
                <Route path="schedule" element={<StaffSchedule />} />
                <Route path="patients" element={<StaffPatients />} />
              </Route>

              {/* Doctor */}
              <Route path="/doctor" element={<DoctorLayout />}>
                <Route path="dashboard" element={<DoctorDashboard />} />
                <Route path="mypatients" element={<DoctorMyPatients />} />
                <Route path="reports" element={<DoctorReports />} />
              </Route>

              {/* Admin */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="manage-users" element={<ManageUsers />} />
                <Route path="settings" element={<AdminSettings />} />
              </Route>
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
