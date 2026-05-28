import React from "react";

import {
  GitFork,
  Mail,
  Download
} from "lucide-react";

const projects = [
  {
    title: "AI Resume Score Project",
    tech: "React, Node.js, MongoDB",
    description:
      "AI-powered resume analysis platform with ATS scoring and interactive result visualization.",
    github:
      "https://github.com/sripriyaassit/AI-RESUME-SCORE-PROJECT",
  },
  {
    title: "Smart India Hackathon Project",
    tech: "React, Team Project",
    description:
      "Civic issue reporting and resolution system focused on real-world problem solving.",
    github: "https://github.com/sripriyaassit/Sih",
  },
  {
    title: "Food Delivery Web App",
    tech: "React",
    description:
      "Responsive food delivery app with modern UI and seamless navigation.",
    github: "https://github.com/sripriyaassit/Food-Delivery",
  },
  {
    title: "VS Code Text Color Extension",
    tech: "VS Code API",
    description:
      "Custom extension to enhance text visibility and developer experience.",
    github: "https://github.com/sripriyaassit/vs-code-text-color",
  },
];

export default function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen scroll-smooth">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-xl font-bold text-indigo-400">
          Priya Kumari
        </h1>

        <div className="flex gap-4">
          <a
            href="https://github.com/sripriyaassit"
            target="_blank"
            rel="noreferrer"
          >
            <GitFork />
          </a>

          <a href="mailto:nagvaipriya@gmail.com">
            <Mail />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl md:text-6xl font-bold">
          MERN Stack Developer
        </h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Building scalable web applications and modern UI
          experiences using MERN Stack.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-indigo-500 rounded-xl hover:bg-indigo-600 transition"
          >
            <Download size={18} />
            Resume
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
          >
            Contact
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-indigo-400">
          About Me
        </h2>

        <p className="text-gray-300 leading-7">
          I am Priya Kumari, a passionate MERN Stack Developer.
          I enjoy building responsive web applications,
          solving real-world problems, and creating clean,
          user-friendly interfaces.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-purple-400">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-5 rounded-xl">
            <h3 className="font-semibold mb-2">Frontend</h3>

            <p className="text-gray-400">
              HTML, CSS, JavaScript, React, Tailwind CSS
            </p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl">
            <h3 className="font-semibold mb-2">Backend</h3>

            <p className="text-gray-400">
              Node.js, Express.js, Java
            </p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl">
            <h3 className="font-semibold mb-2">
              Database & Tools
            </h3>

            <p className="text-gray-400">
              MongoDB, SQL, Git, GitHub, VS Code
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-indigo-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-indigo-500 transition"
            >
              <h3 className="text-xl font-semibold text-indigo-300">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                {project.tech}
              </p>

              <p className="text-gray-300 mt-3">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-purple-400 hover:text-purple-300"
              >
                View Code →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-purple-400">
          Experience
        </h2>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold">
            Placemantra (Remote)
          </h3>

          <p className="text-gray-400 text-sm">
            Web Development Intern | July 2025 – Present
          </p>

          <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
            <li>
              Worked on Smart India Hackathon civic issue
              reporting system
            </li>

            <li>
              Built responsive UI using React.js
            </li>

            <li>
              Used Git & GitHub for collaboration and version
              control
            </li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-16 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-indigo-400">
          Contact
        </h2>

        <p className="text-gray-400">
          nagvaipriya@gmail.com
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/sripriyaassit"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400"
          >
            GitHub
          </a>

          <a
            href="mailto:nagvaipriya@gmail.com"
            className="hover:text-indigo-400"
          >
            Email
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 border-t border-gray-800">
        © 2026 Priya Kumari
      </footer>
    </div>
  );
}