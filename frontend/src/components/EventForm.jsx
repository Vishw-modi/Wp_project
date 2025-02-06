import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EventForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:5000/api/events",
        { name, description, date },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-lg animate-fadeIn">
        <h2 className="text-3xl font-bold mb-6 text-center">Create Event</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Event Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            placeholder="Event Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 p-3 rounded-lg text-white font-semibold transition-all"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
