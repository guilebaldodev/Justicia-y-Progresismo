/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: '#1F3044',
        customBronw:"#B69D73",
        customBlu:"#173860",
        customGrey:"#F1F4F6"

      },

      screens: {
        'xs': { 'max': '400px' },        // Pantallas menores a 400px
        'sm': { 'max': '640px' },        // Pantallas menores a 640px
        'custom-sm': { 'max': '540px' },        // Pantallas menores a 640px
        'md': { 'max': '768px' },        // Pantallas menores a 768px
        'custom-lg': { 'max': '950px' }, // Pantallas menores a 950px
        'lg': { 'max': '1024px' },       // Pantallas menores a 1024px
      },
      
    },
  },
  plugins: [],
};
