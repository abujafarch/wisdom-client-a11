/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'wisdom' : ["Platypi", 'serif'],
      'inter' : ["Inter", 'sans-serif']
    },
    extend: {
      backgroundImage:{
        'banner-color' : "url('https://i.ibb.co/9vFypp4/banner-img.png')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

