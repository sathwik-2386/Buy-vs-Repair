import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17201c",
        forest: "#173f34",
        mint: "#e8f3ed",
        paper: "#f8f7f2",
        coral: "#e86c45",
      },
      boxShadow: {
        card: "0 20px 60px rgba(23, 63, 52, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
