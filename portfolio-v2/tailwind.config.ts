import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jetbrains-mono)", "monospace"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        // Terminal/Code Editor inspired color scheme
        primary: "#0d1117", // GitHub dark background
        secondary: "#161b22", // Slightly lighter dark
        tertiary: "#21262d", // Card/container background
        accent: "#58a6ff", // GitHub blue
        "accent-hover": "#1f6feb", // Darker blue on hover
        success: "#238636", // GitHub green
        warning: "#d29922", // GitHub yellow
        error: "#f85149", // GitHub red
        text: "#f0f6fc", // Light text
        "text-muted": "#8b949e", // Muted text (comments)
        "text-secondary": "#c9d1d9", // Secondary text
        border: "#30363d", // Subtle borders
        "code-bg": "#0d1117", // Code block background
        "terminal-green": "#7ee787", // Terminal success
        "terminal-yellow": "#f1e05a", // Terminal warning
        "terminal-red": "#ff7b72", // Terminal error
        "terminal-blue": "#79c0ff", // Terminal info
        gradient: {
          start: "#58a6ff",
          end: "#bc8cff",
        },
      },
      animation: {
        "terminal-blink": "terminalBlink 1s infinite",
      },
      keyframes: {
        terminalBlink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
