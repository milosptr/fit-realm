import { RefreshControl, StyleSheet } from 'react-native'

import { ThemedText } from '@/src/components/ThemedText'
import { ThemedView } from '@/src/components/ThemedView'
import { TodaysDate } from '@/src/components/TodaysDate'
import { goalName, Goals, goalUnit } from '@/src/constants/goals'
import { ProgressCard } from '@/src/components/ui/cards/ProgressCard'
import { ScreenView } from '@/src/components/ScreenView'
import { useCurrentAuthUser } from '@/src/hooks/useAuth'
import { useUserGoals } from '@/src/hooks/useGoals'
import { useGetAllHealthData } from '@/src/hooks/health/useHealthHooks'
import { useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { QueryKey } from '@/src/constants/queryKey'

export default function TodayScreen() {
  const queryClient = useQueryClient()
  const [refreshing, setRefreshing] = useState(false)

  const { data: user } = useCurrentAuthUser()
  const { data: goals } = useUserGoals(user?.uid)
  const healthData = useGetAllHealthData()

  const getGoalHealthData = (key: Goals) => {
    switch (key) {
      case Goals.CALORIES:
        return healthData?.calories?.data || 0
      case Goals.WATER:
        return healthData?.water?.data || 0
      case Goals.SLEEP:
        return healthData?.sleepAnalysis?.data || 0
      case Goals.STEPS:
        return healthData?.steps?.data || 0
      case Goals.DAILY_DISTANCE:
        return healthData?.dailyDistance?.data || 0
      case Goals.ACTIVE_TIME:
        return healthData?.activeTime?.data || 0
      case Goals.WEIGHT:
        return healthData?.weight?.data || 0
      default:
        return 0
    }
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    await Promise.all([
      queryClient.invalidateQueries({ queryKey: [QueryKey.HEALTH_DATA] }),
      queryClient.invalidateQueries({ queryKey: [QueryKey.USER_GOALS] }),
    ]).then(() => {
      setRefreshing(false)
    })
  }

  return (
    <ScreenView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
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
        <ThemedView style={styles.activitySection}>
          <ThemedText size={'xl'} weight={'semibold'}>
            Log your next activity 💪
          </ThemedText>
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
    gap: '4%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  activitySection: {
    marginTop: 24,
  },
})
