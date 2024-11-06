// tailwind.config.ts

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
        sans: ['var(--font-sora)', 'sans-serif'], // Define 'sans' como a fonte Sora
      },
      colors: {
        background: "var(--background)", // Define uma cor personalizada para o background
        foreground: "var(--foreground)", // Define uma cor personalizada para o foreground
      },
    },
  },
  plugins: [],
};

export default config;
