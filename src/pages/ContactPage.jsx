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
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  };

  return (
    <section className="relative w-full min-h-screen py-16 px-8 md:px-20 bg-carbon-black text-floral-white font-poppins flex flex-col items-center">
      
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-8 text-spicy-paprika"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact
      </motion.h1>

      <motion.p
        className="text-dust-grey-200 text-center max-w-2xl mb-12 text-base md:text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Feel free to reach out through any of the platforms below. I’m always open to discussing new ideas, collaborations, or just connecting!
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-8 md:gap-12 justify-center text-4xl md:text-5xl"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {contacts.map((contact, i) => (
          <motion.a
            key={contact.label}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-dust-grey-400 hover:text-spicy-paprika transition-colors duration-300"
            variants={fadeUp}
            custom={i}
          >
            {contact.icon}
            <span className="text-sm mt-1">{contact.label}</span>
          </motion.a>
        ))}
      </motion.div>

    </section>
  );
}
