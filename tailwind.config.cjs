// @ts-check
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#000C24",
      },
      fontFamily: {
        primary: "Syne",
      },
      backgroundImage: {
        feature: 'url("/featureBanner.svg")',
      },
      fontSize: {
        "lg+": "22px",
      },
    },
  },
};
