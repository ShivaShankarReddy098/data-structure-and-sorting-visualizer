"use client";
import { useEffect } from "react";

const CursorBubbles = () => {
  useEffect(() => {
    const container = document.createElement("div");
    container.classList.add("bubble-container");
    document.body.appendChild(container);

    const createBubble = (event) => {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      // Set the position of the bubble to where the cursor is
      const size = Math.random() * 30 + 15; // Random size of bubble
      const x = event.clientX;
      const y = event.clientY;

      bubble.style.left = `${x - size / 2}px`;
      bubble.style.top = `${y - size / 2}px`;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Add the bubble to the container
      container.appendChild(bubble);

      // Remove the bubble after animation completes
      setTimeout(() => {
        bubble.remove();
      }, 2000); // Matches animation duration
    };

    // Track mouse movements
    window.addEventListener("mousemove", createBubble);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("mousemove", createBubble);
    };
  }, []);

  return null;
};

export default CursorBubbles;
