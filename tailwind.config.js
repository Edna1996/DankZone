/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kenya': '#EFD9CE',
        'rift': '#DEC0F1',
        'meru': '#B79CED',
        'purp': '#957FEF',
        'midnight': '#7161EF',
      },
  
    },
  },
  plugins: [],
}

