// src/components/LiveBackground.jsx
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function LiveBackground() {
  const canvasRef = useRef(null);
  const controls = useAnimation();

  // Gradient animation
  useEffect(() => {
    const animateGradient = async () => {
      while (true) {
        // Left → Right
        await controls.start({
          backgroundPosition: ["0% 0%", "100% 0%"],
          transition: { duration: 20, ease: "linear" }
        });
        // Right → Left
        await controls.start({
          backgroundPosition: ["100% 0%", "0% 0%"],
          transition: { duration: 20, ease: "linear" }
        });
      }
    };
    animateGradient();
  }, [controls]);

  // Canvas stars animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const starsCount = 120;
    const stars = Array.from({ length: starsCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3
    }));

    const connectDistance = 120;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach(star => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#90e0ef";
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectDistance) {
            ctx.strokeStyle = `rgba(144, 224, 239, ${1 - dist / connectDistance})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Gradient background */}
      <motion.div
        animate={controls}
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #0A0A1F, #14142F, #1F1F3D)",
          backgroundSize: "200% 200%",
          filter: "brightness(1.05) saturate(1.1)"
        }}
      />
      {/* Stars canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none"
      />
    </>
  );
}
