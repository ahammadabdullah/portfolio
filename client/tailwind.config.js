/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#011221",
        secondary: "#607B96",
        highlight: "#4D5BCE",
        accent: "#1E2D3D",
      },
    },
  },
  plugins: [],
};
