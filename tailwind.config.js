/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        darkRed: "#610404",
        medRed: "#780A0A",
        lightRed: "#911111",
        lightGrayOne: "#eeeeee",
        lightGrayTwo: "#dddddd",
        lightGrayThree: "#cccccc",
        grayOne: "#bbbbbb",
        grayTwo: "#aaaaaa",
        overLay: "rgba(0, 0, 0, 0.5)",
      },
      scale: {
        400: "4.0",
      },
      width: {
        "50vw": "50vw",
        "75vw": "75vw",
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
