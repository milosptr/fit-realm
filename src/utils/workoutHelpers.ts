import { GroupedWorkouts, WorkoutType } from '@/src/types/firestoreTypes'

export const groupByCategory = (data: WorkoutType[]) => {
  return data?.reduce((acc, workout) => {
    if (acc[workout.category]) {
      acc[workout.category].push(workout)
    } else {
      acc[workout.category] = [workout]
    }
    return acc
  }, {} as GroupedWorkouts)
}
