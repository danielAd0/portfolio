// src/pages/ProjectsPage.jsx
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function ProjectsPage() {
  const projects = [
    {
      image: "/images/gymmembership-app.png",
      title: "Gym Membership Registration App",
      description: "Desktop Java application for managing gym memberships with validation, reporting, and SQLite database support.",
      longDescription: "A comprehensive desktop application built with Java Swing that manages gym memberships, member data, and billing. Features include data validation, report generation, and secure SQLite database integration.",
      tech: ["Java", "Swing", "SQLite", "OOP", "GUI Design"],
      github: "https://github.com/danielAd0/GymMembershipFrameApp",
      live: null,
      featured: true
    },
    {
      image: "/images/encryption-app.png",
      title: "Secure File Encryption App",
      description: "Encrypt and decrypt files with a secure Caesar Cipher system featuring clean UI and file browsing.",
      longDescription: "A desktop application that implements Caesar Cipher encryption/decryption for files. Includes a user-friendly interface with file browsing, encryption settings, and batch processing capabilities.",
      tech: ["Java", "Swing", "Cryptography", "File I/O", "OOP"],
      github: "#",
      live: null,
      featured: true
    },
    {
      image: "/images/portfolio-preview.png",
      title: "Portfolio Website",
      description: "Personal portfolio built with React, Tailwind, and Framer Motion featuring smooth animations and responsive UI.",
      longDescription: "A modern, responsive portfolio website showcasing my projects and skills. Built with React, Tailwind CSS, and Framer Motion for smooth animations and transitions. Features dark mode, interactive components, and optimized performance.",
      tech: ["React", "TailwindCSS", "Framer Motion", "JavaScript", "Responsive Design"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "E-commerce Dashboard",
      description: "Admin dashboard for e-commerce platform with analytics, order management, and inventory tracking.",
      longDescription: "A comprehensive admin dashboard for managing e-commerce operations. Features include sales analytics, order processing, inventory management, and customer data visualization.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      github: "#",
      live: null,
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Task Management System",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      longDescription: "A full-stack task management application that supports team collaboration, real-time updates, task assignment, progress tracking, and notifications.",
      tech: ["React", "Firebase", "TailwindCSS", "Real-time", "Authentication"],
      github: "#",
      live: null,
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Weather Forecast App",
      description: "Weather application with 7-day forecasts, location-based data, and interactive weather maps.",
      longDescription: "A responsive weather application that provides detailed forecasts, location-based weather data, and interactive maps. Includes temperature charts, precipitation forecasts, and severe weather alerts.",
      tech: ["JavaScript", "API Integration", "CSS3", "HTML5", "Chart.js"],
      github: "#",
      live: null,
      featured: false
    }
  ];

  return (
    <section className="w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-20 relative">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/20 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-1 mb-4">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="body-large max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills in software development, 
            UI/UX design, and problem-solving. Each project represents a unique challenge 
            and learning experience.
          </p>
        </motion.div>

        {/* Featured Projects Section */}
        <div className="mb-20">
          <h2 className="heading-2 mb-8 text-center">Featured Projects</h2>
          <div className="grid gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
                  {/* Project Image */}
                  <div className="relative rounded-xl overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/phone-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <FaCode className="text-blue-400 text-xl" />
                        <span className="text-sm font-medium text-blue-400">Featured Project</span>
                      </div>
                      
                      <h3 className="heading-3 mb-4">{project.title}</h3>
                      
                      <p className="body-base mb-6">
                        {project.longDescription}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary flex items-center gap-2"
                        >
                          <FaGithub /> Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary flex items-center gap-2"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h2 className="heading-2 mb-8 text-center">All Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card rounded-xl overflow-hidden group"
                whileHover={{ y: -8 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/phone-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Fixed: Removed line-clamp-3 and added custom CSS for 3-line truncation */}
                  <p className="body-base mb-4 overflow-hidden" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    lineHeight: '1.5',
                    maxHeight: '4.5em'
                  }}>
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-white/10 text-slate-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-white/5 text-slate-400 rounded">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Links */}
                  <div className="flex justify-between items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <FaGithub /> View Code
                    </a>
                    
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                      >
                        Live Demo <FaExternalLinkAlt className="text-xs" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h3 className="heading-3 mb-4">Want to See More?</h3>
            <p className="body-base mb-6">
              Check out my GitHub profile for more projects, contributions, and code samples.
            </p>
            <a
              href="https://github.com/danielAd0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaGithub /> Visit My GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}