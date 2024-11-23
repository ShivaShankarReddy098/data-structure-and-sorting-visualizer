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

  const updateList = () => {
    setList(linkedList.toArray());
  };

  const handlePush = () => {
    if (value === "") return;
    linkedList.push(Number(value));
    setValue("");
    updateList();
  };

  const handlePop = () => {
    linkedList.pop();
    updateList();
  };

  const handleDeleteAtBeginning = () => {
    linkedList.deleteAtBeginning();
    updateList();
  };

  const handleDeleteAtEnd = () => {
    linkedList.deleteAtEnd();
    updateList();
  };

  const handleDeleteAtIndex = () => {
    if (index === "") return;
    linkedList.deleteAtIndex(Number(index));
    setIndex("");
    updateList();
  };

  const handleInsertAtIndex = () => {
    if (value === "" || index === "") return;
    linkedList.insertAtIndex(Number(value), Number(index));
    setValue("");
    setIndex("");
    updateList();
  };

  const handleFind = () => {
    if (value === "") return;
    const position = linkedList.find(Number(value));
    alert(
      position !== -1 ? `Value found at index ${position}` : "Value not found"
    );
    setValue("");
  };

  return (
    <div className="p-4 ">
      <h2 className="text-xl font-bold mb-4">Linked List Visualizer</h2>
      <div className="mb-4">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value"
          className="border border-gray-300 p-2 rounded mr-2"
        />
        <input
          type="number"
          value={index}
          onChange={(e) => setIndex(e.target.value)}
          placeholder="Index"
          className="border border-gray-300 p-2 rounded mr-2"
        />
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
          onClick={handleDeleteAtBeginning}
          className="bg-yellow-500 px-4 py-2 text-white rounded mr-2"
        >
          Delete at Beginning
        </button>
        <button
          onClick={handleDeleteAtEnd}
          className="bg-purple-500 px-4 py-2 text-white rounded mr-2"
        >
          Delete at End
        </button>
        <button
          onClick={handleDeleteAtIndex}
          className="bg-green-500 px-4 py-2 text-white rounded mr-2"
        >
          Delete at Index
        </button>
        <button
          onClick={handleInsertAtIndex}
          className="bg-orange-500 px-4 py-2 text-white rounded mr-2"
        >
          Insert at Index
        </button>
        <button
          onClick={handleFind}
          className="bg-teal-500 px-4 py-2 text-white rounded"
        >
          Find Value
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {list.map((value, idx) => (
          <div
            key={idx}
            className="bg-blue-500 mx-1 text-white text-center px-4 py-2 rounded"
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedListVisualizer;
