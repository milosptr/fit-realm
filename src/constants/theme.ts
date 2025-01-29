import { Theme } from '@/src/types/themeTypes'

export const fonts: Theme['fonts'] = {
  regular: {
    fontFamily: 'Onest',
    fontWeight: 'normal' as const,
  },
  medium: {
    fontFamily: 'Onest-Medium',
    fontWeight: '500' as const,
  },
  bold: {
    fontFamily: 'Onest-Bold',
    fontWeight: 'bold' as const,
  },
  heavy: {
    fontFamily: 'Onest-Heavy',
    fontWeight: '800' as const,
  },
}

export const theme: Theme = {
  fonts,
  colors: {
    primary: '#354AD9',
    primaryDark: '#2235B6',
    primaryLight: '#6273E2',
    primaryLightest: '#C2C9F4',
    secondary: '#99b2c5',
    danger: '#D9354A',
    warning: '#D97235',
    creamyWhite: '#FCFCFD',
    lightGray: '#d0d5dd',
    lightSlateGray: '#667085',
    darkSlateGray: '#344054',
    darkGray: '#101828',
    white: '#ffffff',
    light: {
      text: '#101828',
      background: '#FCFCFD',
      card: '#ededf3',
      tint: '#354AD9',
      inactive: '#667085',
    },
    dark: {
      text: '#FCFCFD',
      background: '#090d16',
      card: '#101828',
      tint: '#FCFCFD',
      inactive: '#667085',
    },
  },
  containers: {
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    generalPadding: {
      paddingLeft: 16,
      paddingRight: 16,
    },
    screenVerticalPadding: {
      paddingTop: 24,
      paddingBottom: 24,
    },
  },
}

export default theme
