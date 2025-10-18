// src/context/AuthContext.tsx
import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface User {
  id?: string;
  name?: string;
  email?: string;
  role: "staff" | "doctor" | "doctor-admin" | null;
}

interface AuthContextType {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Decode JWT and extract user info
  const decodeToken = (token: string): User | null => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      const decoded = JSON.parse(jsonPayload);
      return {
        id: decoded.id,
        name: decoded.name,
        email: decoded.email,
        role: decoded.role,
      };
    } catch (err) {
      console.error("Invalid token:", err);
      return null;
    }
  };

  // Load user from stored token
  useEffect(() => {
    if (token) {
      const decodedUser = decodeToken(token);
      setUser(decodedUser);
    } else {
      setUser(null);
    }
  }, [token]);

  // 🔹 LOGIN
  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });

      const receivedToken = res.data.token;
      localStorage.setItem("token", receivedToken);
      setToken(receivedToken);

      const decodedUser = decodeToken(receivedToken);
      setUser(decodedUser);

      // Redirect based on role
      if (decodedUser?.role === "doctor") navigate("/doctor/dashboard");
      else if (decodedUser?.role === "staff") navigate("/staff/dashboard");
      else if (decodedUser?.role === "doctor-admin") navigate("/admin/dashboard");
      else navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Invalid credentials");
    }
  };

  // 🔹 LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isAuthenticated: !!token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
