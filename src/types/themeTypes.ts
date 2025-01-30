export type ColorShades = {
  default: string
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export type ColorTheme = {
  text: string
  background: string
  cardBackground: string
  tint: string
  icon: string
  tabIconDefault: string
  tabIconSelected: string
}

type ColorThemeScheme = {
  text: string
  background: string
  tabsBackground: string
  tabsBorder: string
  card: string
  tint: string
  inactive: string
}

export type Theme = {
  fonts: {
    regular: object
    medium: object
    bold: object
    heavy: object
  }
  colors: {
    primary: string
    primaryDark: string
    primaryLight: string
    primaryLightest: string
    secondary: string
    danger: string
    warning: string
    creamyWhite: string
    lightGray: string
    lightSlateGray: string
    darkSlateGray: string
    darkGray: string
    white: string
    light: ColorThemeScheme
    dark: ColorThemeScheme
  }
  containers: {
    centered: {
      flex: number
      justifyContent: 'center'
      alignItems: 'center'
    }
    rowCentered: {
      flexDirection: 'row'
      justifyContent: 'center'
      alignItems: 'center'
    }
    generalPadding: {
      paddingLeft: number
      paddingRight: number
    }
    screenVerticalPadding: {
      paddingTop: number
      paddingBottom: number
    }
  }
  centerText: {
    textAlign: 'center'
  }
}
