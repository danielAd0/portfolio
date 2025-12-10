// src/pages/ContactPage.jsx
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  const contacts = [
    { icon: <FaEnvelope />, label: "Email", link: "mailto:dan@example.com" },
    { icon: <FaLinkedin />, label: "LinkedIn", link: "https://linkedin.com/in/yourusername" },
    { icon: <FaGithub />, label: "GitHub", link: "https://github.com/yourusername" },
    { icon: <FaInstagram />, label: "Instagram", link: "https://instagram.com/yourusername" },
    { icon: <FaTwitter />, label: "Twitter/X", link: "https://twitter.com/yourusername" }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    }),
  };

  return (
    <section className="w-full min-h-screen py-20 px-6 md:px-20 bg-primary_bg text-main_text text-center font-poppins">
      
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6 text-accent_text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact
      </motion.h1>

      <motion.p
        className="text-muted_text max-w-2xl mx-auto mb-12 text-base md:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Reach out anytime for collaborations, opportunities, or just to connect.
      </motion.p>

      {/* ICONS – MOBILE FIXED WITH GRID */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-10 text-4xl md:text-5xl justify-center">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.link}
            target="_blank"
            className="flex flex-col items-center text-muted_text hover:text-accent_text"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            {c.icon}
            <span className="text-xs md:text-sm mt-2">{c.label}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
