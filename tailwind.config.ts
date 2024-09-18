import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      btn: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      nav: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)",
    },
    colors: {
      blue: { deep: "#0D1321" },
      green: {
        dark: "#1D4C4F",
        light: "#28867E",
      },
      richGold: "#ffc300",
      decor: {
        gray: {
          text: "#A0A0A0",
          light: "#D3DCDE",
        },
        sand: "#d2b48c",
      },
      white: "#ffffff",
    },
  },
  plugins: [],
};
export default config;
