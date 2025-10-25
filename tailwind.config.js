/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        light: {
          bg: '#f9fafb',
          surface: '#ffffff',
          text: '#111827',
          cta: '#2563eb',
        },
        dark: {
          bg: '#111827',
          surface: '#1f2937',
          text: '#f3f4f6',
          cta: '#60a5fa',
        }
      }
    },
  },
  darkMode: "class",
  plugins: [],
}
