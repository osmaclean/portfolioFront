export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'max': '585px' },
      'md': { 'max': '768px' },
      'mdOne': { 'max': '1335px' },
      'md2nd': { 'max': '1275px' },
      'md-3': { 'max': '1190px' },
    },
    fontFamily: {
      'default': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'header': 'rgba(255, 255, 255, 0.80)',
        'content': '#2e2e2e',
      },
      boxShadow: {
        'headerShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.10)',
        'button': [
          '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          '8px 16px 20px 0px rgba(0, 0, 0, 0.50) inset']
      },
      backgroundImage: {
        'react': "url('src/assets/imgs/light/react.svg')",
        'js': "url('src/assets/imgs/light/js.svg')",
        'html': "url('src/assets/imgs/light/html-5.svg')",
        'css': "url('src/assets/imgs/light/css-3.svg')",
        'sass': "url('src/assets/imgs/light/sass.svg')",
        'bootstrap': "url('src/assets/imgs/light/bootstrap.svg')",
        'figma': "url('src/assets/imgs/light/figma.svg')",
        'tailwind': "url('src/assets/imgs/light/tailwind-logo.svg')",
        'eagle': "url('src/assets/imgs/light/eagleBlack.png')",
        'scroll': "url('src/assets/imgs/light/scroll.svg')",
      },
    },
  },
  plugins: [],
}

