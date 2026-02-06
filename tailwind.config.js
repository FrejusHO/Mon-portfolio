/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: '#050505',
        neonGreen: '#00ff41', // Le vert "Matrix/Terminal"
        cardBg: '#111111',
      },
      animation: {
        'pulse-fast': 'pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}