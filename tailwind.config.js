/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F8F7F4",
        ink: "#0A0A0A",
        accent: "#1843FF",
      },
      fontFamily: {
        display: ['var(--font-bricolage)', 'sans-serif'],
        sans: ['var(--font-schibsted)', 'sans-serif'],
        serif: ['var(--font-instrument)', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [],
};
