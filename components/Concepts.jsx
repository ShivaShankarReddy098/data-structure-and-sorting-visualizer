"use client";
import React, { useState } from "react";

const Concepts = () => {
  const [selectedConcept, setSelectedConcept] = useState(null);

  const concepts = [
    {
      id: 1,
      title: "Sorting Algorithms",
      shortDetails:
        "Sorting algorithms are used to rearrange a collection of elements into a specific order (e.g., ascending or descending).",
      fullDetails: `
      Bubble Sort: Repeatedly compares adjacent elements and swaps them if they are in the wrong order. 
      Time Complexity: O(n²).

      Merge Sort: Divides the array into halves, sorts each half, and merges them back together.
      Time Complexity: O(n log n).

      Quick Sort: Picks a pivot element, partitions the array, and sorts the partitions recursively.
      Time Complexity: O(n log n) (average case).

      Insertion Sort: Builds the sorted array one item at a time by comparing and inserting elements into their correct position.
      Time Complexity: O(n²).
      `,
      example: "Example: Input = [3, 1, 4, 1]; Output = [1, 1, 3, 4]",
    },
    {
      id: 2,
      title: "Linked List",
      shortDetails:
        "A linked list is a linear data structure where each element contains a value and a reference to the next node.",
      fullDetails: `
      Types of Linked Lists:
      1. Singly Linked List: Nodes have a reference to the next node only.
      2. Doubly Linked List: Nodes have references to both the next and previous nodes.
      3. Circular Linked List: The last node points back to the first node.

      Operations:
      - Insertion: At beginning, end, or a specific index.
      - Deletion: From beginning, end, or a specific index.
      - Traversal: Visiting each node in the list.
      `,
      example: "Example: [Head -> 10 -> 20 -> 30 -> NULL]",
    },
    {
      id: 3,
      title: "Stack",
      shortDetails:
        "A stack is a Last-In-First-Out (LIFO) data structure. The last element added is the first to be removed.",
      fullDetails: `
      Operations:
      - Push: Add an element to the top of the stack.
      - Pop: Remove the top element of the stack.
      - Peek: View the top element without removing it.

      Applications:
      - Function calls and recursion.
      - Undo operations in text editors.
      `,
      example: "Example: Push(10), Push(20), Pop() -> Stack: [10]",
    },
    {
      id: 4,
      title: "Queue",
      shortDetails:
        "A queue is a First-In-First-Out (FIFO) data structure. The first element added is the first to be removed.",
      fullDetails: `
      Types of Queues:
      1. Simple Queue: Elements are processed in FIFO order.
      2. Circular Queue: The last position is connected to the first.
      3. Priority Queue: Elements are dequeued based on priority, not order.

      Operations:
      - Enqueue: Add an element to the end of the queue.
      - Dequeue: Remove the front element of the queue.
      - Peek: View the front element without removing it.

      Applications:
      - Scheduling tasks in operating systems.
      - Handling requests in web servers.
      `,
      example: "Example: Enqueue(10), Enqueue(20), Dequeue() -> Queue: [20]",
    },
  ];

  return (
    <div id="concepts" className="lg:py-16 py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-8">Concepts & Theory</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {concepts.map((concept) => (
          <div
            key={concept.id}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-bold mb-4">{concept.title}</h3>
            <p className="text-gray-700 mb-4">{concept.shortDetails}</p>
            <p className="text-gray-900 font-semibold">Example:</p>
            <p className="text-gray-700 mb-4">{concept.example}</p>
            <button
              onClick={() => setSelectedConcept(concept.id)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Read More
            </button>
            {selectedConcept === concept.id && (
              <div className="fixed lg:top-0 top-8 m-4 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white lg:p-8 p-3 rounded-lg shadow-lg max-w-2xl">
                  <h3 className="text-2xl font-bold mb-4">{concept.title}</h3>
                  <p className="text-gray-700 whitespace-pre-wrap mb-6 text-center">
                    {concept.fullDetails}
                  </p>
                  <button
                    onClick={() => setSelectedConcept(null)}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Concepts;
