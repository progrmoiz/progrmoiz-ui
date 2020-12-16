export default {
  badge: {
    base: 'inline-flex leading-5 font-medium items-center',
    rounded: {
      none: 'rounded-none',
      basic: 'rounded',
      small: 'rounded-sm',
      medium: 'rounded-md',
      large: 'rounded-lg',
      full: 'rounded-full',
      left: {
        none: 'rounded-l-none',
        basic: 'rounded-l',
        small: 'rounded-l-sm',
        medium: 'rounded-l-md',
        large: 'rounded-l-lg',
        full: 'rounded-l-full',
      },
      right: {
        none: 'rounded-r-none',
        basic: 'rounded-r',
        small: 'rounded-r-sm',
        medium: 'rounded-r-md',
        large: 'rounded-r-lg',
        full: 'rounded-r-full',
      },
    },
    size: {
      small: 'text-xs px-2.5',
      medium: 'text-sm px-3 py-0.5',
      large: 'text-base px-3.5 py-1',
      primary: {
        small: 'text-xs pl-2.5 pr-2 py-0.5',
        medium: 'text-sm pl-3 pr-2.5 py-0.5',
        large: 'text-base pl-3.5 pr-3 py-1',
      },
      secondary: {
        small: 'text-xs pr-2.5 pl-2 py-0.5',
        medium: 'text-sm pr-3 pl-2.5 py-0.5',
        large: 'text-base pr-3.5 pl-3 py-1',
      }
    },
    color: {
      primary: 'text-primary-800 bg-primary-100',
      secondary: 'text-secondary-800 bg-secondary-100',
      gray: 'text-gray-800 bg-gray-100',
      danger: 'text-red-800 bg-red-100',
      success: 'text-green-800 bg-green-100',
      warning: 'text-yellow-800 bg-yellow-100',
      info: 'text-blue-800 bg-blue-100',
      black: 'bg-gray-800 text-gray-100 ',
      white: 'text-gray-800 bg-white ',
      nocolor: '',
      dark: {
        primary: 'text-primary-100 bg-primary-700',
        secondary: 'text-secondary-100 bg-secondary-700',
        gray: 'text-gray-100 bg-gray-700',
        danger: 'text-red-100 bg-red-700',
        success: 'text-green-100 bg-green-700',
        warning: 'text-yellow-100 bg-yellow-700',
        info: 'text-blue-100 bg-blue-700',
        black: 'bg-gray-800 text-gray-100',
        white: 'text-gray-800 bg-white',
        nocolor: ''
      }
    },
    dot: {
      base: 'rounded-full w-1.5 h-1.5 mr-1.5',
      size: {
        small: '',
        medium: '-ml-0.5',
        large: '-ml-0.5',
      },
      color: {
        primary: 'bg-primary-300',
        secondary: 'bg-secondary-300',
        gray: 'bg-gray-300',
        danger: 'bg-red-300',
        success: 'bg-green-300',
        warning: 'bg-yellow-300',
        info: 'bg-blue-300',
        black: 'bg-gray-500 ',
        white: 'bg-gray-300 ',
        nocolor: '',
        dark: {
          primary: 'bg-primary-500',
          secondary: 'bg-secondary-500',
          gray: 'bg-gray-500',
          danger: 'bg-red-500',
          success: 'bg-green-500',
          warning: 'bg-yellow-500',
          info: 'bg-blue-500',
          black: 'bg-gray-500',
          white: 'bg-gray-300',
          nocolor: ''
        }
      }
    }
  },
  /* Stacked List */
  stackedList: {
    base: 'divide-y divide-gray-200',
    notFlush: 'border border-gray-200 rounded-md',
    item: {
      base: 'py-3 flex items-center justify-between text-sm',
      notFlush: 'pl-3 pr-4',
      left: {
        base: 'w-0 flex-1 flex items-center',
        notFlush: 'pl-2',
      },
      right: {
        base: 'ml-4 flex-shrink-0 text-right',
        notFlush: '',
      }
    },
    graphic: {
      base: 'object-cover flex-shrink-0 focus:outline-none',
      notFlush: '-ml-1'
    },
    meta: {
      base: 'font-medium text-indigo-600 hover:text-indigo-500',
      sep: {
        base: 'px-3 text-gray-200 font-bold'
      }
    },
    text: {
      base: 'flex-1 w-0 truncate focus:outline-none',
      primary: {
        base: 'focus:outline-none',
        notDense: 'pb-1',
        text: 'text-primary-600 font-medium',
      },
      secondary: {
        base: 'focus:outline-none',
        text: 'text-gray-500'
      }
    }
  },
  /* Button */
  button: {
    base: 'font-medium focus:outline-none ',
    active: 'focus:ring-2 focus:ring-offset-2',
    withIcon: 'inline-flex items-center',
    group: {
      base: 'font-medium focus:outline-none',
    },
    size: {
      smaller: 'px-2 py-1 text-xs',
      small: 'px-2 py-1 text-xs',
      regular: 'px-4 py-2 text-sm',
      large: 'px-5 py-3 text-base',
      larger: 'px-10 py-5 text-lg',
      /* These sizes are used when only icon are used, when no childrens are provided, not above one's */
      noText: {
        smaller: 'px-1 py-1',
        small: 'px-1 py-1',
        regular: 'px-2 py-2',
        large: 'px-3 py-3',
        larger: 'px-5 py-5',
      },
      icon: {
        smaller: 'w-3 h-3',
        small: 'w-4 h-4',
        regular: 'w-5 h-5',
        large: 'w-6 h-6',
        larger: 'w-7 h-7',
      }
    },
    unstyled: {
      base: 'text-primary-600 border-transparent',
      active: 'hover:text-primary-500',
      disabled: 'disabled:opacity-50 cursor-not-allowed '
    },
    primary: {
      base: 'bg-primary-600 text-gray-100 border-transparent',
      active: 'hover:bg-primary-700 focus:ring-primary-500',
       /* Intentionally double spaced cuz then two styles will be same primary & linked */
      disabled: 'disabled:opacity-50  cursor-not-allowed',
    },
    outlined: {
      base: 'bg-white text-gray-900 border-gray-300 shadow-sm border',
      active: 'hover:bg-gray-50 focus:ring-primary-500',
      disabled: 'disabled:opacity-50 cursor-not-allowed bg-gray-100',
    },
    linked: {
      base: 'text-primary-600 border-transparent',
      active: 'hover:bg-primary-50 focus:ring-primary-500',
      disabled: 'disabled:opacity-50 cursor-not-allowed',
    }
  }
}
