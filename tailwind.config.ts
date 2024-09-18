import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      deepBlue: "#003366",
      richGold: "#ffc300",
      warmSand: "#d2b48c",
      white: "#ffffff",
    },
  },
  plugins: [],
};
export default config;
