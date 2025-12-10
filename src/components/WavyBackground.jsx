// src/components/WavyBackground.jsx
import { motion } from "framer-motion";

export default function WavyBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* BACK LAYER — deep + warm (spicy-paprika 700 toned) */}
      <motion.div
        className="absolute w-[250%] h-full bottom-0 opacity-[0.35]"
        animate={{
          x: ["0%", "-60%", "0%"],
          y: ["0px", "-12px", "0px"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#8c310d"  // spicy-paprika-700
            d="
              M0,256 
              C260,220 520,300 900,270 
              C1180,240 1400,300 1440,280 
              V320H0Z
            "
          />
        </svg>
      </motion.div>

      {/* MID LAYER — orange midtone (spicy-paprika 400) */}
      <motion.div
        className="absolute w-[250%] h-full bottom-0 opacity-[0.45]"
        animate={{
          x: ["0%", "-75%", "0%"],
          y: ["0px", "-18px", "0px"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#ee7444"  // spicy-paprika-400
            d="
              M0,224 
              C260,180 600,260 900,230 
              C1160,200 1400,260 1440,240
              V320H0Z
            "
          />
        </svg>
      </motion.div>

      {/* FRONT LAYER — highlight wave (floral-white 300) */}
      <motion.div
        className="absolute w-[250%] h-full bottom-0 opacity-[0.55]"
        animate={{
          x: ["0%", "-90%", "0%"],
          y: ["0px", "-24px", "0px"],
          rotate: [0, 0.4, -0.4, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffdb66"  // floral-white-300
            d="
              M0,200 
              C180,160 580,240 850,210 
              C1120,180 1360,240 1440,220 
              V320H0Z
            "
          />
        </svg>
      </motion.div>
    </div>
  );
}
