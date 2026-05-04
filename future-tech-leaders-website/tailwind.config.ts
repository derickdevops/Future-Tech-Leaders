import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        sky: "#0ea5e9",
        mint: "#14b8a6",
        sun: "#f59e0b",
        cloud: "#f8fafc"
      },
      fontFamily: {
        display: ["Poppins", "system-ui", "sans-serif"],
        body: ["Manrope", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.12)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgba(14,165,233,0.20), transparent 35%), radial-gradient(circle at bottom right, rgba(245,158,11,0.18), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
