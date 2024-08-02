/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        smallPortrait: {
          raw: "((max-width: 360px) or (max-height: 720px)) and (orientation: portrait)",
        },
        smallLandscape: {
          raw: "(max-height: 780px) and (orientation: landscape)",
        },
        mdPortrait: { raw: "(min-height: 721px) and (orientation: portrait)" },
        lgPortrait: {
          raw: "((min-height: 1024px) and (max-height: 1100px)) and (orientation: portrait)",
        },
        mdLandscape: {
          raw: "(min-height: 781px) and (orientation: landscape)",
        },
      },
      inset: {
        "top-half": "-25vw",
        "lg-top-half": "-10vw",
        "b-unset": "unset",
      },
      margin: {
        "mb-half": "30vw",
        "mb-quarter": "12.5vw",
      },
    },
  },
  plugins: [],
};
