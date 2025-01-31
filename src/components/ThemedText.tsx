import { Text, StyleSheet } from 'react-native'

import { useThemeColor } from '@/src/hooks/useThemeColor'
import { ThemedTextProps } from '@/src/types/componentTypes'

export function ThemedText({
  style,
  type = 'default',
  size = 'base',
  weight = 'normal',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor()

  return (
    <Text
      style={[
        { color: color.text },
        styles[size],
        styles[weight],
        styles[type],
        style,
      ]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  default: {},
  title: {
    fontSize: 27,
    lineHeight: 27,
  },
  subtitle: {
    fontSize: 24,
    lineHeight: 24,
  },
  sm: {
    fontSize: 12,
    lineHeight: 12,
  },
  base: {
    fontSize: 15,
    lineHeight: 18,
  },
  md: {
    fontSize: 17,
    lineHeight: 17,
  },
  lg: {
    fontSize: 19,
    lineHeight: 19,
  },
  xl: {
    fontSize: 21,
    lineHeight: 21,
  },
  '2xl': {
    fontSize: 24,
    lineHeight: 24,
  },
  '3xl': {
    fontSize: 27,
    lineHeight: 27,
  },
  '4xl': {
    fontSize: 31,
    lineHeight: 31,
  },
  '5xl': {
    fontSize: 35,
    lineHeight: 35,
  },
  normal: {
    fontWeight: 'normal',
  },
  medium: {
    fontWeight: '500',
  },
  semibold: {
    fontWeight: '600',
  },
  bold: {
    fontWeight: 'bold',
  },
})
