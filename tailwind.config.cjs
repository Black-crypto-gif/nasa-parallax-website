/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {
      colors:{
        bkg:"#171819",
        muted: "#C9CBCF",
        accent: "#66CCC1",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem"
        }
      },
      fontFamily:{
        sans
      }
    },
  },
  plugins: [],
}
