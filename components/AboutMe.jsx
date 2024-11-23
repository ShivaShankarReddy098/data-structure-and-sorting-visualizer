import React from "react";

const AboutMe = () => {
  const skills = {
    Languages: ["Python", "JavaScript", "TypeScript", "C"],
    "Frameworks and Libraries": [
      "React.js",
      "Next.js",
      "Express.js",
      "Node.js",
      "NumPy",
      "Pandas",
      "Matplotlib",
    ],
    Databases: ["MongoDB", "MySQL", "PostgreSQL"],
    Tools: [
      "GitHub",
      "VS Code",
      "MySQL Workbench",
      "Postman API",
      "MongoDB Compass",
      "Figma",
      "Jupyter",
    ],
    Others: ["Docker", "Git", "GSAP", "Sequelize", "Mongoose"],
  };
  return (
    <div id="about-me" className="bg-gray-100 py-16 px-8 ">
      <h2 className="text-4xl font-bold mb-6 text-gray-800 items-center flex justify-center">
        About Me
      </h2>
      <div className="grid grid-cols-1 gap-2">
        <div className="max-w-4xl mx-auto text-start flex flex-col justify-start">
          <p className="text-lg text-gray-700 mb-6">
            Hi! I’m{" "}
            <span className="text-blue-500 font-semibold">
              Shiva Shankar Reddy
            </span>
            ,Passionate and detail-oriented Software Developer with hands-on
            experience in designing, developing, and deploying scalable web
            applications. Proficient in modern frameworks and technologies like
            <span className="font-semibold">
              {" "}
              ReactJS, Next.js, Node.js, MongoDB, and MySQL,
            </span>{" "}
            with a strong focus on building responsive and user-friendly
            interfaces. Adept at solving complex problems, optimizing
            performance, and ensuring seamless user experiences. Experienced in
            collaborating with cross-functional teams, implementing Agile
            methodologies, and utilizing tools like Git, Docker, and Postman for
            efficient development workflows. Eager to contribute to innovative
            projects and continuously grow in dynamic environments.
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
              href="https://my-portfolio-using-next-js.vercel.app/"
              target="_blanck"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              View My Portfolio
            </a>
          </div>
        </div>
        <section className="bg-gray-100 py-10">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              My Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
                >
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item, index) => (
                      <li
                        key={index}
                        className="text-gray-600 bg-gray-100 py-1 px-3 rounded-md"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
