import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeContext } from "../../App";
import { FiTriangle } from "react-icons/fi";
import { CheckCircle2 } from "lucide-react";

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHuman, setIsHuman] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isHuman) {
      alert("Please confirm you are not a robot 🤖");
      return;
    }

    // 🧪 Mock users
    const users = [
      { email: "staff@zeamhealth.com", password: "123456", role: "staff" },
      { email: "doctor@zeamhealth.com", password: "123456", role: "doctor" },
      { email: "admin@zeamhealth.com", password: "123456", role: "admin" },
    ];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    if (user.role === "staff") navigate("/staff/dashboard");
    if (user.role === "doctor") navigate("/doctor/dashboard");
    if (user.role === "admin") navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-6 relative overflow-hidden">
      {/* Animated Background Triangle */}
      <motion.div
        className="absolute top-16 left-1/2 transform -translate-x-1/2"
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: 360, opacity: 1 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
          <polygon
            points="50,10 10,90 90,90"
            stroke={theme === "dark" ? "#22c55e" : "#047857"}
            strokeWidth="1.5"
            fill="transparent"
          />
        </svg>
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md w-full max-w-md p-8"
      >
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 mb-2">
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              <FiTriangle
                className="text-green-700 dark:text-green-400"
                size={28}
              />
            </motion.div>
            <h1 className="text-3xl font-bold text-green-800 dark:text-green-400 tracking-wide">
              ZEAM HEALTH
            </h1>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Mind • Body • Balance
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:border-green-600"
              placeholder="example@zeamhealth.com"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:border-green-600"
              placeholder="Enter password"
              required
            />
          </div>

          {/* CAPTCHA / Human Check */}
          <div className="flex items-center gap-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 p-3">
            <input
              type="checkbox"
              id="human-check"
              checked={isHuman}
              onChange={() => setIsHuman(!isHuman)}
              className="w-4 h-4 accent-green-600"
            />
            <label
              htmlFor="human-check"
              className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2 select-none"
            >
              I’m human
              {isHuman && <CheckCircle2 className="w-4 h-4 text-green-600" />}
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white p-3 border border-green-800 hover:bg-green-800 transition-colors text-sm font-semibold tracking-wide"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <NavLink
            to="/signup"
            className="text-green-700 dark:text-green-400 font-semibold hover:underline"
          >
            Sign Up
          </NavLink>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
