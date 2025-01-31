import { StyleSheet, View, ViewProps } from 'react-native'
import { ThemedText } from '@/src/components/ThemedText'
import theme from '@/src/constants/theme'
import { goalIcon } from '@/src/constants/goals'
import { Goals } from '@/src/constants/goals'
import { useThemeColor } from '@/src/hooks/useThemeColor'

type Props = {
  viewProps?: ViewProps
  goalKey: Goals
  label: string
  value: number
  unit: string
  goal: number
}

export const ProgressCard = ({
  goalKey,
  label,
  value,
  unit,
  goal = 0,
  viewProps,
}: Props) => {
  const colors = useThemeColor()
  const bgColor = {
    backgroundColor: colors.card,
  }

  const GoalIcon = goalIcon(goalKey)

  return (
    <View {...viewProps} style={[styles.card, bgColor, viewProps?.style]}>
      <View style={styles.progressContainer}>
        <View style={styles.info}>
          <View style={styles.labelContainer}>
            <GoalIcon fill={theme.colors.primary} />
            <ThemedText
              size={'md'}
              weight={'semibold'}
              style={{ marginTop: 5 }}
            >
              {label}
            </ThemedText>
          </View>
          <View style={styles.valueContainer}>
            <ThemedText weight={'bold'} size={'lg'}>
              {Math.round(value)}
            </ThemedText>
            <ThemedText weight={'medium'} size={'lg'}>
              / {goal}
            </ThemedText>
            <ThemedText weight={'bold'}>{unit}</ThemedText>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  info: {
    flexDirection: 'column',
    gap: 16,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 3,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
})
