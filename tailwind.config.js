/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#dff2fd",
          200: "#c0e4fc",
          300: "#9fcff7",
          400: "#84baef",
          500: "#5d9be5",
        },
        neutral: {
          100: "#ebebeb",
          200: "#c2c2c2",
          300: "#767676",
          400: "#494949",
          500: "#1b1b1b",
        },

        success: "#259f46",
        warning: "#f5a623",
        error: "#e25c5c",
        info: "#2685ca",

        heading: {
          dark: "#2c2c2c",
          light: "#ffffff",
        },

        text: {
          dark: "#888888",
          light: "#c0c0c0",
        },
      },
      boxShadow: {
        small: "0px 5px 20px 0px rgba(17, 17, 17, 0.04)",
        medium: "0px 5px 20px 0px rgba(17, 17, 17, 0.08)",
        large: "4px 16px 32px 0px rgba(17, 17, 17, 0.12)",
      },
    },
  },
  plugins: [],
};
