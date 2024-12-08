import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "card-background": 'url("./assets/images/card-background.svg")',
        "hero-background": 'url("./assets/images/hero-background.svg")',
      },
      animation: {
        "spin-3d": "spin3D 1s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        spin3D: {
          "0%": { transform: "rotateX(0deg)" },
          "50%": { transform: "rotateX(1080deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(5rem)" },
          to: { opacity: "100%", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
