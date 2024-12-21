"use client";

import React, { useState } from "react";
import gsap from "gsap";

const ArrayVisualizer = () => {
  const [array, setArray] = useState([10, 20, 30, 40]);
  const [inputValue, setInputValue] = useState("");
  const [indexValue, setIndexValue] = useState("");
  const [answer, setAnswer] = useState("");
  const [currentVal, setCurrentVal] = useState("");

  const containerRef = React.useRef();

  const handlePush = () => {
    if (inputValue === "") {
      setAnswer("Enter a value");
      setArray([...array]);
    } else {
      const newArray = [...array, Number(inputValue)];
      setArray(newArray);
      setCurrentVal(inputValue);
      setInputValue("");
      setAnswer(`${inputValue} added to the array`);
      setTimeout(() => {
        setCurrentVal("");
      }, 1000);

      // GSAP animation for Push (Element slides in from above)
      const newElement = containerRef.current.lastChild;
      gsap.fromTo(
        newElement,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  };

  const handlePop = () => {
    if (array.length === 0) {
      setAnswer("Array is empty");
    } else {
      setCurrentVal(array[array.length - 1]);
      setTimeout(() => {
        const newArray = array.slice(0, -1);
        setArray(newArray);
        setAnswer(`${array[array.length - 1]} removed from array`);
      }, 1000);

      // GSAP animation for Pop (Element disappears with shrinking effect)
      const lastElement = containerRef.current.lastChild;
      gsap.to(lastElement, {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(lastElement, { scale: 1, opacity: 1 });
        },
      });
    }
  };

  const handleAddAtIndex = () => {
    if (inputValue === "" && indexValue === "")
      return setAnswer("Enter a value and index!");
    if (indexValue === "") return setAnswer("Enter index!");
    if (inputValue === "") return setAnswer("Enter value!");
    const index = parseInt(indexValue);
    if (index < 0 || index > array.length) return setAnswer("Invalid index!");
    const newArray = [...array];
    newArray.splice(index, 0, Number(inputValue));
    setArray(newArray);
    setCurrentVal(inputValue);
    setInputValue("");
    setIndexValue("");
    setAnswer(`${inputValue} added at index ${index}`);
    setTimeout(() => {
      setCurrentVal("");
    }, 1000);

    // GSAP animation for Add at Index (Element slides into position)
    const newElement = containerRef.current.children[index];
    gsap.fromTo(
      newElement,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
  };

  const handleRemoveAtIndex = () => {
    if (indexValue === "") return setAnswer("Enter index!");
    const index = parseInt(indexValue);
    if (index < 0 || index >= array.length) return setAnswer("Invalid index!");
    const newArray = [...array];
    const removedArr = newArray.splice(index, 1);
    setCurrentVal(removedArr);
    setTimeout(() => {
      setArray(newArray);
      setIndexValue("");
      setAnswer(`${array[index]} removed from array`);
    }, 1000);

    // GSAP animation for Remove at Index (Element shrinks and disappears)
    const elementToRemove = containerRef.current.children[index];
    gsap.to(elementToRemove, {
      scale: 0.5,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        gsap.set(elementToRemove, { scale: 1, opacity: 1 });
      },
    });
  };

  const handleFind = () => {
    if (inputValue === "") return setAnswer("Enter a value");
    const value = Number(inputValue);
    const index = array.indexOf(value);
    if (index === -1) {
      setAnswer(`Value ${value} not found in the array!`);
    } else {
      setCurrentVal(value);
      setAnswer(`Value ${value} found at index ${index}`);
    }
    setInputValue("");
    setTimeout(() => {
      setCurrentVal("");
    }, 1000);

    // GSAP animation for Find (Element pulses to grab attention)
    const elementToFind = containerRef.current.children[index];
    gsap.fromTo(
      elementToFind,
      { scale: 1 },
      { scale: 1.2, duration: 0.5, yoyo: true, repeat: 1 }
    );
  };

  return (
    <div className="px-6 pt-36">
      <h2 className="text-2xl font-bold mb-4 text-center">Array Visualizer</h2>
      <div className="mb-4">
        <p className="text-lg font-semibold">Current Array:</p>
        <div ref={containerRef} className="flex flex-wrap gap-2 mt-2">
          {array.map((value, index) => (
            <div
              key={index}
              className={`p-2 text-white rounded shadow transition-all ${
                currentVal == value ? "bg-red-500" : "bg-blue-500"
              }`}
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
