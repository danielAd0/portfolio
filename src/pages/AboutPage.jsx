// src/pages/AboutPage.jsx
import { motion } from "framer-motion";
import {
  FaJava,
  FaDatabase,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaNodeJs,
  FaDownload,
  FaAward,
  FaCheckCircle,
  FaPython,
  FaLaptopCode,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiSqlite } from "react-icons/si";

export default function AboutPage() {
  const skills = [
    { name: "Java", icon: <FaJava className="text-3xl" />, level: "Advanced" },
    { name: "Swing / JavaFX", icon: <FaLaptopCode className="text-3xl" />, level: "Advanced" },
    { name: "SQLite / SQL", icon: <SiSqlite className="text-3xl" />, level: "Intermediate" },
    { name: "Python", icon: <FaPython className="text-3xl" />, level: "Intermediate" },
    { name: "React", icon: <FaReact className="text-3xl" />, level: "Advanced" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-3xl" />, level: "Advanced" },
    { name: "JavaScript (ES6+)", icon: <FaJsSquare className="text-3xl" />, level: "Advanced" },
    { name: "Node.js / Express", icon: <SiExpress className="text-3xl" />, level: "Intermediate" },
    { name: "Git / Version Control", icon: <FaGitAlt className="text-3xl" />, level: "Intermediate" },
    { name: "HTML5", icon: <FaHtml5 className="text-3xl" />, level: "Advanced" },
    { name: "CSS3", icon: <FaCss3Alt className="text-3xl" />, level: "Advanced" },
  ];

  const experiences = [
    {
      year: "2024 – Present",
      title: "Java Desktop App Developer",
      desc: "Built professional-grade Java Swing applications including a Gym Registration System and a Secure File Encryption Tool.",
      tags: ["Java", "Swing", "SQLite", "OOP"]
    },
    {
      year: "2023 – 2024",
      title: "Front-end Web Developer",
      desc: "Developed responsive React projects with animations, modular UI architecture, and accessibility-first design.",
      tags: ["React", "Tailwind", "Framer Motion", "Responsive Design"]
    },
    {
      year: "2022 – 2023",
      title: "Full-Stack Developer (Student Projects)",
      desc: "Created inventory management systems with React, Node.js, and SQLite, focusing on scalable structure and best practices.",
      tags: ["Full-Stack", "React", "Node.js", "Database Design"]
    },
  ];

  const values = [
    "Precision & attention to detail",
    "Clean, scalable code",
    "User-centered design",
    "Continuous learning & improvement",
    "Security-focused development",
    "Ownership and accountability",
  ];

  const certifications = [
    "Advanced Java Programming (2024)",
    "Database Systems & SQL Excellence Award",
    "Responsive Web Design Certification",
    "Software Security Fundamentals",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <section className="relative w-full min-h-screen py-16 px-4 sm:px-6 md:px-8 transition-colors">
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-1 mb-4">
            About <span className="text-gradient">Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 glass-card p-8 rounded-2xl"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.p 
            variants={fadeUp}
            className="body-large mb-6 leading-relaxed"
          >
            I am <span className="font-semibold text-blue-400">Daniel</span>, a dedicated software developer with strong experience in Java desktop applications and modern web development.
          </motion.p>

          <motion.p 
            variants={fadeUp}
            className="body-large mb-6 leading-relaxed"
          >
            My work blends strong OOP fundamentals, database design, and modern UI engineering, creating applications that are both functional and beautiful.
          </motion.p>

          <motion.p 
            variants={fadeUp}
            className="body-large leading-relaxed"
          >
            I believe in continuous learning and I'm currently broadening my expertise in full-stack development, cloud computing, and cybersecurity.
          </motion.p>
        </motion.div>

        {/* Resume Download Card */}
        <motion.div
          variants={fadeUp}
          className="max-w-md mx-auto mb-20 p-8 backdrop-blur-sm bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl shadow-xl text-center"
        >
          <h3 className="text-xl font-semibold mb-4 text-white">
            Download My Resume
          </h3>
          <a
            href="/Daniel_Resume.pdf"
            download
            className="btn-primary inline-flex items-center gap-2"
          >
            <FaDownload /> Download CV
          </a>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 mb-12 text-center">
            Technical <span className="text-gradient">Skills</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group flex flex-col items-center p-6 glass-card rounded-xl border border-white/20 hover:border-blue-400/30 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="mb-4 text-blue-400 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {skill.name}
                </h3>
                <span className="text-sm text-slate-400">{skill.level}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 mb-12 text-center">
            Experience <span className="text-gradient">Timeline</span>
          </h2>

          <div className="relative max-w-3xl mx-auto">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative pl-12 pb-12 ${i !== experiences.length - 1 ? 'border-l-2 border-blue-500/20' : ''}`}
              >
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                <div className="glass-card p-6 rounded-xl ml-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-400 rounded-full mb-3">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-slate-300 mb-4">
                    {exp.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-white/10 text-slate-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values & Principles */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 mb-12 text-center">
            Values & <span className="text-gradient">Principles</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((val, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start gap-4 glass-card p-5 rounded-xl border border-white/20 hover:border-blue-400/30 transition-all duration-300"
              >
                <FaCheckCircle className="text-blue-400 text-xl mt-1 flex-shrink-0" />
                <span className="text-white">{val}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 mb-12 text-center">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-4 glass-card p-5 rounded-xl border border-white/20 hover:border-blue-400/30 transition-all duration-300"
              >
                <FaAward className="text-yellow-400 text-2xl flex-shrink-0" />
                <span className="text-white">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h3 className="heading-3 mb-4">Let's Build Something Amazing Together</h3>
            <p className="body-base mb-6">
              I'm always open to discussing new opportunities, collaborations, or just chatting about technology.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}