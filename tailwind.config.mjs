/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0B2545",
        secondary: "#13315C",
        accent: "#134074",
        neutral: "#EEF4ED",
        hoverText: "#8DA9C4",
      },
    },
  },
  plugins: [],
};

export default config;
