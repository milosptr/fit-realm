import { View, Text, ViewProps, StyleSheet } from 'react-native'
import { ReactNode } from 'react'
import { useColorScheme } from '@/src/hooks/useColorScheme'
import { ThemedText } from '@/src/components/ThemedText'
import theme from '@/src/constants/theme'
import StepsIcon from '@/src/assets/icons/StepsIcon'

type Props = {
  title: string
  icon?: ReactNode
  viewProps?: ViewProps
  childrenContainerProps?: ViewProps
  children?: ReactNode
}

export const CardWithIcon = ({
  title,
  children,
  icon,
  childrenContainerProps,
  viewProps,
}: Props) => {
  // TODO: Implement color scheme
  const colorScheme = useColorScheme()
  const bgColor = {
    backgroundColor: theme.colors[colorScheme ?? 'light'].card,
  }

  return (
    <View {...viewProps} style={[styles.card, bgColor, viewProps?.style]}>
      <View style={styles.header}>
        <ThemedText weight={'semibold'} style={styles.title}>
          {title}
        </ThemedText>
        {icon}
      </View>
      <View {...childrenContainerProps}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
  },
})
