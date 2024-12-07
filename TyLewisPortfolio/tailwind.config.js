/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "card-background": 'url("./assets/images/card-background.svg")',
        "hero-background": 'url("./assets/images/hero-background.svg")',
      },
    },
  },
  plugins: [],
};
