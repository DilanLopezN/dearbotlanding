import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e6fff0",
          100: "#b3ffd6",
          200: "#80ffbb",
          300: "#4dffa1",
          400: "#1aff86",
          500: "#00e66d",
          600: "#00b354",
          700: "#00803c",
          800: "#004d24",
          900: "#001a0c",
        },
        dark: {
          50: "#f2f2f2",
          100: "#d9d9d9",
          200: "#bfbfbf",
          300: "#a6a6a6",
          400: "#8c8c8c",
          500: "#737373",
          600: "#595959",
          700: "#404040",
          800: "#1a1a1a",
          900: "#0d0d0d",
          950: "#050505",
        },
      },
      fontFamily: {
        display: ['"Clash Display"', "sans-serif"],
        body: ['"General Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
