"use client";
import React, { useState, useEffect } from "react";
import gsap from "gsap";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(900);
  const [givenArr, setGivenArr] = useState([]);
  const [algorithm, setAlgorithm] = useState("Bubble Sort");
  const [sortedArray, setSortedArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [activeBars, setActiveBars] = useState([]);
  const [changingBars, setChangingBars] = useState([]); // Bars that are changing

  const generateArray = () => {
    if (isSorting) return;
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

  const merge = async (left, right) => {
    let result = [];
    while (left.length && right.length) {
      setActiveBars([0, 1]);
      setChangingBars([0, 1]);
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
    if (isSorting) return; // Prevent multiple sorts at the same time
    setIsSorting(true);
    if (algorithm === "Bubble Sort") await bubbleSort();
    else if (algorithm === "Insertion Sort") await insertionSort();
    // else if (algorithm === "Merge Sort") {
    //   const sorted = await mergeSort();
    //   setSortedArray([...sorted]);
    //   setArray([...sorted]);
    // }
    else if (algorithm === "Quick Sort") await quickSort();
    setIsSorting(false);
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div className=" w-full bg-white shadow-md p-4 pt-28 lg:overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          Algorithm Explanation for{" "}
          <span className="text-blue-700">{algorithm}</span>
        </h2>
        <p className="text-gray-600 text-sm whitespace-pre-line">
          {algorithm === "Bubble Sort"
            ? `1. Start at the first element.
               2. Compare the current element with the next element.
               3. Swap them if the current element is greater.
               4. Repeat this process for all elements, moving the largest to the end.
               5. Continue until the array is sorted.
              Code:
                  function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      }
        }
  return arr;
          }
             Time Complexity:
             1.Best Case: O(n) (when the array is already sorted)
             2.Worst Case: O(n²)
             3.Average Case: O(n²)
             Space Complexity: O(1)
`
            : algorithm === "Insertion Sort"
            ? `1. Start with the second element.
               2. Compare it with the elements before it.
               3. Shift larger elements one position to the right.
               4. Insert the current element in its correct position.
               5. Repeat for all elements in the array.
               Code:
               function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    // Shift elements that are greater than key
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
  Time Complexity:
             1.Best Case: O(n) (when the array is already sorted)
             2.Worst Case: O(n²)
             3.Average Case: O(n²)
             Space Complexity: O(1)
               `
            : `1. Select the last element as the pivot.
               2. Partition the array such that elements less than the pivot are on the left, and elements greater are on the right.
               3. Recursively apply Quick Sort on the left and right subarrays.
               4. Combine the sorted subarrays and the pivot to get the final result.
               Code: 
               function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
  Time Complexity:
             1.Best Case: O(nlogn)
             2.Worst Case: O(n²)
             3.Average Case: O(nlogn)
             Space Complexity: O(logn)
               `}
        </p>
      </div>
      <div className="px-4 lg:py-28 py-22 bg-gray-100 min-h-screen overflow-hidden">
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
        <div className="flex justify-center lg:mb-8 mb-2">
          <select
            className="border border-gray-300 lg:p-2 rounded mr-4"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            disabled={isSorting}
          >
            <option>Bubble Sort</option>
            <option>Insertion Sort</option>
            {/* <option>Merge Sort</option> */}
            <option>Quick Sort</option>
          </select>
          <button
            className="bg-green-500 lg:px-4 lg:py-2 px-1 py-1 text-white rounded mr-4 hover:bg-green-600"
            onClick={generateArray}
            disabled={isSorting}
          >
            Generate New Array
          </button>
          <button
            className="bg-blue-500 lg:px-4 lg:py-2 py-1 px-1 text-white rounded hover:bg-blue-600"
            onClick={startSorting}
            disabled={isSorting}
          >
            Start Sorting
          </button>
        </div>
        {/* <div className="flex justify-center mb-4">
          <input
            type="range"
            min="100"
            max="2000"
            step="100"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            className="w-1/3"
          />
        </div> */}
        {sortedArray.length > 0 && (
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-700 mb-2">
              Sorted Array:
            </h3>
            <div className="flex justify-center gap-2">
              {sortedArray.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-green-500 text-white lg:px-2 lg:py-1 px-1 rounded"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortingVisualizer;
