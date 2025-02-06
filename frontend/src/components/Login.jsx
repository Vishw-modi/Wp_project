import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: trimmedUsername,
        password: trimmedPassword,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="bg-gray-700 p-8 rounded-lg shadow-xl w-96 animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-white font-semibold transition-all"
          >
            Login
          </button>
          <div className="text-sm text-center mt-4">
            Don't have an account?
            <Link to="/register" className="text-blue-400 underline">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
