// src/pages/ProjectsPage.jsx
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectsPage() {
  const projects = [
    {
      image: "/images/gymmembership-app.png",
      title: "Gym Membership Registration Frame App",
      description:
        "Desktop Java application for managing gym memberships. Includes validation, reporting, and SQLite support.",
      tech: ["Java", "Swing", "SQLite", "OOP"],
      github: "https://github.com/danielAd0/GymMembershipFrameApp",
    },
    {
      image: "/images/encryption-app.png",
      title: "Secure File Encryption App",
      description:
        "Encrypt and decrypt files with a secure Caesar Cipher system. Includes clean UI and file browsing features.",
      tech: ["Java", "Swing", "Cryptography", "OOP"],
      github: "#",
    },
    {
      image: "/images/portfolio-preview.png",
      title: "Portfolio Website",
      description:
        "My personal portfolio built with React, Tailwind, and Framer Motion. Smooth animations and responsive UI.",
      tech: ["React", "TailwindCSS", "Framer Motion"],
      github: "#",
    },
  ];

  return (
    <section className="w-full min-h-screen px-6 sm:px-10 lg:px-24 py-20 bg-primary_bg text-main_text font-poppins">

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>

      {/* RESPONSIVE GRID */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-2xl overflow-hidden border border-white/10 bg-section_bg/40 backdrop-blur-xl shadow-xl"
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-muted_text mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-accent_text/20 text-accent_text rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 text-accent_text hover:opacity-70"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
