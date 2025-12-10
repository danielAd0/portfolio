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
} from "react-icons/fa";

export default function AboutPage() {
  const skills = [
    { name: "Java", level: 90, icon: <FaJava className="text-3xl" /> },
    { name: "Swing / JavaFX", level: 85, icon: <FaJava className="text-3xl" /> },
    { name: "SQLite / SQL", level: 80, icon: <FaDatabase className="text-3xl" /> },
    { name: "React", level: 88, icon: <FaReact className="text-3xl" /> },
    { name: "TailwindCSS", level: 92, icon: <FaCss3Alt className="text-3xl" /> },
    { name: "JavaScript (ES6+)", level: 78, icon: <FaJsSquare className="text-3xl" /> },
    { name: "Node.js / Express", level: 70, icon: <FaNodeJs className="text-3xl" /> },
    { name: "Git / Version Control", level: 85, icon: <FaGitAlt className="text-3xl" /> },
    { name: "HTML5", level: 95, icon: <FaHtml5 className="text-3xl" /> },
  ];

  const experiences = [
    {
      year: "2024 – Present",
      title: "Java Desktop App Developer",
      desc: "Built professional-grade Java Swing applications including a Gym Registration System and a Secure File Encryption Tool.",
    },
    {
      year: "2023 – 2024",
      title: "Front-end Web Developer",
      desc: "Developed responsive React projects with animations, modular UI architecture, and accessibility-first design.",
    },
    {
      year: "2022 – 2023",
      title: "Full-Stack Developer (Student Projects)",
      desc: "Created inventory management systems with React, Node.js, and SQLite, focusing on scalable structure and best practices.",
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
    <section className="relative w-full min-h-screen py-20 px-8 md:px-20 bg-carbon-black text-floral-white font-poppins">

      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About Me
      </motion.h1>

      {/* Intro Section */}
      <motion.div
        className="max-w-4xl mx-auto text-dust-grey-200 text-lg leading-relaxed space-y-6 mb-16"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >

        <motion.p variants={fadeUp}>
          I am <span className="font-semibold text-white">Daniel</span>, a dedicated software developer with strong experience in Java desktop applications and modern web development.
        </motion.p>

        <motion.p variants={fadeUp}>
          My work blends strong OOP fundamentals, database design, and modern UI engineering.
        </motion.p>

        <motion.p variants={fadeUp}>
          I believe in continuous learning and I'm currently broadening my expertise in full-stack development and cybersecurity.
        </motion.p>

      </motion.div>

      {/* Glass CV Card */}
      <motion.div
        variants={fadeUp}
        className="max-w-md mx-auto mb-20 p-6 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl text-center"
      >
        <h3 className="text-xl font-semibold mb-4">Download My Resume</h3>
        <a
          href="/Daniel_Resume.pdf"
          download
          className="px-6 py-3 bg-spicy-paprika text-white rounded-lg font-semibold shadow-lg flex justify-center items-center gap-2 hover:bg-spicy-paprika/90 transition"
        >
          <FaDownload /> Download CV
        </a>
      </motion.div>

{/* Skills Section — 3 Columns, Perfect Icon Alignment */}
<h2 className="text-2xl font-semibold text-spicy-paprika mb-10 text-center">
  Technical Skills
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">

  {skills.map((skill, i) => (
    <motion.div
      key={skill.name}
      variants={fadeUp}
      custom={i}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-start gap-4"
    >
      {/* Fixed icon width ensures perfect alignment across columns */}
      <div className="w-10 h-10 flex items-center justify-center">
        {skill.icon}
      </div>

      {/* Skill label */}
      <span className="text-white text-lg font-medium">
        {skill.name}
      </span>
    </motion.div>
  ))}

</div>

      {/* Timeline */}
      <h2 className="text-2xl font-semibold text-spicy-paprika mb-10 text-center">
        Experience Timeline
      </h2>

      <div className="relative max-w-3xl mx-auto border-l border-white/20 pl-8 mb-20">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="mb-12 relative"
            variants={fadeUp}
            custom={i}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute -left-4 top-1 w-3 h-3 rounded-full bg-spicy-paprika"></div>
            <p className="text-sm text-dust-grey-400">{exp.year}</p>
            <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
            <p className="text-dust-grey-300">{exp.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Values */}
      <h2 className="text-2xl font-semibold text-spicy-paprika mb-10 text-center">
        Values & Principles
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
        {values.map((val, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10"
          >
            <FaCheckCircle className="text-spicy-paprika text-xl" />
            <span>{val}</span>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <h2 className="text-2xl font-semibold text-spicy-paprika mb-10 text-center">
        Certifications & Achievements
      </h2>

      <div className="grid gap-6 max-w-3xl mx-auto">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10"
          >
            <FaAward className="text-yellow-400 text-2xl" />
            <span className="text-dust-grey-200">{cert}</span>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
