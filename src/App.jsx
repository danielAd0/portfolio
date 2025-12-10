import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LiveBackground from "./components/LiveBackground";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Live constellation background */}
        <LiveBackground />

        {/* Navbar with higher z-index and slight transparency */}
        <div className="relative z-20">
          <Navbar className="bg-deep_twilight/80 backdrop-blur-md" />
        </div>

        {/* Main content */}
        <main className="relative z-10 pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer with same treatment */}
        <div className="relative z-20">
          <Footer className="bg-deep_twilight/80 backdrop-blur-md" />
        </div>
      </div>
    </BrowserRouter>
  );
}
