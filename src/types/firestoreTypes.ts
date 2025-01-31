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

// TODO: Adjust the types to match the actual data structure
export type Exercise = {
  id: string // Unique identifier for the exercise
  name?: string // Optional: Exercise name if needed
  sets?: number // Number of sets
  reps?: number // Number of reps per set
  rest_time?: number // Rest time in seconds
  duration?: number // Duration in seconds (for timed exercises like planks)
  weight?: 'user_defined' | 'bodyweight' | number // Weight type or actual value
}

export type WorkoutDay = {
  day: number
  name?: string
  rest_day?: boolean
  exercises?: Exercise[]
}

export type Program = {
  id: string
  name: string
  description: string
  full_description: string
  duration_weeks: number
  difficulty: string
  goal: string
  frequency_per_week: number
  cover_image?: string
  tags: string[]
  exercises: WorkoutDay[]
  createdAt: Date
  updatedAt: Date
}
