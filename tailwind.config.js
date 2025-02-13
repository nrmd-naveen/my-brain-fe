/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          poppins: ["Poppins", 'sans-serif']
        },
      colors: {
        mywhite: {
          bg: "#E7E7E7",
          border: "#C9C9C9"
        },
        myblack: {
          text: "#2D2D35",
          bg: "#F5F5F5",
          border: "#C9C9C9"
        },
      }
    },
  },
  plugins: [],
}

