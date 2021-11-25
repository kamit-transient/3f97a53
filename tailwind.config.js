module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['Ubuntu', 'sans-serif'],
        'heading': ['Alfa Slab One', 'serif']
      },
      colors: {
        secondary: {
          light: '#005be2',
          DEFAULT: '#005be2', //dig blue https://brandcolors.net/b/digg
          dark: '#005be2',
        },
        primary: {
          light: '#72c427',
          DEFAULT: '#72c427', //Social Bro Green https://brandcolors.net/b/socialbro
          dark: '#72c427',
        }
      }
    }
  },
  variants: {
    extend: {
      // divideWidth: ['responsive', 'even', 'odd', 'last'],
      padding: ['responsive', 'first', 'last'],
      margin: ['responsive', 'first', 'last'],
      display: ['responsive', 'even', 'odd'],
      backgroundPosition: ['hover'],
      backgroundImage: ['hover'],




    },
  },
  plugins: [],
}
