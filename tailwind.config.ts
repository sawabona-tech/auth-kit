import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#716C4A",
          dark: "#4A4731",
        },
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        display: ["Yeseva One", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
