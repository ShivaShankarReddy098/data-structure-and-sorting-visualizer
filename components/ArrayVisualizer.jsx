"use client";

import React, { useState } from "react";

const ArrayVisualizer = () => {
  const [array, setArray] = useState([10, 20, 30, 40]);
  const [inputValue, setInputValue] = useState("");
  const [indexValue, setIndexValue] = useState("");

  const handlePush = () => {
    if (inputValue === "") return alert("Enter a value to push!");
    setArray([...array, Number(inputValue)]);
    setInputValue("");
  };

  const handlePop = () => {
    if (array.length === 0) return alert("Array is empty!");
    setArray(array.slice(0, -1));
  };

  const handleAddAtIndex = () => {
    if (inputValue === "" || indexValue === "")
      return alert("Enter a value and index!");
    const index = parseInt(indexValue);
    if (index < 0 || index > array.length) return alert("Invalid index!");
    const newArray = [...array];
    newArray.splice(index, 0, Number(inputValue));
    setArray(newArray);
    setInputValue("");
    setIndexValue("");
  };

  const handleRemoveAtIndex = () => {
    if (indexValue === "") return alert("Enter an index!");
    const index = parseInt(indexValue);
    if (index < 0 || index >= array.length) return alert("Invalid index!");
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
    setIndexValue("");
  };

  const handleFind = () => {
    if (inputValue === "") return alert("Enter a value to find!");
    const value = Number(inputValue);
    const index = array.indexOf(value);
    if (index === -1) {
      alert(`Value ${value} not found in the array!`);
    } else {
      alert(`Value ${value} found at index ${index}`);
    }
    setInputValue("");
  };

  return (
    <div className="px-6 pt-36">
      <h2 className="text-2xl font-bold mb-4 text-center">Array Visualizer</h2>
      <div className="mb-4">
        <p className="text-lg font-semibold">Current Array:</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {array.map((value, index) => (
            <div
              key={index}
              className="p-2 bg-blue-500 text-white rounded shadow"
            >
              {value}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Value"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="p-2 border rounded w-full"
          />
          <input
            type="number"
            placeholder="Index"
            value={indexValue}
            onChange={(e) => setIndexValue(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <button
            onClick={handlePush}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Push
          </button>
          <button
            onClick={handlePop}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Pop
          </button>
          <button
            onClick={handleAddAtIndex}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add at Index
          </button>
          <button
            onClick={handleRemoveAtIndex}
            className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
          >
            Remove at Index
          </button>
          <button
            onClick={handleFind}
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
          >
            Find
          </button>
          <button
            onClick={() => setArray([])}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Clear Array
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArrayVisualizer;
