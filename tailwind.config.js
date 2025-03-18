/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", 
    "./assets/js/**/*.js", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B", 
        secondary: "#64748B", 
        accent: "#FACC15", 
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};


