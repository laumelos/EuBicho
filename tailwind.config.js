/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        smallest: { raw: "(max-width: 380px) and (max-height: 680px)" },
        portrait: { raw: "(orientation: portrait)" },
        landscape: { raw: "(orientation: landscape)" },
      },
      inset: {
        "top-half": "-25vw",
        "lg-top-half": "-12.5vw",
      },
      margin: {
        "mb-half": "30vw",
        "mb-quarter": "15vw",
      },
    },
  },
  plugins: [],
};
