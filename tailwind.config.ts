// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mikePurple: '#9d3182', //
        mikeGreen: '#69a63a',  //
        mikeYellow: '#f9d423', //
        mikeDark: '#2d2d2d',   // Text color
      },
    },
  },
  plugins: [],
};
export default config;