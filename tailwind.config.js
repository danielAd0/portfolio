/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',     // Blue-500
          light: '#60a5fa',       // Blue-400
          dark: '#2563eb',        // Blue-600
        },
        accent: {
          DEFAULT: '#8b5cf6',     // Violet-500
          light: '#a78bfa',       // Violet-400
          dark: '#7c3aed',        // Violet-600
        },
        background: {
          light: '#f8fafc',       // Slate-50
          dark: '#0f172a',        // Slate-900
        },
        // Keep your existing colors for compatibility
        'spicy-paprika': '#dc2626',
        'floral-white': '#fffaf0',
      },
      animation: {
        'gradient-shift': 'gradientShift 20s ease infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      lineClamp: {
        3: '3',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}