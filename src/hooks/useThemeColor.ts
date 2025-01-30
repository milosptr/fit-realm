/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { theme } from '@/src/constants/theme'
import { useColorScheme } from '@/src/hooks/useColorScheme'

export function useThemeColor() {
  const scheme = useColorScheme() ?? 'light'
  return theme.colors[scheme]
}
