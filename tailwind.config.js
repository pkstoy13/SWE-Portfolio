/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-russian": {
          DEFAULT: "#eae7ff",
          50: "#eae7ff",
          100: "#dad4ff",
          200: "#bdb1ff",
          300: "#9b83ff",
          400: "#8652ff",
          500: "#7d2bff",
          600: "#7e08ff",
          700: "#7b00ff",
          800: "#6403d0",
          900: "#510da2",
          950: "#0c0217",
        },
      },
    },
  },
  plugins: [],
};
