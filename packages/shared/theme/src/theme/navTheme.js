import { createTheme, lightThemePrimitives, darkThemePrimitives } from 'baseui'
import { borderStyle } from 'polished'

// Navfarger
const navRod = '#C30000'
const navOransje = '#FF9100'
const navLimeGronn = '#A2AD00'
const navGronn = '#06893A'
const navLilla = '#634689'
const navDypBla = '#005B82'
const navBla = '#0067C5'
const navLysBla = '#66CBEC'

// Datakatalog farger
const nadaDypBla = '#25548A'
const nadaLysBla = '#3567C5'
const nadaActive = '#3AB4F9'
const nadaSelected = '#7BCDFB'
const nadaLysLysBla = '#BDE6FD'

//Tekst digitalt
const navMorkGra = '#3E3832'
const navGra80 = '#59514B'
const navGra60 = '#78706A'
const navGra40 = '#B7B1A9'
const navGra20 = '#C6C2BF'
const navLysGra = '#E9E7E7'

// farger for skjerm
const orangeFocus = '#FFBD66'
const redError = '#BA3A26'
const white = '#FFF'
const grayBackground = navLysGra
const grayIcon = navGra40
const grayModia = '#333333'
const grayInactive = navGra60
const pinkErrorBg = '#F3E3E3'

const black = 'black'
const fontFamilyMono =
  '"Open Sans Pro", "Open Sans", "Source Sans", “Roboto”, “Oxygen”, “Ubuntu”, “Cantarell”,“Fira Sans”, “Droid Sans”, “Helvetica Neue”, sans-serif'
const fontFamilySans =
  '"Open Sans Pro", "Open Sans", "Source Sans", “Roboto”, “Oxygen”, “Ubuntu”, “Cantarell”,“Fira Sans”, “Droid Sans”, “Helvetica Neue”, sans-serif'

const grayDark = navMorkGra
const gray = navGra80
const grayLight = navGra60
const grayLighter = navGra40
const grayLightest = navGra20
const primary = nadaDypBla
const primaryA50 = navRod
const borderRadius = '0px'

export const sliderOverrides = {
  Root: {},
}

export const navbarOverrides = {
  Root: {
    style: ({ $theme }) => ({
      height: '300px',
    }),
  },
}

export const tabOverrides = {}

export const buttonOverrides = {
  BaseButton: {
    style: {
      borderColor: 'transparent',
      borderRightStyle: 'solid',
      borderRightWidth: '2px',
      borderLeftStyle: 'solid',
      borderLeftWidth: '2px',
      borderTopStyle: 'solid',
      borderTopWidth: '2px',
      borderBottomStyle: 'solid',
      borderBottomWidth: '2px',
      boxSizing: 'border-box',
    },
  },
}

export const buttonSecondaryOverrides = {
  BaseButton: {
    style: {
      ':hover': {
        backgroundColor: nadaLysBla,
        borderColor: nadaLysBla,
        color: white,
      },
      ':hover:focus': {
        backgroundColor: nadaLysBla,
        borderColor: nadaLysBla,
        color: white,
      },
      ':focus': {
        backgroundColor: nadaLysBla,
        borderColor: nadaLysBla,
        color: white,
      },
      color: nadaDypBla,
      borderColor: nadaDypBla,
      borderRightStyle: 'solid',
      borderRightWidth: '2px',
      borderLeftStyle: 'solid',
      borderLeftWidth: '2px',
      borderTopStyle: 'solid',
      borderTopWidth: '2px',
      borderBottomStyle: 'solid',
      borderBottomWidth: '2px',
      backgroundColor: white,
      boxSizing: 'border-box',
    },
  },
}

export const buttonMinimalOverrides = {
  BaseButton: {
    style: {
      ':hover': {
        borderColor: nadaDypBla,
      },
      ':hover:focus': {
        borderColor: nadaDypBla,
      },
      ':focus': {},
      color: nadaDypBla,
      backgroundColor: white,
      borderColor: 'transparent',
      borderRightStyle: 'solid',
      borderRightWidth: '2px',
      borderLeftStyle: 'solid',
      borderLeftWidth: '2px',
      borderTopStyle: 'solid',
      borderTopWidth: '2px',
      borderBottomStyle: 'solid',
      borderBottomWidth: '2px',
      'box-sizing': 'border-box',
      '-moz-box-sizing': 'border-box',
      '-webkit-box-sizing': 'border-box',
    },
  },
}

export const panelOverrides = {
  ToggleIcon: {
    component: () => null,
  },
  Header: {
    style: {
      borderBottomStyle: 'none',
      borderBottomWidth: 'none',
      borderBottomColor: 'none',
      paddingLeft: 'none',
      paddingRight: 'none',
    },
  },
  Content: {
    style: {
      paddingLeft: 'none',
      paddingRight: 'none',
      paddingBottom: 'none',
      paddingTop: 'none',
      backgroundColor: 'none',
      borderBottomStyle: 'none',
      borderBottomWidth: 'none',
      borderBottomColor: 'none',
    },
  },
}

export const tagOverrides = {
  Root: {
    style: {
      borderRadius: '20px',
    },
  },
}

export const inputOverrides = {
  Root: {
    style: ({ $theme, $isFocused }) => ({
      //outline: $isFocused ? `1px ${$theme.colors.primary} solid` : `1px ${$theme.colors.inputBorder} solid`
    }),
  },
  EndEnhancer: {
    style: ({ $theme, $isFocused }) => ({
      border: $isFocused
        ? `2px ${$theme.colors.primary} solid`
        : `2px ${$theme.colors.inputBorder} solid`,
      //backgroundColor: $isFocused ? $theme.colors.primary : $theme.colors.inputBorder,
      color: $theme.colors.white,
    }),
  },
}

export const radioOverrides = {
  Root: {},
}

export const checkboxOverrides = {
  Label: {
    style: ({ $theme }) => ({
      height: $theme.sizing.scale900,
      verticalAlign: 'middle',
      lineHeight: $theme.sizing.scale900,
    }),
  },
  Checkmark: {
    style: ({ $theme, $isFocusVisible, $checked }) => ({
      outline: 0,
      width: $theme.sizing.scale900,
      height: $theme.sizing.scale900,
      boxShadow: $isFocusVisible && $checked ? `0 0 0 0.2rem ${primary}` : '',
      ':hover': {
        backgroundColor: nadaLysLysBla,
        borderColor: '#3567C5',
      },
    }),
  },
}

const themePrimitives = {
  ...lightThemePrimitives,

  primaryFontFamily: fontFamilySans,

  primary100: primary,
  primary200: primary,
  primary300: primary,
  primary400: primary,
  primary500: primary,
  primary600: primary,
  primary700: primary,

  mono100: white, // Popup menu
  mono200: white, // Text input, text area, selectbox
  mono300: grayLighter, // Disabled widget background
  mono400: grayLighter, // Slider track
  mono500: gray, // Clicked checkbox and radio
  mono600: gray, // Disabled widget text
  mono700: gray, // Unselected checkbox and radio
  mono800: grayDark, // Selectbox text
  mono900: grayDark, // Not used, but just in case.
  mono1000: black,

  rating200: '#FFE1A5',
  rating400: '#FFC043',
}

const getResponsiveTheme = (breakpoints) => {
  return Object.keys(breakpoints).reduce(
    (acc, key) => {
      acc.mediaQuery[
        key
      ] = `@media screen and (min-width: ${breakpoints[key]}px)`
      return acc
    },
    {
      breakpoints,
      mediaQuery: {},
    },
  )
}

export const navTheme = (borderRadius = '0px') => {
  const breakpoints = {
    small: 480,
    medium: 840,
    large: 1200,
    xLarge: 1440,
  }

  const themeOverrides = {
    borders: {
      radius100: borderRadius,
      radius200: borderRadius,
      radius300: borderRadius,
      radius400: borderRadius,
      buttonBorderRadius: borderRadius,
      inputBorderRadius: borderRadius,
      popoverBorderRadius: borderRadius,
      surfaceBorderRadius: borderRadius,
    },
    typography: {},

    colors: {
      accent: nadaLysBla,
      black: black,
      border: grayDark,
      borderFocus: primary,
      borderSelected: primary,

      buttonPrimaryFill: nadaDypBla,
      buttonPrimaryText: white,
      buttonPrimaryHover: nadaLysBla,
      buttonPrimaryActive: nadaActive,
      buttonPrimarySelectedText: primary,
      buttonPrimarySelectedFill: nadaSelected,

      buttonSecondaryFill: white,
      buttonSecondaryText: nadaDypBla,
      buttonSecondaryHover: nadaLysLysBla,
      buttonSecondarySelectedText: primary,
      buttonSecondarySelectedFill: nadaSelected,
      buttonSecondaryActive: nadaActive,

      buttonMinimalFill: white,
      buttonMinimalText: nadaDypBla,
      buttonMinimalHover: white,
      buttonMinimalSelectedText: primary,
      buttonMinimalSelectedFill: nadaSelected,
      buttonMinimalActive: nadaActive,

      contentPrimary: black,
      headerBorderFill: nadaLysLysBla,
      inputBorder: grayDark,
      inputEnhancerFill: primary,
      inputFillActive: '#F2F2F2',
      inputFill: white,
      inputPlaceholder: nadaDypBla,
      linkText: '#1A548A',
      linkVisited: navLilla,
      primary: primary,
      primaryA: primary,
      tickFillDisabled: gray,
      tickFillSelected: primary,
      tickMarkFillDisabled: grayLighter,
      tagPrimarySolidBackground: primary,
      white: white,
      tagApiBackgroundColor: '#E0DAE7',
      tagApiBorderColor: '#826BA1',
      tagDatasetBackgroundColor: '#E0F5FB',
      tagDatasetBorderColor: '#5690A2',
      tagTermBackgroundColor: '#CCEAD8',
      tagTermBorderColor: '#38A161',
      tagPurposeBackgroundColor: '#FFE9CC',
      tagPurposeBorderColor: '#EB7F00',
      tagKafkaBackgroundColor: '#F5DBEB',
      tagKafkaBorderColor: '#A12878',
      tagInformationtypeBackgroundColor: '#ECEFCC',
      tagInformationtypeBorderColor: '#8E960A',
      tagTableBackgroundColor: '#D1E9EB',
      tagTableBorderColor: '#2E8984',
      tagTableauBackgroundColor: '#E5E5E5',
      tagTableauBorderColor: '#78706A',
    },

    radioOverrides,
    checkboxOverrides,
    buttonOverrides,
    buttonSecondaryOverrides,
    buttonMinimalOverrides,
    sliderOverrides,
    inputOverrides,
    panelOverrides,
    tagOverrides,
    tabOverrides,

    ...getResponsiveTheme(breakpoints),
  }
  const theme = createTheme(themePrimitives, themeOverrides)
  //console.log('navtheme', theme)
  return theme
}

export const lightTheme = (borderRadius = '0px') => {
  const themePrimitives = {
    ...lightThemePrimitives,
  }

  const themeOverrides = {
    borders: {
      radius100: borderRadius,
      radius200: borderRadius,
      radius300: borderRadius,
      radius400: borderRadius,
      buttonBorderRadius: borderRadius,
      inputBorderRadius: borderRadius,
      popoverBorderRadius: borderRadius,
      surfaceBorderRadius: borderRadius,
    },
  }
  return createTheme(themePrimitives, themeOverrides)
}

export const darkTheme = (borderRadius = '0px') => {
  const themePrimitives = {
    ...darkThemePrimitives,
  }

  const themeOverrides = {
    borders: {
      radius100: borderRadius,
      radius200: borderRadius,
      radius300: borderRadius,
      radius400: borderRadius,
      buttonBorderRadius: borderRadius,
      inputBorderRadius: borderRadius,
      popoverBorderRadius: borderRadius,
      surfaceBorderRadius: borderRadius,
    },
  }
  return createTheme(themePrimitives, themeOverrides)
}

export default navTheme
