import Navbar from "@/components/Navbar";
import StackVisualizer from "@/components/StackVisualizer";
import QueueVisualizer from "@/components/QueueVisualizer";
import LinkedListVisualizer from "@/components/LinkedListVisualizer";
import ArrayVisualizer from "@/components/ArrayVisualizer";

export default function DataStructures() {
  return (
    <div>
      <Navbar />
      <ArrayVisualizer />
      <StackVisualizer />
      <QueueVisualizer />
      <LinkedListVisualizer />
    </div>
  );
}
