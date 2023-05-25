/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'header-bg-color': '#DCDCDC',
        'body-bg-color': '#FAFAFA',
        'image-bg-color': '#CCCCCC',
        'text-primary-color': '#343434',
        'text-secondary-color': '#000000',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        NotoSansJP: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
