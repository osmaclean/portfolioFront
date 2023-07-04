export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'max': '585px' },
      'md': { 'max': '768px' },
    },
    fontFamily: {
      'default': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'header': 'rgba(255, 255, 255, 0.80)',
      },
      shadow: {
        'headerShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.10);',
      },
    },
  },
  plugins: [],
}

