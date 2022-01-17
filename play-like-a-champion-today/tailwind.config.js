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
      backgroundImage: theme => ({
        naj: "url('/src/assets/images/night.jpg')"
      }),
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
        lav: '#D0C4DF', // languid lavender
        violet: '#A188BF', // African Violet
        sheen: '#5DB2A5', // green sheen
        minion: '#F4E04E' // minion yellow
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
          padding: '.5rem 1rem',
          borderRadius: '12',
          fontWeight: '600',
          backgroundColor: '#5db2a5',
          border: 'solid 2px #030303',
          color: '#030303',

          '&:hover': {
            backgroundColor: '#d0c4df',
            border: 'solid 2px #030303',
            color: '#030303'
          }
        }
      };

      addComponents(buttons);
    })
  ]
};
