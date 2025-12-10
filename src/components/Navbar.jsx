import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-deep_twilight/70 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold text-light_cyan"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Daniel
        </motion.div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-light_cyan focus:outline-none"
          >
            <span className="block w-6 h-0.5 bg-light_cyan mb-1"></span>
            <span className="block w-6 h-0.5 bg-light_cyan mb-1"></span>
            <span className="block w-6 h-0.5 bg-light_cyan"></span>
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-light_cyan font-medium">
          <li>
            <Link to="/" className="hover:text-turquoise_surf transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-turquoise_surf transition-colors duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-turquoise_surf transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-turquoise_surf transition-colors duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-deep_twilight/80 backdrop-blur-md text-light_cyan space-y-4 px-6 py-4"
        >
          <li>
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </li>
        </motion.ul>
      )}
    </nav>
  );
}
