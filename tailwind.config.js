/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1440px',
      },
      colors: {
        'borderColor': '#FFD687',
        'headerBg':"#FAE3B6"
      },
      fontFamily:{
        'pop':"Poppins",
        'frank':"Frank Ruhl Libre",
        'pod':"Podkova"
      }
    },
  },
  plugins: [],
}

