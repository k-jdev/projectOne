/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      Ubuntu: ["Ubuntu"],
    },

    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        wiggle: {
          "0%, 100%": { transform: "translate-y-6" },
          "50%": { transform: "-translate-y-6" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in",
        wiggle: "wiggle 2s infinite",
      },
    },
  },
  plugins: [],
};
