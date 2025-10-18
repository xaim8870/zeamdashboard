// src/services/doctorService.ts
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

interface Patient {
  id: number;
  name: string;
  age: number;
  sessions: number;
  improvement: number;
  heartRate: number;
}

interface DoctorStats {
  totalPatients: number;
  avgImprovement: number;
  activeSessions: number;
}

const mockPatients: Patient[] = [
  { id: 1, name: "Ali Khan", age: 28, sessions: 5, improvement: 72, heartRate: 78 },
  { id: 2, name: "Sara Ahmed", age: 34, sessions: 3, improvement: 65, heartRate: 82 },
  { id: 3, name: "John Doe", age: 42, sessions: 8, improvement: 80, heartRate: 75 },
];

const mockStats: DoctorStats = {
  totalPatients: 3,
  avgImprovement: 72,
  activeSessions: 2,
};

// ✅ Exported functions
export const getAssignedPatients = async (): Promise<Patient[]> => {
  try {
    // const res = await axios.get(`${API_URL}/doctor/patients`);
    // return res.data;
    await new Promise((r) => setTimeout(r, 800));
    return mockPatients;
  } catch (err) {
    console.error("Error fetching assigned patients:", err);
    return [];
  }
};

export const getDoctorStats = async (): Promise<DoctorStats> => {
  try {
    // const res = await axios.get(`${API_URL}/doctor/stats`);
    // return res.data;
    await new Promise((r) => setTimeout(r, 500));
    return mockStats;
  } catch (err) {
    console.error("Error fetching doctor stats:", err);
    return mockStats;
  }
};
