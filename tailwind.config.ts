import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: "#4ADE80",
        purple: "#C084FC",
        yellow: "#FACC15",
        blue: "#60A5FA",
        "inglu-black": "#111827",
        "inglu-bg": "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-bebas)"],
        dm: ["var(--font-dm-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
