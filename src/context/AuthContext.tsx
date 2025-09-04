import React from 'react';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

interface AuthContextType {
  token: string | null;
  role: 'staff' | 'doctor' | 'doctor-admin' | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [role, setRole] = useState<'staff' | 'doctor' | 'doctor-admin' | null>(null);

  useEffect(() => {
    if (token) {
      // Decode token to get role (or fetch from backend)
      const decoded = JSON.parse(atob(token.split('.')[1])); // Basic JWT decode
      setRole(decoded.role);
    }
  }, [token]);

  const login = async (email: string, password: string) => {
    const res = await axios.post('http://localhost:5000/createUser', { email, password }); // Or /login if you add it
    localStorage.setItem('token', res.data.token);
    setToken(res.data.token);
    setRole(res.data.role);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setRole(null);
  };

  return <AuthContext.Provider value={{ token, role, login, logout }}>{children}</AuthContext.Provider>;
};