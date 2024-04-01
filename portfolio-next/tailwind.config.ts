import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
export default config;
