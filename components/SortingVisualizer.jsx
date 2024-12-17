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
  const [changingBars, setChangingBars] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState("");

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

  const animateBars = (indices, color, delay = 0) => {
    const timeline = gsap.timeline({ delay });
    indices.forEach((idx) => {
      timeline.to(`.bar-${idx}`, {
        backgroundColor: color,
        duration: 0.2,
      });
    });
  };

  const animateSwap = (idx1, idx2, newHeight1, newHeight2) => {
    gsap.to(`.bar-${idx1}`, { height: `${newHeight1 * 3}px`, duration: 0.4 });
    gsap.to(`.bar-${idx2}`, { height: `${newHeight2 * 3}px`, duration: 0.4 });
  };

  const bubbleSort = async () => {
    const arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        setActiveBars([j, j + 1]);
        setChangingBars([j, j + 1]);
        setCurrentStep(`Bubble Sort - Comparing ${arr[j]} and ${arr[j + 1]}`);
        animateBars([j, j + 1], "#ef4444");
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          animateSwap(j, j + 1, arr[j], arr[j + 1]);
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, speed));
        }
        setChangingBars([]);
        animateBars([j, j + 1], "#3b82f6");
      }
    }
    setSortedArray([...arr]);
    setActiveBars([]);
    setCurrentStep("Bubble Sort - Sorting Completed");
  };

  const insertionSort = async () => {
    const arr = [...array];
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        setActiveBars([j, j + 1]);
        setChangingBars([j, j + 1]);
        setCurrentStep(
          `Insertion Sort - Shifting ${arr[j]} and placing ${key}`
        );
        animateBars([j, j + 1], "#ef4444");
        arr[j + 1] = arr[j];
        animateSwap(j, j + 1, arr[j], arr[j + 1]);
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
        j--;
      }
      arr[j + 1] = key;
      setArray([...arr]);
      setChangingBars([]);
      animateBars([j + 1], "#3b82f6");
    }
    setSortedArray([...arr]);
    setCurrentStep("Insertion Sort - Sorting Completed");
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
      setActiveBars([0, 1]);
      setChangingBars([0, 1]);
      setCurrentStep(`Merge Sort - Merging ${left[0]} and ${right[0]}`);
      animateBars([0, 1], "#ef4444");
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
      setArray([...result, ...left, ...right]);
      await new Promise((resolve) => setTimeout(resolve, speed));
      setChangingBars([]);
      animateBars([0, 1], "#3b82f6");
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
      setActiveBars([j, high]);
      setChangingBars([j, high]);
      setCurrentStep(`Quick Sort - Comparing ${arr[j]} and pivot ${arr[high]}`);
      animateBars([j, high], "#ef4444");
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
    animateBars([i + 1, high], "#3b82f6");
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex pt-20  ">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-80" : "w-0"
        } bg-gray-800 text-white p-4 transition-all duration-300 overflow-hidden lg:w-1/2`}
      >
        <button
          onClick={toggleSidebar}
          className="text-2xl absolute top-4 right-4 text-white lg:hidden"
        >
          X
        </button>
        <h3 className="text-xl font-semibold">Algorithm: {algorithm}</h3>
        <h4 className="mt-4 text-lg">Current Step:</h4>
        <p className="text-sm">{currentStep}</p>
        <pre className="mt-4">
          {algorithm === "Bubble Sort" &&
            `
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
`}
          {algorithm === "Insertion Sort" &&
            `
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
`}
          {algorithm === "Merge Sort" &&
            `
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
`}
          {algorithm === "Quick Sort" &&
            `
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = arr.filter(item => item < pivot);
  const right = arr.filter(item => item > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}
`}
        </pre>
        <h3 className="text-xl font-semibold mt-4">Time Complexity:</h3>
        <p>
          {algorithm === "Bubble Sort" && "O(n^2) - Worst Case"}
          {algorithm === "Insertion Sort" && "O(n^2) - Worst Case"}
          {algorithm === "Merge Sort" && "O(n log n)"}
          {algorithm === "Quick Sort" && "O(n log n) - Average Case"}
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Sorting Visualizer
        </h1>
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => setAlgorithm("Bubble Sort")}
            className={`${
              algorithm === "Bubble Sort" ? "bg-blue-500" : "bg-blue-200"
            } text-white p-2 rounded`}
          >
            Bubble Sort
          </button>
          <button
            onClick={() => setAlgorithm("Insertion Sort")}
            className={`${
              algorithm === "Insertion Sort" ? "bg-blue-500" : "bg-blue-200"
            } text-white p-2 rounded`}
          >
            Insertion Sort
          </button>
          <button
            onClick={() => setAlgorithm("Merge Sort")}
            className={`${
              algorithm === "Merge Sort" ? "bg-blue-500" : "bg-blue-200"
            } text-white p-2 rounded`}
          >
            Merge Sort
          </button>
          <button
            onClick={() => setAlgorithm("Quick Sort")}
            className={`${
              algorithm === "Quick Sort" ? "bg-blue-500" : "bg-blue-200"
            } text-white p-2 rounded`}
          >
            Quick Sort
          </button>
        </div>
        <div className="flex justify-center gap-2">
          {array.map((value, idx) => (
            <div
              key={idx}
              className={`bar-${idx} bg-blue-500 w-6 rounded-t-lg`}
              style={{
                height: `${value * 3}px`,
                position: "relative",
              }}
            >
              <span
                className="absolute bottom-0 text-xs text-white w-full text-center"
                style={{ paddingBottom: "4px" }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-4 mt-8">
          <button
            onClick={startSorting}
            className="bg-green-500 text-white p-2 rounded"
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
      </div>
    </div>
  );
};

export default SortingVisualizer;
