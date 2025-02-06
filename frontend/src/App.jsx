import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import EventForm from "./components/EventForm";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white font-sans">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-event" element={<EventForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
