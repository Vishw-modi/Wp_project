import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:5000/api/events", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEvents(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 p-10 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Event Dashboard</h1>
      <Link
        to="/create-event"
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-semibold mb-6 inline-block transition-all"
      >
        + Create New Event
      </Link>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-200"
          >
            <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
            <p className="mb-4">{event.description}</p>
            <p className="text-sm text-gray-400">
              Date: {new Date(event.date).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
