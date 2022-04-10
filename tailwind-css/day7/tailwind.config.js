const plugin = require('tailwindcss/plugin');

module.exports = {
  prefix: '',
  important: true,
  content: [
    "./src/**/*.{html,js}",
    './index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '450px',
      },
      colors: {
        'primary': '#1fb6ff',
        'primary-dark': '#1fb612',
        'secondary': '#7e5bef',
        'danger': '#ff49db',
        'success': '#ff7849',
      },
      spacing: {
        '4.5': '18px',
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.content-auto': {
          'content-visibility': 'hidden',
        },
        '.content-hidden': {
          'content-visibility': 'hidden',
        },
        '.content-visible': {
          'content-visibility': 'visible',
        },
      })
    }),
    require('./src/plugins/tab-size')
  ],
}
