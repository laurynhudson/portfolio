/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        secondary: "#555555",
        accent: "#C658B5",       // Pink from template
        "accent-secondary": "#9747FF", // Purple from template
        muted: "#f9f7fa",        // Light pink/purple tint
        background: "#FFFFFF",
        "text-primary": "#1A1A1A",
        "text-secondary": "#555555"
      },
      fontFamily: {
        // Adri uses Freight Display Pro and Futura PT
        sans: ['var(--font-futura)', 'sans-serif'],
        serif: ['var(--font-freight)', 'serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}