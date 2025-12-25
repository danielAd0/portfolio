import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="
      fixed top-0 left-0 w-full z-40
      bg-white/70 dark:bg-primary_bg/80
      backdrop-blur-xl shadow-md
    ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.div
          className="text-2xl font-bold text-black dark:text-main_text"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dan.dev
        </motion.div>

        {/* Desktop Menu */}
        <ul className="
          hidden md:flex items-center gap-8
          text-sm font-medium
          text-black dark:text-main_text
        ">
          <li><Link to="/" className="hover:text-accent_text">Home</Link></li>
          <li><Link to="/projects" className="hover:text-accent_text">Projects</Link></li>
          <li><Link to="/about" className="hover:text-accent_text">About</Link></li>
          <li><Link to="/contact" className="hover:text-accent_text">Contact</Link></li>

          {/* Glass Toggle */}
          <button
            onClick={toggleTheme}
            className="
              ml-2 p-2 rounded-full
              bg-black/10 dark:bg-white/10
              backdrop-blur-md
              hover:scale-105 transition
            "
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <FaSun className="text-accent_text" />
            ) : (
              <FaMoon className="text-primary_bg" />
            )}
          </button>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black dark:text-main_text"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="
            md:hidden px-6 py-6 space-y-4
            bg-white/80 dark:bg-section_bg/90
            backdrop-blur-xl
            text-black dark:text-main_text
          "
        >
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>

          {/* Mobile Toggle */}
          <button
            onClick={toggleTheme}
            className="
              mt-4 w-fit p-2 rounded-full
              bg-black/10 dark:bg-white/10
            "
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </motion.ul>
      )}
    </nav>
  );
}
