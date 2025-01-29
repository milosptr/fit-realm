import { StyleSheet } from 'react-native'

import { ThemedText } from '@/src/components/ThemedText'
import { ThemedView } from '@/src/components/ThemedView'
import { TodaysDate } from '@/src/components/TodaysDate'
import { goalName, Goals, goalUnit } from '@/src/constants/goals'
import { ProgressCard } from '@/src/components/ui/cards/ProgressCard'
import { ScreenView } from '@/src/components/ScreenView'
import { useCurrentAuthUser } from '@/src/hooks/useAuth'
import { useUserGoals } from '@/src/hooks/useGoals'
import { useGetAllHealthData } from '@/src/hooks/health/useHealthHooks'
import { HealthActivitySummary, HealthValue } from 'react-native-health'

export default function TodayScreen() {
  const { data: user } = useCurrentAuthUser()
  const { data: goals } = useUserGoals(user?.uid)
  const healthData = useGetAllHealthData()

  const sumHealthData = (data?: HealthValue[]) => {
    return data?.reduce((acc, curr) => acc + curr.value, 0) || 0
  }

  const sumHealthActivityData = (data?: HealthActivitySummary[]) => {
    return data?.reduce((acc, curr) => acc + curr.appleExerciseTime, 0) || 0
  }

  const getGoalHealthData = (key: Goals) => {
    switch (key) {
      case Goals.CALORIES:
        return sumHealthData(healthData?.calories?.data)
      case Goals.WATER:
        return healthData?.water?.data?.value || 0
      case Goals.SLEEP:
        return sumHealthData(healthData?.sleepAnalysis?.data)
      case Goals.STEPS:
        return healthData?.steps?.data?.value || 0
      case Goals.DAILY_DISTANCE:
        return sumHealthData(healthData?.dailyDistance?.data)
      case Goals.ACTIVE_TIME:
        return sumHealthActivityData(healthData?.activeTime?.data)
      case Goals.WEIGHT:
        return healthData?.weight?.data?.value || 0
      default:
        return 0
    }
  }

  return (
    <ScreenView>
      <ThemedView style={styles.generalPadding}>
        <ThemedView style={[styles.headerContainer]}>
          <TodaysDate />
          <ThemedText type='title' weight={'bold'}>
            Today's Information
          </ThemedText>
        </ThemedView>

        <ThemedView style={[styles.progressCard]}>
          {goals
            ?.filter((g) => g.key !== Goals.ACTIVE_DAYS)
            ?.map((g) => (
              <ProgressCard
                key={g.key}
                goalKey={g.key}
                label={goalName[g.key]}
                value={getGoalHealthData(g.key)}
                unit={goalUnit[g.key]}
                goal={Number(g.value)}
              />
            ))}
        </ThemedView>
      </ThemedView>
    </ScreenView>
  )
}

const styles = StyleSheet.create({
  generalPadding: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  headerContainer: {
    flexDirection: 'column',
    gap: 6,
  },
  progressCard: {
    marginTop: 12,
    gap: 12,
  },
})
