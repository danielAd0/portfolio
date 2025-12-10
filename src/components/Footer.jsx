import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full z-30 bg-deep_twilight/70 backdrop-blur-md py-6 mt-12 shadow-inner">
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center text-light_cyan"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <p>
          © {new Date().getFullYear()} Daniel. All rights reserved.
        </p>
        <p className="text-sm text-turquoise_surf mt-1">
          Inspired by the cosmos, building modern web experiences.
        </p>
      </motion.div>
    </footer>
  );
}
