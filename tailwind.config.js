/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            royalblue: {
              400: '#4169E1',
              500: '#3A5FCD',
              600: '#2E4FAC',
              700: '#1E3F8B',
            }
          }
      },
    },
    plugins: [],
  }