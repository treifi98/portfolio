import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }, // Adjust this value to control the distance
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        rot: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'up-down': 'up-down 1.5s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'spin-once': 'spin 1s linear forwards',
        'rot': 'rot 20s linear infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#e0e0e0',
        secondary: '#00668C',
        accesnt: '#4b94bc',
      },
      screens: {
        xlap: "1400px",
        amer: "1600px",
        lap: "1200px",
        tab: "1000px",
      },
      fontFamily: {
        headings: ["mursgothic", "sans-serif"],
        body: ["Revolin", "sans-serif"],
        accent: ["Revolin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
