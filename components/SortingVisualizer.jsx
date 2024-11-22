"use client";
import React, { useState, useEffect } from "react";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(150);

  const generateArray = () => {
    const newArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 100) + 1
    );
    setArray(newArray);
  };

  const bubbleSort = async () => {
    const arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, speed));
        }
      }
    }
  };
  const quickSort = async (arr = [...array], low=arr[0], high=arr[1]) => {
    // const arr = [...array];
    if (low < high) {
      const pivot = await partition(arr, low, high);
      await quickSort(arr, low, pivot - 1);
      await quickSort(arr, pivot + 1, high);
    }
  };

  const mergeSort = async () => {
    const arr = [...array];
    if (arr.length < 2) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = await mergeSort(arr.slice(0, mid));
    const right = await mergeSort(arr.slice(mid));
    return merge(left, right);
  };

  // Add dropdown for algorithm selection

  useEffect(() => {
    generateArray();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Sorting Visualizer</h2>
      <div className="flex justify-center mb-4">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="bg-blue-500 mx-1"
            style={{ height: `${value * 3}px`, width: "20px" }}
          ></div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="bg-green-500 px-4 py-2 text-white rounded mr-4"
          onClick={generateArray}
        >
          Generate New Array
        </button>
        <button
          className="bg-blue-500 px-4 py-2 text-white rounded mr-2"
          onClick={bubbleSort}
        >
          Start Bubble Sort
        </button>
        <button
          className="bg-blue-500 px-4 py-2 text-white rounded mr-2"
          onClick={quickSort}
        >
          Start Quick Sort
        </button>
        <button
          className="bg-blue-500 px-4 py-2 text-white rounded"
          onClick={mergeSort}
        >
          Start Merge Sort
        </button>
      </div>
    </div>
  );
};

export default SortingVisualizer;
