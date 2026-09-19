import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        char: "#0c0a08",
        ember: "#1a1512",
        gold: "#d4a017",
        goldlight: "#e8c565",
        brasa: "#b5471b",
        cream: "#f0e6d2",
      },
      fontFamily: {
        display: ["'Bebas neue'", "sans-serif"],
        body: ["'Montserrat'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
