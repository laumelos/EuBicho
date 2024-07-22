/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(orientation: portrait)" },
        landscape: { raw: "(orientation: landscape)" },
      },
      inset: {
        'top-half': '-25%', 
      },
      margin: {
        'mb-half': '50%', 
      },
    },
  },
  plugins: [],
};
