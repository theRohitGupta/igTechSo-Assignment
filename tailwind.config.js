/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily : {
      dmSans: ['DM Sans', "sans-serif"],
    },
    colors : {
      white: "#fff",
      black: "#000",
      transparent : "#ffffff00",
      richblack : "#02073E",
      richblue : "#0F2137",
      richgrey : {
        800 : "#343D48",
        900 : "#5D646D"
      },
      richgreen : "#3FDBB1",
      richorange : "#EF9E48",
      richyellow : "#FFCE1F",
      lightorange : "#FCF2E8"
    },
    extend : {
      aspectRatio: {
        '2/3': '2 / 3',
      }
    }
  },
  plugins: [],
}