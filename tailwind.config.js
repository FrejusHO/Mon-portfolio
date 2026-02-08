/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neonGreen: "var(--neon-green)",
        darkBg: "#000a12",
        cardBg: "#00121a",
      },
    },
  },
  plugins: [],
};