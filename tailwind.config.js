/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 enables `dark:` variants using <html class="dark">
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust for your setup
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#2a004a",
        darkHover: "#1a001f",
        darkTheme: "#11001f",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
    },
  },
  plugins: [],
};
