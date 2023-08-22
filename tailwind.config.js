/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'cloud':'#f2f6f9',
        'cloud-100':'#f3f7fa',
        'dark-sky-100': '#bcc4c4',
        'dark-sky-200': '#bcbcc4',
        'dark-sky-300': '#97a1a9',
        'dark-sky-400': '#848c94',
        'dark-sky-600': '#535d69',
        'sky-200': '#c4d3e2',
        'sky-400': '#97dcf7',
        'sky-600': '#88ace5',
        'sky-700': '#7ba2d1'
      }
    },
  },
  plugins: [],
}

