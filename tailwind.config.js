module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

      
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary:'#F35020',
        secondary:'#067FEE',
        tertiary:'#F1B824',
        darkBlue:'#0D1F2F',
        darkerBlue:'#122435',
        textDark:'#23394E'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
