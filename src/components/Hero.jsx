// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  const name = "Daniel";
  const letters = name.split("");

  const paragraphs = [
    "An inspiring software developer passionate about programming and web development.",
    "Experienced in building clean, modern UI designs and robust backend solutions.",
    "Continuously learning and exploring new technologies to craft high-quality applications."
  ];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 22 }
    }
  };

  const paragraphVariant = {
    hidden: { opacity: 0, y: 12 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 + i * 0.18, duration: 0.6 }
    })
  };

  return (
    <section className="w-full min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-12">
        
        {/* Mobile-first grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

          {/* Image Column */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div className="
              w-[250px] sm:w-[300px] md:w-[360px] lg:w-[420px]
              h-[320px] sm:h-[360px] md:h-[520px]
              rounded-2xl overflow-hidden shadow-2xl
              ring-1 ring-white/10 bg-white/5
            ">
              <img
                src="/src/images/dan.jpg"
                alt="Daniel"
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="md:col-span-7 text-center md:text-right text-white">
            
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight inline-block"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {letters.map((letter, idx) => (
                <motion.span key={idx} variants={letterVariant}>
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              className="mt-6 max-w-xl mx-auto md:ml-auto md:mr-0"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-3"
                  custom={i}
                  variants={paragraphVariant}
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>

            {/* Buttons */}
            <div className="mt-6 flex justify-center md:justify-end gap-4 flex-wrap">
              <a
                href="/resume.pdf"
                className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-md text-sm font-medium hover:bg-white/20 transition"
              >
                Download Resume
              </a>

              <a
                href="/projects"
                className="px-4 py-2 bg-spicy-paprika text-white rounded-md text-sm font-medium hover:brightness-95 transition"
              >
                Projects
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
