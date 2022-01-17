const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      0: '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      close: '90vh',
      full: '100vh'
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%'
    },
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }

      monitor: '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        irish: 'url("/src/assets/images/ND-background.jpg")'
      },
      screens: {
        baller: '1980px',
        // => @media (min-width: 1600px) { ... }

        ridic: '2560px'
        // => @media (min-width: 2560px) { ... }
      },
      colors: {
        rich: '#030303', // rich black
        vamp: '#0A0A0A', // vampire black
        jet: '#333333', // jet
        onyx: '#3F4045', // onyx
        cloud: '#F3F3F3', // cloud
        silver: '#BFC0C5', // silver
        ndblue: '#0C2340', // notre dame blue
        domegold: '#C99700', // standard dome gold
        irishgreen: '#00843D' // irish green
      },
      fontFamily: {
        sans: ['Inter var']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const buttons = {
        '.btn': {
          backgroundColor: '#0C2340',
          padding: '.3rem .7rem',
          borderRadius: 10,
          fontWeight: '600',
          border: 'solid 2px #030303',
          color: '#C99700',

          '&:hover': {
            backgroundColor: '#00843D',
            border: 'solid 2px #030303',
            color: '#C99700'
          }
        }
      };

      addComponents(buttons);
    })
  ]
};
