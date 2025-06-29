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
        charcoal: {
          100: "#A6A6A6",
          300: "#6B6B6B",
          500: "#2C2C2C",
          700: "#1F1F1F",
          900: "#121212",
        },
        gold: {
          100: "#FFF9D9",
          300: "#F5DC7A",
          500: "#D4AF37",
          700: "#B08924",
          900: "#6E5715",
        },
        beige: {
          100: "#FDF9F3",
          300: "#F1E7D6",
          500: "#E8D9C3",
          700: "#B8A890",
          900: "#7D715D",
        },
        rose: {
          100: "#FFF3F5",
          300: "#FAD8E0",
          500: "#F5CED8",
          700: "#C49EA8",
          900: "#895C6A",
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
