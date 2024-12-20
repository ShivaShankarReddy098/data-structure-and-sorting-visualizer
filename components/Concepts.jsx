"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Concepts = () => {
  const conceptRefs = useRef([]); // Reference for each concept div

  useEffect(() => {
    // Animate each concept on scroll
    conceptRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // Trigger point for animation
            end: "top 50%",
            toggleActions: "play none none reverse",
            markers: false, // Set to true for debugging
          },
        }
      );
    });
  }, []);

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
      - Backtracking algorithms (e.g., solving mazes, DFS).
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
    <div
      id="concepts"
      className="lg:py-16 py-20 px-8 lg:flex flex-col overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-center mb-8">Concepts & Theory</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {concepts.map((concept, index) => (
          <div
            key={concept.id}
            ref={(el) => (conceptRefs.current[index] = el)}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-bold mb-4">{concept.title}</h3>
            <p className="text-gray-700 mb-4">{concept.shortDetails}</p>
            <p className="text-gray-900 font-semibold">Example:</p>
            <p className="text-gray-700 mb-4">{concept.example}</p>
            <p className="text-gray-700 whitespace-pre-wrap">
              {concept.fullDetails}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Concepts;
