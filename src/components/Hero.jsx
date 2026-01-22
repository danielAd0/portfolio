import { motion } from "framer-motion";
import { FaDownload, FaArrowRight, FaCode } from "react-icons/fa";

export default function Hero() {
  const name = "Daniel";
  const letters = name.split("");

  const paragraphs = [
    "Computer Science student passionate about creating innovative software solutions.",
    "Full-stack developer specializing in modern web technologies and clean UI design.",
    "Driven by curiosity and committed to building applications that make a difference.",
  ];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 22 },
    },
  };

  const paragraphVariant = {
    hidden: { opacity: 0, y: 12 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 + i * 0.18, duration: 0.6 },
    }),
  };

  return (
    <section className="w-full min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="
                w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]
                h-[320px] sm:h-[360px] md:h-[400px] lg:h-[440px]
                rounded-2xl overflow-hidden shadow-2xl
                ring-2 ring-white/30
                bg-white/10
                backdrop-blur-md
                transform lg:rotate-3 hover:rotate-0 transition-transform duration-500
                mx-auto lg:mx-0
              ">
                <img
                  src="/images/dan.jpg"
                  alt="Daniel"
                  className="w-full h-full object-cover"
                  draggable="false"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-3 -right-3 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg font-medium flex items-center gap-2 border border-white/20"
              >
                <FaCode className="text-sm" /> Developer
              </motion.div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className="inline-block"
            >
              <p className="text-lg text-blue-400 font-medium mb-2">Hello, I'm</p>
              <motion.h1
                className="heading-1 mb-4 inline-block"
                variants={container}
              >
                {letters.map((letter, idx) => (
                  <motion.span
                    key={idx}
                    variants={letterVariant}
                    className="inline-block hover:text-blue-400 transition-colors"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className="mt-6 max-w-2xl mx-auto lg:mx-0"
            >
              {paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  variants={paragraphVariant}
                  className="body-large mb-4"
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-6 mt-8 mb-8 justify-center lg:justify-start"
            >
              {[
                { value: "15+", label: "Projects" },
                { value: "3", label: "Years Experience" },
                { value: "10+", label: "Technologies" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="/resume.pdf"
                download
                className="btn-primary flex items-center gap-2"
              >
                <FaDownload /> Download Resume
              </a>

              <a
                href="/projects"
                className="btn-secondary flex items-center gap-2"
              >
                View Projects <FaArrowRight />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}