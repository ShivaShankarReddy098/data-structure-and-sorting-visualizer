"use client";

import React, { useEffect, useState } from "react";

const StackVisualizer = () => {
  const [stack, setStack] = useState([]);
  const [value, setValue] = useState("");
  const [answer, setAnwer] = useState("");
  const [newStack, setNewStack] = useState([]);
  const [currentVal, setCurrentVal] = useState();

  const handlePush = () => {
    if (value === "") return setAnwer("enter value!");
    setStack([...stack, Number(value)]);
    setCurrentVal(value);
    setAnwer(`${value} added to stack`);
    setValue("");
    setTimeout(() => {
      setCurrentVal();
    }, 1500);
  };
  useEffect(() => {
    const myArr = stack.reverse();
    setNewStack(myArr);
  }, [stack]);

  const handlePop = () => {
    if (newStack.length === 0) return setAnwer("Invalid!");
    setAnwer(" removed from stack");
    const newStackA = [...newStack.reverse()];
    console.log(newStackA);
    stack.pop();
    const removedVal = newStackA.pop();
    setCurrentVal(removedVal);
    setNewStack(newStackA);
    // setTimeout(() => {
    //   setNewStack(newStackA);
    // }, 1500);
  };

  const handlePeek = () => {
    if (newStack.length === 0) return setAnwer("Stack is empty!");
    setCurrentVal(newStack[0]);
    setAnwer("Top element is: " + newStack[0]);
    setTimeout(() => {
      setCurrentVal("");
    }, 1500);
    // setAnwer(`Top of stack: ${newStack.reverse()[newStack.length - 1]}`);
  };

  return (
    <div className="px-4 pt-40">
      <h2 className="text-xl font-bold mb-4 text-center">Stack Visualizer</h2>
      <div className="mb-4 text-center">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value"
          className="border border-gray-300 p-2 rounded mr-2 w-3/4"
        />
        <div className="grid grid-cols-2 gap-2 mt-2 lg:flex lg:text-center lg:justify-center">
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
      </div>
      <div className="grid  justify-center mt-4">
        {newStack.map((value, idx) => (
          <div
            key={idx}
            // className="bg-blue-500 mx-1 text-white text-center px-4 py-2 border-2"
            className={` mx-1 text-white text-center px-4 py-2 border-2 transition-all ${
              currentVal == value ? "bg-red-500" : "bg-blue-500"
            }`}
          >
            {value}
          </div>
        ))}
      </div>
      <p className="text-center mt-2">{answer && `➡️${answer}`}</p>
    </div>
  );
};

export default StackVisualizer;
