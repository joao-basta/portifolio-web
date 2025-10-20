/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          darkest: '#04011f',
          dark: '#0a0a2e',
          light: '#112240',
        },
        slate: {
          light: '#ccd6f6',
          DEFAULT: '#8892b0',
        },
        cyan: '#64ffda',
      },
    },
  },
  plugins: [],
}