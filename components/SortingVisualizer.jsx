"use client";
import React, { useState, useEffect } from "react";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(500);
  const [algorithm, setAlgorithm] = useState("Bubble Sort");
  const [sortedArray, setSortedArray] = useState([]);

  const generateArray = () => {
    const newArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 100) + 1
    );
    setArray(newArray);
    setSortedArray([]);
  };

  useEffect(() => {
    generateArray();
  }, []);

  // Sorting Algorithms
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
    setSortedArray([...arr]);
  };

  const insertionSort = async () => {
    const arr = [...array];
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
        j--;
      }
      arr[j + 1] = key;
      setArray([...arr]);
    }
    setSortedArray([...arr]);
  };

  const mergeSort = async (arr = array) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = await mergeSort(arr.slice(0, mid));
    const right = await mergeSort(arr.slice(mid));

    return merge(left, right);
  };

  const merge = async (left, right) => {
    let result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
      setArray([...result, ...left, ...right]);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
    return [...result, ...left, ...right];
  };

  const quickSort = async (
    arr = [...array],
    low = 0,
    high = arr.length - 1
  ) => {
    if (low < high) {
      const pivot = await partition(arr, low, high);
      await quickSort(arr, low, pivot - 1);
      await quickSort(arr, pivot + 1, high);
    }
    setSortedArray([...arr]);
  };

  const partition = async (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    return i + 1;
  };

  const startSorting = async () => {
    if (algorithm === "Bubble Sort") await bubbleSort();
    else if (algorithm === "Insertion Sort") await insertionSort();
    else if (algorithm === "Merge Sort") {
      const sorted = await mergeSort();
      setSortedArray([...sorted]);
      setArray([...sorted]);
    } else if (algorithm === "Quick Sort") await quickSort();
  };

  return (
    <div className="px-4 py-40">
      <h2 className="text-xl font-bold mb-4">Sorting Visualizer</h2>
      <div className="flex justify-center mb-4">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="bg-blue-500 mx-1 text-white text-center"
            style={{ height: `${value * 3}px`, width: "20px" }}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-4">
        <select
          className="border border-gray-300 p-2 rounded mr-4"
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option>Bubble Sort</option>
          <option>Insertion Sort</option>
          <option>Merge Sort</option>
          <option>Quick Sort</option>
        </select>
        <button
          className="bg-green-500 px-4 py-2 text-white rounded mr-4"
          onClick={generateArray}
        >
          Generate New Array
        </button>
        <button
          className="bg-blue-500 px-4 py-2 text-white rounded"
          onClick={startSorting}
        >
          Start Sorting
        </button>
      </div>
      {sortedArray.length > 0 && (
        <div className="text-center mt-4">
          <h3 className="text-lg font-bold">Sorted Array:</h3>
          <div className="flex justify-center">
            {sortedArray.map((value, idx) => (
              <div
                key={idx}
                className="bg-green-500 mx-1 text-white text-center p-2 rounded"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortingVisualizer;
