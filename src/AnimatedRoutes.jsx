import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

export default function AnimatedRoutes() {
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.6 }
  };

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<motion.div {...pageTransition}><HomePage /></motion.div>} />
        <Route path="/about" element={<motion.div {...pageTransition}><AboutPage /></motion.div>} />
        <Route path="/projects" element={<motion.div {...pageTransition}><ProjectsPage /></motion.div>} />
        <Route path="/contact" element={<motion.div {...pageTransition}><ContactPage /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}
