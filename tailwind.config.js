/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0146E9",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    backgroundImage: {
      leftHero: "url('/images/leftHeroBg.png')",
      bmw: "url('/images/bmw.png')",
      bmwSm: "url('/images/bmwSm.png')",
    },
  },
  plugins: [],
};
