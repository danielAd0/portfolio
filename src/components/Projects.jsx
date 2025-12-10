import { useState } from "react";
import useFadeIn from "../hooks/useFadeIn";

export default function Projects() {
  const ref = useFadeIn();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  const projects = [
    {
      title: "Childcare Registration App",
      desc: "Desktop Java application for managing childcare registrations with SQLite database support.",
      tech: "Java, Swing, SQLite"
    },
    {
      title: "Secure File Encryption App",
      desc: "Desktop app to encrypt and decrypt files using Caesar Cipher with a clean GUI.",
      tech: "Java, Swing"
    }
  ];

  return (
    <section ref={ref} className="py-block px-sectionLg max-w-5xl mx-auto opacity-0 translate-y-10 transition-all duration-800">
      <h2 className="text-3xl font-bold mb-block text-spicy-paprika dark:text-floral-white">Projects</h2>
      <div className="grid gap-block md:grid-cols-2">
        {projects.map((p, i) => (
          <div
            key={i}
            className="relative group bg-floral-white dark:bg-carbon-black p-section rounded-lg shadow-lg overflow-hidden transition-transform duration-500 hover:shadow-2xl"
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={resetTilt}
            style={{ transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(1.05)` }}
          >
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-spicy-paprika rounded-lg pointer-events-none transition-all duration-300"></div>
            <div className="absolute inset-0 bg-spicy-paprika/10 dark:bg-floral-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>

            <h3 className="text-xl font-semibold mb-section text-spicy-paprika dark:text-floral-white relative z-10">{p.title}</h3>
            <p className="text-dust-grey-800 dark:text-dust-grey-200 mb-section relative z-10">{p.desc}</p>
            <p className="text-dust-grey-600 dark:text-dust-grey-400 mb-section relative z-10">Tech: {p.tech}</p>
            <a href="#" className="text-spicy-paprika dark:text-floral-white hover:underline relative z-10">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}
