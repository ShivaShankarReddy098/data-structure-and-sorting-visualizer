import Image from "next/image";
import React from "react";
import heroImg from "@/public/dsa-hero.png";
import TypingAnimation from "./ui/typing-animation";

const Hero = () => {
  return (
    <div className=" bg-slate-800 text-white pt-48 pb-56 px-8 grid lg:grid-cols-2 items-center  justify-center ">
      <div className=" pl-2">
        {/* <h1 className="text-6xl font-bold mb-4 animate-pulse">
          Learn Data Structures and Algorithms Visually
        </h1> */}
        <TypingAnimation text="Learn DSA Visually" />
        <p className="text-lg mb-6 text-wrap">
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
      <div className="ml-5">
        <Image src={heroImg} alt="heroImg" height={3500} width={3500} />
      </div>
    </div>
  );
};

export default Hero;
