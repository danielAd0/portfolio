// src/components/Navbar.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-primary_bg/80 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold text-main_text"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Daniel
        </motion.div>

        {/* Hamburger - Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1 focus:outline-none"
        >
          <span className="w-6 h-0.5 bg-main_text"></span>
          <span className="w-6 h-0.5 bg-main_text"></span>
          <span className="w-6 h-0.5 bg-main_text"></span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-main_text text-sm font-medium">
          <li><Link to="/" className="hover:text-accent_text">Home</Link></li>
          <li><Link to="/projects" className="hover:text-accent_text">Projects</Link></li>
          <li><Link to="/about" className="hover:text-accent_text">About</Link></li>
          <li><Link to="/contact" className="hover:text-accent_text">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-section_bg/90 backdrop-blur-xl px-6 py-6 space-y-4 text-main_text text-lg"
        >
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </motion.ul>
      )}
    </nav>
  );
}
