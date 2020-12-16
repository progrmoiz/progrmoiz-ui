const deepMerge = require('deepmerge')
const tailwindColors = require('tailwindcss/colors')
const multiThemePlugin = require('tailwindcss-multi-theme')

const colors = {
  primary: {
    ...tailwindColors.indigo,
  },
  secondary: {
    ...tailwindColors.emerald,
  },
  ...tailwindColors
};

const progrmoizConfig = {
  purge: [],
  theme: {
    themeVariants: ['dark'],
    colors,
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
  plugins: [multiThemePlugin],
}

function wrapper(tailwindConfig) {
  let purge
  if (Array.isArray(tailwindConfig.purge)) {
    purge = {
      content: tailwindConfig.purge,
    }
  } else {
    purge = tailwindConfig.purge
  }

  return deepMerge({ ...tailwindConfig, purge }, progrmoizConfig)
}

module.exports = wrapper