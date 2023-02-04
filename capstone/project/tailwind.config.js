/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        "tc-nav" : "#e7eaf2",
        "hover-nav":"#7c96a7",
        "nav-bg" : "#c2d1de" , 
        "primary" : "#164360" ,
        "primary-It" : "#ced7dc",
        "opacity" :  "rgba(0, 0, 0, 0.5)",
        "bg":"[#F3F4F6]"
      }
    },
  },
  plugins: [],
}
