"use client";

import React, { useState } from "react";

const QueueVisualizer = () => {
  const [queue, setQueue] = useState([]);
  const [value, setValue] = useState("");

  const handleEnqueue = () => {
    if (value === "") return;
    setQueue([...queue, Number(value)]);
    setValue("");
  };

  const handleDequeue = () => {
    if (queue.length === 0) return;
    const newQueue = [...queue];
    newQueue.shift();
    setQueue(newQueue);
  };

  const handlePeek = () => {
    if (queue.length === 0) return alert("Queue is empty!");
    alert(`Front of queue: ${queue[0]}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Queue Visualizer</h2>
      <div className="mb-4">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value"
          className="border border-gray-300 p-2 rounded mr-2"
        />
        <button
          onClick={handleEnqueue}
          className="bg-blue-500 px-4 py-2 text-white rounded mr-2"
        >
          Enqueue
        </button>
        <button
          onClick={handleDequeue}
          className="bg-red-500 px-4 py-2 text-white rounded mr-2"
        >
          Dequeue
        </button>
        <button
          onClick={handlePeek}
          className="bg-green-500 px-4 py-2 text-white rounded"
        >
          Peek
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {queue.map((value, idx) => (
          <div
            key={idx}
            className="bg-blue-500 mx-1 text-white text-center px-4 py-2 rounded"
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QueueVisualizer;
