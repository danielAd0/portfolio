// src/pages/ProjectsPage.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectsPage() {
  const projects = [
    {
      image: "./src/images/gymmembership-app.png",
      title: "Gym Membership Registration Frame App",
      description:
        "Desktop Java application for managing gym membership registrations with SQLite database support. Includes form validation, reporting, and intuitive UI for staff users.",
      tech: ["Java", "Swing", "SQLite", "OOP"],
      github: "https://github.com/danielAd0/GymMembershipFrameApp",
    },
    {
      image: "/images/encryption-app.png",
      title: "Secure File Encryption App",
      description:
        "Desktop application to encrypt and decrypt files using Caesar Cipher. Features include file browsing, secure key management, and a modern GUI interface.",
      tech: ["Java", "Swing", "Cryptography", "OOP"],
      github: "#",
    },
    {
      image: "/images/portfolio-preview.png",
      title: "Portfolio Website",
      description:
        "Personal portfolio to showcase projects, skills, and experience. Includes smooth animations, responsive design, and interactive UI components.",
      tech: ["React", "TailwindCSS", "Framer Motion", "Responsive Design"],
      github: "#",
    },
  ];

  return (
    <section className="relative w-full min-h-screen px-6 sm:px-12 lg:px-24 py-16 bg-carbon-black text-floral-white font-poppins">
      
      {/* Page Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>

      {/* Grid */}
      <div className="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="
              p-0 rounded-2xl border overflow-hidden
              backdrop-blur-xl bg-black/30
              border-white/10 shadow-lg transition-all
              cursor-pointer
            "
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            }}
            transition={{ type: 'spring', stiffness: 180, damping: 15 }}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-floral-white mb-3">
                {project.title}
              </h3>

              <p className="text-dust-grey-200 mb-4 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-spicy-paprika/20 text-spicy-paprika text-xs sm:text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-spicy-paprika hover:text-spicy-paprika-400 transition-colors"
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
