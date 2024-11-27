"use client";

import React, { useState } from "react";

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = newNode;
    }
    this.size++;
  }

  pop() {
    if (!this.head) return null;
    if (this.head.next === null) {
      const value = this.head.value;
      this.head = null;
      this.size--;
      return value;
    }
    let current = this.head;
    while (current.next && current.next.next) current = current.next;
    const value = current.next.value;
    current.next = null;
    this.size--;
    return value;
  }

  deleteAtBeginning() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  deleteAtEnd() {
    return this.pop();
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return null;
    if (index === 0) return this.deleteAtBeginning();
    let current = this.head;
    for (let i = 0; i < index - 1; i++) current = current.next;
    const value = current.next.value;
    current.next = current.next.next;
    this.size--;
    return value;
  }

  insertAtIndex(value, index) {
    if (index < 0 || index > this.size) return false;
    const newNode = new LinkedListNode(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) current = current.next;
      newNode.next = current.next;
      current.next = newNode;
    }
    this.size++;
    return true;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  toArray() {
    const array = [];
    let current = this.head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }
}

const LinkedListVisualizer = () => {
  const [linkedList] = useState(new LinkedList());
  const [value, setValue] = useState("");
  const [index, setIndex] = useState("");
  const [list, setList] = useState([]);
  const [answer, setAnswer] = useState("");

  const updateList = () => {
    setList(linkedList.toArray());
  };

  const handlePush = () => {
    if (value === "") return setAnswer("enter value!");
    linkedList.push(Number(value));
    setAnswer(`${value} added to linkedList`);
    setValue("");
    updateList();
  };

  const handlePop = () => {
    if (linkedList.length === 0) return setAnswer("LinkedList is Empty!");
    const removedVal = linkedList.pop();
    console.log(removedVal);
    updateList();
    if (JSON.stringify(removedVal) === "null") {
      setAnswer("LinkedList is Empty!");
    } else {
      setAnswer(`${removedVal} removed from linkedList`);
    }
  };

  const handleDeleteAtBeginning = () => {
    linkedList.deleteAtBeginning();
    updateList();
    setAnswer("deleted at beginning");
  };

  const handleDeleteAtEnd = () => {
    linkedList.deleteAtEnd();
    updateList();
    setAnswer("deleted at end");
  };

  const handleDeleteAtIndex = () => {
    if (index === "") return setAnswer("enter index!");
    if (linkedList.size === 0) {
      setAnswer("LinkedList is Empty!");
    } else {
      linkedList.deleteAtIndex(Number(index));
      setAnswer(`deleted ${index} index value`);
      setIndex("");
      updateList();
    }
  };

  const handleInsertAtIndex = () => {
    if (value === "" || index === "") return setAnswer("enter value and index");
    linkedList.insertAtIndex(Number(value), Number(index));
    setAnswer(`${value} inserted!`);
    setValue("");
    setIndex("");
    updateList();
  };

  const handleFind = () => {
    if (value === "") return;
    const position = linkedList.find(Number(value));
    setAnswer(
      position !== -1 ? `Value found at index ${position}` : "Value not found"
    );
    setValue("");
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold mb-4 mt-2">Linked List Visualizer</h2>
      <div className="mb-12">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value"
          className="border border-gray-300 lg:p-2 p-1 rounded mr-2"
        />
        <input
          type="number"
          value={index}
          onChange={(e) => setIndex(e.target.value)}
          placeholder="Index"
          className="border border-gray-300 lg:p-2 p-1 rounded m-2"
        />
        <button
          onClick={handlePush}
          className="bg-blue-500 lg:px-4 lg:py-2 px-2 py-1 text-white rounded mr-1"
        >
          Push
        </button>
        <button
          onClick={handlePop}
          className="bg-red-500 lg:px-4 lg:py-2 px-2 py-1 text-white rounded m-1"
        >
          Pop
        </button>
        <button
          onClick={handleDeleteAtBeginning}
          className="bg-yellow-500 lg:px-4 lg:py-2 px-2 py-1 text-white rounded m-1"
        >
          Delete at Beginning
        </button>
        <button
          onClick={handleDeleteAtEnd}
          className="bg-purple-500 lg:px-4 lg:py-2 px-2 py-1 text-white rounded m-1"
        >
          Delete at End
        </button>
        <button
          onClick={handleDeleteAtIndex}
          className="bg-green-500 lg:px-4 lg:py-2 px-2 py-1 text-white rounded m-1"
        >
          Delete at Index
        </button>
        <button
          onClick={handleInsertAtIndex}
          className="bg-orange-500 lg:px-4 lg:py-2 px-2 py-1 text-white rounded mr-2"
        >
          Insert at Index
        </button>
        <button
          onClick={handleFind}
          className="bg-teal-500 lg:px-4 lg:py-2 px-2 py-1 text-white rounded"
        >
          Find Value
        </button>
      </div>
      <div className="grid grid-flow-col justify-center mt-4">
        {list.map((value, idx) => (
          <div
            key={idx}
            className="bg-blue-500 mx-0 text-white text-center px-4 py-2 rounded-full"
          >
            {value}
          </div>
        ))}
      </div>
      <p className="text-center mt-2">{answer && `➡️${answer}`}</p>
    </div>
  );
};

export default LinkedListVisualizer;
