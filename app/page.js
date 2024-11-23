import AboutMe from "@/components/AboutMe";
import Concepts from "@/components/Concepts";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Concepts />
      <AboutMe />
      <Feedback />
    </>
  );
}
