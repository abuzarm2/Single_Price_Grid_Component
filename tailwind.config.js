/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      spacing: {
        '128': '32rem', // Add a custom spacing utility with 128 units (32rem)
      },
      colors: {
        Cyan: 'hsl(179, 62%, 43%)',
        Bright_Yellow: 'hsl(71, 73%, 54%)',
        Light_Gray: 'hsl(204, 43%, 93%)',
        Grayish_Blue: 'hsl(218, 22%, 67%)',
      },
      screens:{
        'sm': '375px',
        'lg': '1440px',
      }
    },
  },
  plugins: [],
}

