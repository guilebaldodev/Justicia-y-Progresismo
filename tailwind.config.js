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
        'xs': '400px',  
        'sm': '640px',      
        'md': '768px',
        'custom-lg': '950px',  
        'lg': '1024px',
      },
      
    },
  },
  plugins: [],
};
