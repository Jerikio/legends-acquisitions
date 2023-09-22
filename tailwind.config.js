/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E1F6CE",
          200: "#C0EEA0",
          300: "#8ACE69",
          400: "#559D3D",
          500: "#1E5C11",
          600: "#124F0C",
          700: "#094208",
          800: "#053508",
          900: "#032C08",
        },
        success: {
          100: "#D2FAD0",
          200: "#A3F6A7",
          300: "#71E683",
          400: "#4BCD6C",
          500: "#1BAD4E",
          600: "#13944D",
          700: "#0D7C4A",
          800: "#086443",
          900: "#05533F",
        },
        info: {
          100: "#C9F3F9",
          200: "#95E3F4",
          300: "#5CBFDE",
          400: "#3394BE",
          500: "#045F93",
          600: "#02497E",
          700: "#023769",
          800: "#012755",
          900: "#001B46",
        },
        warning: {
          100: "#FDF5CB",
          200: "#FBE999",
          300: "#F4D565",
          400: "#E9C03F",
          500: "#DBA206",
          600: "#BC8604",
          700: "#9D6B03",
          800: "#7F5301",
          900: "#694101",
        },
        danger: {
          100: "#FCE5D0",
          200: "#FAC5A3",
          300: "#F29C73",
          400: "#E6744F",
          500: "#D63A1B",
          600: "#B82213",
          700: "#9A0F0D",
          800: "#7C0810",
          900: "#660512",
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-in-out",
        "slide-out": "slide-out 0.5s ease-in-out",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        header: ["Michroma", "sans-serif"],
      },
    },
  },
  plugins: [],
};
