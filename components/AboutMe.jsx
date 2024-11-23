import React from "react";

const AboutMe = () => {
  return (
    <div id="about-me" className="bg-gray-100 py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          Hi! I’m{" "}
          <span className="text-blue-500 font-semibold">
            Shiva Shankar Reddy
          </span>
          , a passionate developer and lifelong learner. I specialize in
          building interactive and user-friendly web applications using modern
          tools like
          <span className="font-semibold">
            {" "}
            React, Next.js, and Tailwind CSS
          </span>
          . I love solving complex problems and turning ideas into reality with
          elegant code.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          When I’m not coding, you’ll find me exploring new technologies,
          working on personal projects, or learning about AI and data
          structures. I believe in the power of collaboration and always look
          forward to connecting with like-minded individuals.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Let’s work together to build something amazing!
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
