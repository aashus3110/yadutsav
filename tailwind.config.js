/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#4CAF50", // Green
        secondary: "#2196F3", // Blue
        background: "#F1F1f0", // Light Gray
        backgrounds: "#F5F5f8", // Light Gray
        text: "#333333", // Dark Gray
        accent: "#FFC107", // Yellow
        Charcoal: "#333333" /* Dark Gray or Charcoal */,
      },
    },
  },
  plugins: [],
};
