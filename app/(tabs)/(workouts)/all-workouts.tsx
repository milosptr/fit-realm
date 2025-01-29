import { ScreenView } from '@/src/components/ScreenView'
import { ThemedView } from '@/src/components/ThemedView'
import theme from '@/src/constants/theme'
import { useCurrentAuthUser } from '@/src/hooks/useAuth'
import { useWorkouts } from '@/src/hooks/useWorkouts'
import { StyleSheet, View } from 'react-native'
import { groupByCategory } from '@/src/utils/workoutHelpers'
import { SimpleWorkoutCard } from '@/src/components/ui/cards/SimpleWorkoutCard'
import { ThemedText } from '@/src/components/ThemedText'

export const AllWorkoutsScreen = () => {
  const { data: user } = useCurrentAuthUser()
  const { data, isLoading } = useWorkouts()

  const groupedWorkouts = groupByCategory(data ?? [])

  return (
    <ScreenView>
      <ThemedView style={[theme.containers.generalPadding]}>
        <View style={styles.workoutsCategory}>
          {Object.entries(groupedWorkouts).map(([category, workouts], idx) => (
            <View key={category}>
              <ThemedText
                size={'xl'}
                weight={'medium'}
                style={styles.categoryTitle}
              >
                {category}
              </ThemedText>
              <View style={styles.workoutsContainer}>
                {workouts.map((workout, idx) => (
                  <SimpleWorkoutCard key={idx} {...workout} />
                ))}
              </View>
            </View>
          ))}
        </View>
      </ThemedView>
    </ScreenView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workoutsContainer: {
    marginTop: 16,
    marginBottom: 16,
    gap: 24,
  },
  workoutsCategory: {
    marginTop: 12,
    marginBottom: 12,
    gap: 12,
  },
  categoryTitle: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGray,
  },
})

export default AllWorkoutsScreen
