/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      screens: {
        tall: {
          raw: `only screen and (max-height: 960px) and (max-width: 480px)`,
        },
        wide: {
          raw: `only screen and (max-height: 480px) and (max-width: 960px)`,
        },
        portrait: {
          raw: "(orientation: portrait)",
        },
        landscape: {
          raw: "(orientation: landscape)",
        },
      },
    },
    // colors: {
    //   OxfordBlue: "#0A192F",
    //   Icterine: "#FFFF82",
    //   Beige: "#F5F7DC",
    //   celadon: "#B5D99C",
    //   IndianRed: "#E65F5C",
    // },
  },
  plugins: [],
};
