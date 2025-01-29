import { StyleSheet, View, ViewProps } from 'react-native'
import { PieChart } from 'react-native-gifted-charts'
import { ThemedText } from '@/src/components/ThemedText'
import theme from '@/src/constants/theme'
import { useColorScheme } from '@/src/hooks/useColorScheme'
import { goalIcon } from '@/src/constants/goals'
import { Goals } from '@/src/constants/goals'

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
  const percentage = Math.round((value / goal) * 100)
  const pieData = [
    { value: percentage, color: theme.colors.primary },
    { value: 100 - percentage, color: theme.colors.primaryLightest },
  ]

  const colorScheme = useColorScheme()
  const bgColor = {
    backgroundColor: theme.colors[colorScheme ?? 'light'].card,
  }

  const GoalIcon = goalIcon(goalKey)

  return (
    <View {...viewProps} style={[styles.card, bgColor, viewProps?.style]}>
      <View style={styles.progressContainer}>
        <View style={styles.info}>
          <View style={styles.labelContainer}>
            <GoalIcon fill={theme.colors.primary} />
            <ThemedText weight={'medium'} style={{ marginTop: 5 }}>
              {label}
            </ThemedText>
          </View>
          <View style={styles.valueContainer}>
            <ThemedText weight={'bold'} size={'lg'}>
              {value}
            </ThemedText>
            <ThemedText weight={'medium'} size={'lg'}>
              / {goal}
            </ThemedText>
            <ThemedText weight={'bold'}>{unit}</ThemedText>
          </View>
        </View>
        <View style={styles.chartContainer}>
          <PieChart
            donut
            radius={30}
            innerRadius={20}
            innerCircleColor={bgColor.backgroundColor}
            data={pieData}
            centerLabelComponent={() => {
              return (
                <ThemedText weight={'medium'} size={'sm'}>
                  {percentage}%
                </ThemedText>
              )
            }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderRadius: 8,
  },
  progressContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '25%',
    height: '100%',
  },
  info: {
    width: '50%',
    flexDirection: 'column',
    gap: 8,
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
