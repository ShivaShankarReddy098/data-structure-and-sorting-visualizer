"use client";

import React, { useState, useEffect } from "react";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]); // Initialize as an array
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Fetch feedbacks when the component loads
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await fetch("/api/feedback");
        const data = await res.json();

        if (Array.isArray(data)) {
          setFeedbacks(data); // Ensure it's an array
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && message) {
      const newFeedback = { name, message };

      try {
        const res = await fetch("/api/feedback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newFeedback),
        });

        if (res.ok) {
          const updatedFeedbacks = await res.json();
          setFeedbacks(updatedFeedbacks); // Update feedbacks dynamically
        } else {
          console.error("Error saving feedback:", await res.text());
        }
      } catch (error) {
        console.error("Error saving feedback:", error);
      }

      // Clear input fields
      setName("");
      setMessage("");
    }
  };

  return (
    <div className="py-16 px-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8">
        Feedback & Reviews
      </h2>
      <form className="mb-8 max-w-lg mx-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full mb-4 p-3 border rounded"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Feedback"
          className="w-full mb-4 p-3 border rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition"
        >
          Submit Feedback
        </button>
      </form>
      <div className="max-w-lg mx-auto">
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="p-4 border rounded mb-4 bg-white shadow"
            >
              <h4 className="font-bold text-lg">{feedback.name}</h4>
              <p className="text-gray-700">{feedback.message}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No feedback yet.</p>
        )}
      </div>
    </div>
  );
};

export default Feedback;
