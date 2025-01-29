import { ScreenView } from '@/src/components/ScreenView'
import { ThemedView } from '@/src/components/ThemedView'
import { StyleSheet, Text, View } from 'react-native'
import { useCurrentAuthUser } from '@/src/hooks/useAuth'
import { useUserWorkouts } from '@/src/hooks/useWorkouts'
import theme from '@/src/constants/theme'
import { ThemedText } from '@/src/components/ThemedText'
import { SimpleWorkoutCard } from '@/src/components/ui/cards/SimpleWorkoutCard'

export const MyWorkoutsScreen = () => {
  const { data: user } = useCurrentAuthUser()
  const { data, isLoading } = useUserWorkouts(user?.uid)

  return (
    <ScreenView>
      <ThemedView
        style={[
          theme.containers.generalPadding,
          theme.containers.screenVerticalPadding,
        ]}
      >
        <View style={styles.titleContainer}>
          <ThemedText type={'title'}>Workouts</ThemedText>
        </View>
        <View style={styles.workoutsContainer}>
          {data?.map((workout, idx) => (
            <SimpleWorkoutCard key={idx} {...workout} />
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
    marginTop: 12,
    marginBottom: 12,
    gap: 12,
  },
  addWorkoutButton: {
    paddingHorizontal: 16,
    height: 40,
  },
})

export default MyWorkoutsScreen
