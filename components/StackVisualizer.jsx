"use client";
import React, { useState } from "react";

const StackVisualizer = () => {
  const [stack, setStack] = useState([]);
  const [input, setInput] = useState("");

  const push = () => {
    setStack([...stack, input]);
    setInput("");
  };

  const pop = () => {
    setStack(stack.slice(0, -1));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Stack Visualizer</h2>
      <div className="border border-gray-300 p-4 rounded mb-4">
        {stack.map((item, idx) => (
          <div
            key={idx}
            className="bg-green-500 text-white p-2 my-1 text-center"
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
          onClick={push}
        >
          Push
        </button>
        <button
          className="bg-red-500 px-4 py-2 text-white rounded"
          onClick={pop}
        >
          Pop
        </button>
      </div>
    </div>
  );
};

export default StackVisualizer;
