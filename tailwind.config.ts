import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#060911",
        panel: "#0D1424",
        panel2: "#111B31",
        line: "#1D283D",
        fog: "#93A2B8",
        paper: "#E9EEF7",
        data: "#5B8DEF",
        insight: "#F2B84B",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-plex)", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(91, 141, 239, 0.35)",
        glowAmber: "0 0 60px -15px rgba(242, 184, 75, 0.25)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(233,238,247,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(233,238,247,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-14px,0)" },
        },
        pulseLine: {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        drift: "drift 6s ease-in-out infinite",
        pulseLine: "pulseLine 3.2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
