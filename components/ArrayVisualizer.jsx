"use client";

import React, { useState } from "react";

const ArrayVisualizer = () => {
  const [array, setArray] = useState([10, 20, 30, 40]);
  const [inputValue, setInputValue] = useState("");
  const [indexValue, setIndexValue] = useState("");
  const [answer, setAnswer] = useState("");

  const handlePush = () => {
    if (inputValue === "") {
      setAnswer("Enter a value");
      setArray([...array]);
      // setAnswer("");
    } else {
      setArray([...array, Number(inputValue)]);
      setInputValue("");
      setAnswer(`${inputValue} added to current array`);
    }
  };

  const handlePop = () => {
    if (array.length === 0) {
      setAnswer("Array is empty");
    } else {
      setArray(array.slice(0, -1));
      setAnswer(`${array[array.length - 1]} removed from array`);
    }
  };

  const handleAddAtIndex = () => {
    if (inputValue === "" && indexValue === "")
      return setAnswer("Enter a value and index!");
    if (indexValue === "") return setAnswer("enter index!");
    if (inputValue === "") return setAnswer("enter value!");
    const index = parseInt(indexValue);
    if (index < 0 || index > array.length) return setAnswer("Invalid index!");
    const newArray = [...array];
    newArray.splice(index, 0, Number(inputValue));
    setArray(newArray);
    setInputValue("");
    setIndexValue("");
    setAnswer(`${inputValue} added at index ${index}`);
  };

  const handleRemoveAtIndex = () => {
    if (indexValue === "") return setAnswer("Enter index!");
    const index = parseInt(indexValue);
    if (index < 0 || index >= array.length) return setAnswer("Invalid index!");
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
    setIndexValue("");
    setAnswer(`${array[index]} removed from array`);
  };

  const handleFind = () => {
    if (inputValue === "") return setAnswer("Enter a value");
    const value = Number(inputValue);
    const index = array.indexOf(value);
    if (index === -1) {
      setAnswer(`Value ${value} not found in the array!`);
    } else {
      setAnswer(`Value ${value} found at index ${index}`);
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
        <p className="text-center p-4">{answer && `➡️ ${answer}`}</p>
      </div>
    </div>
  );
};

export default ArrayVisualizer;
