// src/pages/HomePage.jsx
import React from "react";
import LiveBackground from "../components/LiveBackground";
import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full bg-deep_twilight">
      <LiveBackground /> {/* Only on home page */}

      <div className="relative z-10 h-full flex items-center justify-center">
        <Hero />
      </div>
    </div>
  );
}
