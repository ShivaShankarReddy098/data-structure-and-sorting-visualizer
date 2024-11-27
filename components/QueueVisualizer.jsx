"use client";

import React, { useState } from "react";

const QueueVisualizer = () => {
  const [queue, setQueue] = useState([]);
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState("");

  const handleEnqueue = () => {
    if (value === "") return setAnswer("Entetr value!");
    setQueue([...queue, Number(value)]);
    setAnswer(`${value} added to queue`);
    setValue("");
  };

  const handleDequeue = () => {
    if (queue.length === 0) return setAnswer("queue is empty!");
    const newQueue = [...queue];
    const removedVal = newQueue.shift();
    setAnswer(`${removedVal} removed from queue`);
    setQueue(newQueue);
  };

  const handlePeek = () => {
    if (queue.length === 0) return setAnswer("Queue is empty!");
    setAnswer(`Front of queue: ${queue[0]}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center mt-4">
        Queue Visualizer
      </h2>
      <div className="mb-4 text-center">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value"
          className="border border-gray-300 lg:p-2 p-1 rounded mr-2"
        />
        <button
          onClick={handleEnqueue}
          className="bg-blue-500 lg:px-4 lg:py-2 px-2 py-1 text-white rounded mr-2"
        >
          Enqueue
        </button>
        <button
          onClick={handleDequeue}
          className="bg-red-500 lg:px-4 lg:py-2  px-3 py-1  text-white rounded mr-2"
        >
          Dequeue
        </button>
        <button
          onClick={handlePeek}
          className="bg-green-500 lg:px-4 lg:py-2  px-2 py-1 text-white rounded"
        >
          Peek
        </button>
      </div>
      <div className=" justify-center lg:mt-4 mt-8 grid grid-flow-col mr-0">
        {queue.map((value, idx) => (
          <div
            key={idx}
            className="bg-blue-500 mx-0 text-white text-center px-4 py-2 border-r-2"
          >
            {value}
          </div>
        ))}
      </div>
      <p className="text-center mt-2">{answer && `➡️${answer}`}</p>
    </div>
  );
};

export default QueueVisualizer;
