"use client";

import React, { useState } from "react";

const StackVisualizer = () => {
  const [stack, setStack] = useState([]);
  const [value, setValue] = useState("");

  const handlePush = () => {
    if (value === "") return;
    setStack([...stack, Number(value)]);
    setValue("");
  };

  const handlePop = () => {
    if (stack.length === 0) return;
    const newStack = [...stack];
    newStack.pop();
    setStack(newStack);
  };

  const handlePeek = () => {
    if (stack.length === 0) return alert("Stack is empty!");
    alert(`Top of stack: ${stack[stack.length - 1]}`);
  };

  return (
    <div className="px-4 pt-40">
      <h2 className="text-xl font-bold mb-4">Stack Visualizer</h2>
      <div className="mb-4">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value"
          className="border border-gray-300 p-2 rounded mr-2"
        />
        <button
          onClick={handlePush}
          className="bg-blue-500 px-4 py-2 text-white rounded mr-2"
        >
          Push
        </button>
        <button
          onClick={handlePop}
          className="bg-red-500 px-4 py-2 text-white rounded mr-2"
        >
          Pop
        </button>
        <button
          onClick={handlePeek}
          className="bg-green-500 px-4 py-2 text-white rounded"
        >
          Peek
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {stack.map((value, idx) => (
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

export default StackVisualizer;
