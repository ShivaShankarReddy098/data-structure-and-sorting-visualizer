import Navbar from "@/components/Navbar";
import StackVisualizer from "@/components/StackVisualizer";
import QueueVisualizer from "@/components/QueueVisualizer";
import LinkedListVisualizer from "@/components/LinkedListVisualizer";

export default function DataStructures() {
  return (
    <div>
      <Navbar />
      <StackVisualizer />
      <QueueVisualizer />
      <LinkedListVisualizer/>
    </div>
  );
}
