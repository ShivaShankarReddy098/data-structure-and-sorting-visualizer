import React from "react";

const Hero = () => {
  return (
    <div className="-z-10 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-72 px-8 flex items-center justify-center ">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 animate-pulse">
          Learn Data Structures and Algorithms Visually
        </h1>
        <p className="text-lg mb-6">
          Master sorting algorithms, stacks, queues, linked lists, and more with
          hands-on interactive visualizations.
        </p>
        <a
          href="#concepts"
          className="bg-white text-blue-500 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
        >
          Explore Concepts
        </a>
      </div>
    </div>
  );
};

export default Hero;
