"use client";
import React, { useState, useEffect } from "react";
import gsap from "gsap";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(900);
  const [givenArr, setGivenArr] = useState([]);
  const [algorithm, setAlgorithm] = useState("Bubble Sort");
  const [sortedArray, setSortedArray] = useState([]);
  const [activeBars, setActiveBars] = useState([]);
  const [changingBars, setChangingBars] = useState([]); // Bars that are changing

  const generateArray = () => {
    const newArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 100) + 10
    );
    setArray(newArray);
    setGivenArr(newArray);
    setSortedArray([]);
    setActiveBars([]);
    setChangingBars([]);
  };

  useEffect(() => {
    generateArray();
  }, []);

  // Function to animate bars during comparison or swap
  const animateBars = (indices, color, delay = 0) => {
    const timeline = gsap.timeline({ delay });
    indices.forEach((idx) => {
      timeline.to(`.bar-${idx}`, {
        backgroundColor: color,
        duration: 0.2,
      });
    });
  };

  // Animate bar heights when swapping
  const animateSwap = (idx1, idx2, newHeight1, newHeight2) => {
    gsap.to(`.bar-${idx1}`, { height: `${newHeight1 * 3}px`, duration: 0.4 });
    gsap.to(`.bar-${idx2}`, { height: `${newHeight2 * 3}px`, duration: 0.4 });
  };

  const bubbleSort = async () => {
    const arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        setActiveBars([j, j + 1]);
        setChangingBars([j, j + 1]); // Set bars to be changing
        animateBars([j, j + 1], "#ef4444"); // Highlight bars being compared in red
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          animateSwap(j, j + 1, arr[j], arr[j + 1]);
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, speed));
        }
        setChangingBars([]); // Reset changing bars
        animateBars([j, j + 1], "#3b82f6"); // Reset color to blue after comparison
      }
    }
    setSortedArray([...arr]);
    setActiveBars([]);
  };

  const insertionSort = async () => {
    const arr = [...array];
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        setActiveBars([j, j + 1]);
        setChangingBars([j, j + 1]);
        animateBars([j, j + 1], "#ef4444"); // Set color to red when comparing
        arr[j + 1] = arr[j];
        animateSwap(j, j + 1, arr[j], arr[j + 1]);
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
        j--;
      }
      arr[j + 1] = key;
      setArray([...arr]);
      setChangingBars([]);
      animateBars([j + 1], "#3b82f6"); // Set color back to blue for correctly placed element
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

  // const merge = async (left, right) => {
  //   let result = [];
  //   while (left.length && right.length) {
  //     setActiveBars([0, 1]);
  //     setChangingBars([0, 1]);
  //     animateBars([0, 1], "#ef4444");
  //     if (left[0] < right[0]) {
  //       result.push(left.shift());
  //     } else {
  //       result.push(right.shift());
  //     }
  //     setArray([...result, ...left, ...right]);
  //     await new Promise((resolve) => setTimeout(resolve, speed));
  //     setChangingBars([]);
  //     animateBars([0, 1], "#3b82f6");
  //   }
  //   return [...result, ...left, ...right];
  // };

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
      setActiveBars([j, high]);
      setChangingBars([j, high]);
      animateBars([j, high], "#ef4444"); // Highlight bars being compared
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        animateSwap(i, j, arr[i], arr[j]);
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    animateSwap(i + 1, high, arr[i + 1], arr[high]);
    setArray([...arr]);
    setChangingBars([]);
    animateBars([i + 1, high], "#3b82f6"); // Reset color for pivot swap
    return i + 1;
  };

  const startSorting = async () => {
    if (algorithm === "Bubble Sort") await bubbleSort();
    else if (algorithm === "Insertion Sort") await insertionSort();
    // else if (algorithm === "Merge Sort") {
    //   const sorted = await mergeSort();
    //   setSortedArray([...sorted]);
    //   setArray([...sorted]);
    // }
    else if (algorithm === "Quick Sort") await quickSort();
  };

  return (
    <div className="px-4 lg:py-40 py-28 bg-gray-100 min-h-screen overflow-hidden">
      <h2 className="text-4xl font-bold mb-8 flex justify-center text-gray-800">
        Sorting Visualizer
      </h2>
      <div className="flex justify-center items-end mb-4">
        {array.map((value, idx) => (
          <div
            key={idx}
            className={`mx-1 text-white text-center bar-${idx} ${
              activeBars.includes(idx) ? "bg-red-500" : "bg-blue-500"
            }`}
            style={{
              height: `${value * 3}px`,
              width: "30px",
              transition: "height 0.3s ease-in-out",
              position: "relative",
            }}
          >
            <div className="absolute bottom-0 w-full text-xs text-center">
              {value}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-8">
        <select
          className="border border-gray-300 lg:p-2 rounded mr-4"
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option>Bubble Sort</option>
          <option>Insertion Sort</option>
          {/* <option>Merge Sort</option> */}
          <option>Quick Sort</option>
        </select>
        <button
          className="bg-green-500 lg:px-4 lg:py-2 px-1 py-1 text-white rounded mr-4 hover:bg-green-600"
          onClick={generateArray}
        >
          Generate New Array
        </button>
        <button
          className="bg-blue-500 lg:px-4 lg:py-2 py-1 px-1 text-white rounded hover:bg-blue-600"
          onClick={startSorting}
        >
          Start Sorting
        </button>
      </div>
      <div className="flex justify-center mb-4">
        <input
          type="range"
          min="100"
          max="2000"
          step="100"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
          className="w-1/3"
        />
      </div>

      {sortedArray.length > 0 && (
        <div className="text-center mt-8">
          <h3 className="text-lg font-bold text-gray-700 mb-2">
            Sorted Array:
          </h3>
          <div className="flex justify-center gap-2">
            {sortedArray.map((value, idx) => (
              <div
                key={idx}
                className="bg-green-500 text-white px-2 py-1 rounded"
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
