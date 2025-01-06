/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#195E48", // Culoare de accent
        secondary: "#B6A39E", // Culoare secundară
        textWhite: "#effbf7"
      },
      
    },
  },
  plugins: [],
};
