/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      maxWidth: {
        1800: "1800px",
      },
    },
  },
  plugins: [],
};
