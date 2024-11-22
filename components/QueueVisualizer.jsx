"use client";
import React, { useState } from "react";

const QueueVisualizer = () => {
  const [queue, setQueue] = useState([]);
  const [input, setInput] = useState("");

  const enqueue = () => {
    setQueue([...queue, input]);
    setInput("");
  };

  const dequeue = () => {
    setQueue(queue.slice(1));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Queue Visualizer</h2>
      <div className="flex border border-gray-300 p-4 rounded mb-4">
        {queue.map((item, idx) => (
          <div
            key={idx}
            className="bg-green-500 text-white p-2 mx-1 text-center"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <input
          className="border border-gray-300 p-2 rounded mr-4"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 px-4 py-2 text-white rounded mr-4"
          onClick={enqueue}
        >
          Enqueue
        </button>
        <button
          className="bg-red-500 px-4 py-2 text-white rounded"
          onClick={dequeue}
        >
          Dequeue
        </button>
      </div>
    </div>
  );
};

export default QueueVisualizer;
