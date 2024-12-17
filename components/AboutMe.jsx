"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const titleRef = useRef(null);
  const contentRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Title animation: Fade in and scale up
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Content animation: Slide-in one by one
    contentRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: index * 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Button animation: Bounce on hover
    gsap.fromTo(
      buttonRef.current,
      { y: 0 },
      {
        y: -8,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <div id="about-me" className="bg-gray-100 py-16 px-8 overflow-hidden">
      {/* Title */}
      <h2
        ref={titleRef}
        className="text-4xl font-bold mb-6 text-gray-800 text-center"
      >
        About Me
      </h2>

      {/* Content */}
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <p
          ref={(el) => (contentRef.current[0] = el)}
          className="text-lg text-gray-700"
        >
          Hi! I’m{" "}
          <span className="text-blue-500 font-semibold">
            Shiva Shankar Reddy
          </span>
          , a passionate and detail-oriented Software Developer with hands-on
          experience in designing, developing, and deploying scalable web
          applications. Proficient in modern frameworks and technologies like{" "}
          <span className="font-semibold">
            ReactJS, Next.js, Node.js, MongoDB, and MySQL
          </span>
          , I have a strong focus on building responsive and user-friendly
          interfaces.
        </p>

        <p
          ref={(el) => (contentRef.current[1] = el)}
          className="text-lg text-gray-700"
        >
          Adept at solving complex problems, optimizing performance, and
          ensuring seamless user experiences. I am experienced in collaborating
          with cross-functional teams, implementing Agile methodologies, and
          utilizing tools like Git, Docker, and Postman for efficient
          development workflows.
        </p>

        <p
          ref={(el) => (contentRef.current[2] = el)}
          className="text-lg text-gray-700"
        >
          When I’m not coding, you’ll find me exploring new technologies,
          working on personal projects, or learning about AI and data
          structures. I believe in the power of collaboration and always look
          forward to connecting with like-minded individuals.
        </p>

        <p
          ref={(el) => (contentRef.current[3] = el)}
          className="text-lg text-gray-700"
        >
          Let’s work together to build something amazing!
        </p>

        {/* Button */}
        <div className="flex justify-center mt-4">
          <a
            ref={buttonRef}
            href="https://my-portfolio-using-next-js.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            View My Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
