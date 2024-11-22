"use client";

import React, { useState } from "react";

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const LinkedListVisualizer = () => {
  const [head, setHead] = useState(null);
  const [input, setInput] = useState("");
  const [index, setIndex] = useState("");

  const addToEnd = (value) => {
    const newNode = new Node(value);
    if (!head) {
      setHead(newNode);
      return;
    }
    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    setHead({ ...head });
  };

  const addAtIndex = (value, idx) => {
    const newNode = new Node(value);
    if (idx === 0) {
      newNode.next = head;
      setHead(newNode);
      return;
    }
    let current = head;
    let prev = null;
    let currentIndex = 0;
    while (current && currentIndex < idx) {
      prev = current;
      current = current.next;
      currentIndex++;
    }
    if (currentIndex === idx) {
      prev.next = newNode;
      newNode.next = current;
    }
    setHead({ ...head });
  };

  const deleteAtIndex = (idx) => {
    if (idx === 0) {
      setHead(head.next);
      return;
    }
    let current = head;
    let prev = null;
    let currentIndex = 0;
    while (current && currentIndex < idx) {
      prev = current;
      current = current.next;
      currentIndex++;
    }
    if (current) {
      prev.next = current.next;
    }
    setHead({ ...head });
  };

  const find = (value) => {
    let current = head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return -1;
  };

  const renderLinkedList = () => {
    const nodes = [];
    let current = head;
    while (current) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes.map((value, idx) => (
      <div key={idx} className="bg-blue-500 text-white px-4 py-2 mx-2 rounded">
        {value}
      </div>
    ));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Linked List Visualizer</h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded mr-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Value"
        />
        <input
          type="number"
          className="border border-gray-300 p-2 rounded mr-2"
          value={index}
          onChange={(e) => setIndex(e.target.value)}
          placeholder="Index"
        />
        <button
          className="bg-green-500 px-4 py-2 text-white rounded mr-2"
          onClick={() => addToEnd(input)}
        >
          Add to End
        </button>
        <button
          className="bg-blue-500 px-4 py-2 text-white rounded mr-2"
          onClick={() => addAtIndex(input, parseInt(index))}
        >
          Insert at Index
        </button>
        <button
          className="bg-red-500 px-4 py-2 text-white rounded"
          onClick={() => deleteAtIndex(parseInt(index))}
        >
          Delete at Index
        </button>
      </div>
      <div className="flex flex-wrap items-center">{renderLinkedList()}</div>
    </div>
  );
};

export default LinkedListVisualizer;
