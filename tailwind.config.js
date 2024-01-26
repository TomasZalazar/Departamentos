module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        naranja: {
          100: "#ffead4",
          200: "#ffcfab",
          300: "#ffb282",
          400: "#ff9660",
          500: "#cc5533", // saturación por defecto
          600: "#993f1f",
          700: "#662b0d",
          800: "#331606",
          900: "#000000",
        },
        hueso: {
          100: "#ffffff",
          200: "#fcf5f3",
          300: "#f6ebe9",
          400: "#f1e0df",
          500: "#e5cacc",
          600: "#b8a49f",
          700: "#8a7870",
          800: "#5d4b41",
          900: "#2f2521",
        },
        marron: {
          100: "#ffdbcc",
          200: "#ffad85",
          300: "#ff7f3f",
          400: "#ff6b1a",
          500: "#6a2c1a", // saturación por defecto
          600: "#4e1e13",
          700: "#331106",
          800: "#1b0900",
          900: "#000000",
        },
        gris: {
          100: "#e6e6e6",
          200: "#b3b3b3",
          300: "#808080",
          400: "#666666",
          500: "#8c7e6c", // saturación por defecto
          600: "#595959",
          700: "#404040",
          800: "#262626",
          900: "#000000",
        },
        grisclaro: {
          100: "#ffffff",
          200: "#e6e6e6",
          300: "#b3b3b3",
          400: "#808080",
          500: "#c8c4b4", // saturación por defecto
          600: "#a6a299",
          700: "#7a7874",
          800: "#4d4b47",
          900: "#21211e",
        },
      },
    },
  },
  plugins: [],
};
