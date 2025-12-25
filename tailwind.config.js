/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary_bg: "#0A0A1F",
        section_bg: "#14142F",
        overlay_bg: "#1F1F3D",
        main_text: "#E9F9FC",
        muted_text: "#B0CFEF",
        accent_text: "#FFC300",
        button_primary: "#00B4D8",
        button_hover: "#12D8FF",
        border_light: "#7CD1FF",
      },
      keyframes: {
        blink: {
          "0%, 50%, 100%": { opacity: 1 },
          "25%, 75%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
