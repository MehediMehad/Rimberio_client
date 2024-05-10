/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-background': "url('./src/assets/bag2.jpg')",
      },
        fontFamily:{
        lato:"'Lato', sans-serif"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "synthwave"],
  },

}

