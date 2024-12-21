"use client";
import { useState } from "react";
import ArrayVisualizer from "@/components/ArrayVisualizer";
import StackVisualizer from "@/components/StackVisualizer";
import QueueVisualizer from "@/components/QueueVisualizer";
import LinkedListVisualizer from "@/components/LinkedListVisualizer";

export default function DataStructures() {
  const [selectedVisualizer, setSelectedVisualizer] = useState(null);

  const renderVisualizer = () => {
    switch (selectedVisualizer) {
      case "array":
        return <ArrayVisualizer />;
      case "stack":
        return <StackVisualizer />;
      case "queue":
        return <QueueVisualizer />;
      case "linkedList":
        return <LinkedListVisualizer />;
      default:
        return (
          <div className="text-center text-lg mt-4">
            Click on a box to view the visualizer
          </div>
        );
    }
  };

  return (
    <div className="p-6  pt-20 lg:pb-40">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Data Structures Visualizer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 justify-center">
        <div
          onClick={() => setSelectedVisualizer("array")}
          className="border border-gray-300 p-8 bg-blue-500 text-white text-center cursor-pointer rounded-lg transition-transform transform hover:scale-105"
        >
          <h3 className="text-xl font-semibold">Array Visualizer</h3>
          <p className="mt-2">Click to visualize arrays</p>
        </div>
        <div
          onClick={() => setSelectedVisualizer("stack")}
          className="border border-gray-300 p-8 bg-red-500 text-white text-center cursor-pointer rounded-lg transition-transform transform hover:scale-105"
        >
          <h3 className="text-xl font-semibold">Stack Visualizer</h3>
          <p className="mt-2">Click to visualize stacks</p>
        </div>
        <div
          onClick={() => setSelectedVisualizer("queue")}
          className="border border-gray-300 p-8 bg-green-500 text-white text-center cursor-pointer rounded-lg transition-transform transform hover:scale-105"
        >
          <h3 className="text-xl font-semibold">Queue Visualizer</h3>
          <p className="mt-2">Click to visualize queues</p>
        </div>
        <div
          onClick={() => setSelectedVisualizer("linkedList")}
          className="border border-gray-300 p-8 bg-purple-500 text-white text-center cursor-pointer rounded-lg transition-transform transform hover:scale-105"
        >
          <h3 className="text-xl font-semibold">Linked List Visualizer</h3>
          <p className="mt-2">Click to visualize linked lists</p>
        </div>
      </div>

      <div className="mt-0">{renderVisualizer()}</div>
    </div>
  );
}
