/** @type {import('tailwindcss').Config} */
import {
  Collapse,
  initTE,
} from "tw-elements";
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      fontFamily: {
        
        'libre': ['Libre Baskerville', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        
    },
    screens: {
      
      'fhd': '1920px',
      '4k':'3840px'
    },
  }
    
},
  plugins: [
    require('tailwindcss-animated')
  ],
}

