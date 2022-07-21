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
      backgroundImage: {
        "hero-pattern-1": "url('../public/trattoria-assets/image1.jpg')",
        "hero-pattern-2": "url('../public/trattoria-assets/image2.jpg')",
        "hero-pattern-3": "url('../public/trattoria-assets/image4.jpg')",
      },
      backgroundPosition: {
        "center-top-y": "center top 30%",
      },
      scale: {
        400: "4.0",
      },
      width: {
        "50vw": "50vw",
        "75vw": "75vw",
      },
      height: {
        "30rem": "30rem",
      },
      spacing: {
        "50%": "50%",
      },
      animation: {
        slide: "slide 10s  infinite",
      },
      keyframes: {
        slide: {
          "0%": {
            backgroundImage: "url('../public/trattoria-assets/image1.jpg')",
          },
          "33%": {
            backgroundImage: "url('../public/trattoria-assets/image2.jpg')",
          },
          "67%": {
            backgroundImage: "url('../public/trattoria-assets/image3.jpg')",
          },
          "67%": {
            backgroundImage: "url('../public/trattoria-assets/image3.jpg')",
          },
        },
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
