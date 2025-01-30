import { GoalsListItem } from '@/src/types/constantTypes'
import { Goals } from '@/src/constants/goals'

export type WorkoutType = {
  name: string
  description: string
  category: string
  image?: string
}

export type UserWorkoutType = {
  uid: string
  workout: string
  category: string
  image?: string
}

export type GroupedWorkouts = {
  [key: string]: WorkoutType[]
}

export type UserGoalInput = {
  uid: string
  key: Goals
  value: string
  data: GoalsListItem
}

export type GoalData = {
  key: Goals
  uid: string
  value: string
  unit: string
}

export type UserProfileInfo = {
  uid: string
  key: string
  value: string
}

export type UserProfileInfoInput = {
  uid: string
  key: string
  value: string
}
