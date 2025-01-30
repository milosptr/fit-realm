import { View, type ViewProps } from 'react-native'

import { useThemeColor } from '@/src/hooks/useThemeColor'

export function ThemedView({ style, ...otherProps }: ViewProps) {
  const color = useThemeColor()

  return (
    <View
      style={[{ backgroundColor: color.background }, style]}
      {...otherProps}
    />
  )
}
