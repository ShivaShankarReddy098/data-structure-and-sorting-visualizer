import Image from "next/image";
import React from "react";
import heroImg from "@/public/dsa-hero.png";
import TypingAnimation from "./ui/typing-animation";

const Hero = () => {
  return (
    <section className=" bg-slate-800 text-white lg:pt-48 pt-40 lg:pb-56 pb-32 lg:px-8 px-3 grid lg:grid-cols-2  items-center justify-center">
      <div className="pl-2">
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
      <div className="lg:ml-5">
        <Image src={heroImg} alt="heroImg" height={3500} width={3500} />
      </div>
    </section>
  );
};

export default Hero;
