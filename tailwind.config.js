/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0px 4px 6px rgba(255, 255, 255, 0.5)',
        'custom-dark': '4px 4px 20px rgba(0, 0, 0, 0.5)',
        'custom-glow': '0px 0px 12px rgba(0,0,0,0.9)',
      },
      fontFamily: {
        'times': ['Times New Roman', 'serif'],
        'century': ['"Century Schoolbook Roman"', 'serif'],
      },
      zIndex: {
        '60': '60',
        '70': '70',
      },
    },
  },
  plugins: [],
}

