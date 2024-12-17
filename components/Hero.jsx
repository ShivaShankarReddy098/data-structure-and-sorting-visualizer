"use client";
import Image from "next/image";
import React, { useState } from "react";
import heroImg from "@/public/dsa-hero.png";
import TypingAnimation from "./ui/typing-animation";
import Link from "next/link";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading state

  return (
    <section className="bg-slate-800 text-white pt-32 lg:pt-48 pb-24 lg:pb-56 px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center">
      {/* Left Section */}
      <div className="space-y-6 lg:pl-4">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          <TypingAnimation text="Learn DSA " />
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Master sorting algorithms, stacks, queues, linked lists, and more with
          hands-on interactive visualizations designed to boost your skills.
        </p>
        <Link
          href="/sorting"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 hover:scale-105 transform transition duration-200"
          aria-label="Explore Concepts"
        >
          Explore Concepts
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex justify-center lg:justify-end mt-10 lg:mt-0 lg:ml-8 relative">
        {/* Conditional Loader */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <Image
          src={heroImg}
          alt="Hero Image showing DSA concepts visually"
          width={500}
          height={500}
          priority
          onLoadingComplete={() => setIsLoading(false)} // Stop loader when image loads
          className={`drop-shadow-lg rounded-lg transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    </section>
  );
};

export default Hero;
