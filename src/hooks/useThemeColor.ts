/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { theme } from '@/src/constants/theme'
import { useColorScheme } from '@/src/hooks/useColorScheme'

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof theme.colors.light & keyof typeof theme.colors.dark
) {
  const scheme = useColorScheme() ?? 'light'
  const colorFromProps = props[scheme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    return theme.colors[scheme][colorName]
  }
}
