import type { TextProps } from 'react-native'

export type ThemedTextProps = TextProps & {
  lightColor?: string
  darkColor?: string
  type?: 'title' | 'subtitle' | 'default'
  size?: 'sm' | 'md' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
}

export type SelectOption = {
  label: string
  value: string
}
