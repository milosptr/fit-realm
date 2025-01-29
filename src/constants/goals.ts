import { GoalsListItem } from '@/src/types/constantTypes'
import CaloriesIcon from '@/src/assets/icons/CaloriesIcon'
import ActiveTimeIcon from '@/src/assets/icons/ActiveTimeIcon'
import DailyDistanceIcon from '@/src/assets/icons/DailyDistanceIcon'
import StepsIcon from '@/src/assets/icons/StepsIcon'
import SleepIcon from '@/src/assets/icons/SleepIcon'
import WaterIcon from '@/src/assets/icons/WaterIcon'
import WeightIcon from '@/src/assets/icons/WeightIcon'
import GoalsIcon from '@/src/assets/icons/GoalsIcon'

export enum Goals {
  ACTIVE_DAYS = 'ACTIVE_DAYS',
  ACTIVE_TIME = 'ACTIVE_TIME',
  CALORIES = 'CALORIES',
  DAILY_DISTANCE = 'DAILY_DISTANCE',
  SLEEP = 'SLEEP',
  STEPS = 'STEPS',
  WATER = 'WATER',
  WEIGHT = 'WEIGHT',
}

export const goalName = {
  [Goals.ACTIVE_TIME]: 'Active Time',
  [Goals.ACTIVE_DAYS]: 'Active Days',
  [Goals.CALORIES]: 'Daily Calories',
  [Goals.DAILY_DISTANCE]: 'Daily Distance',
  [Goals.SLEEP]: 'Sleep',
  [Goals.STEPS]: 'Daily Steps',
  [Goals.WATER]: 'Water Intake',
  [Goals.WEIGHT]: 'Desired Weight',
}

export const goalUnit = {
  [Goals.ACTIVE_TIME]: 'minutes',
  [Goals.ACTIVE_DAYS]: 'days',
  [Goals.CALORIES]: 'calories',
  [Goals.DAILY_DISTANCE]: 'km',
  [Goals.SLEEP]: 'hours',
  [Goals.STEPS]: 'steps',
  [Goals.WATER]: 'ml',
  [Goals.WEIGHT]: 'kg',
}

export const goalIcon = (key: Goals) => {
  switch (key) {
    case Goals.ACTIVE_TIME:
      return ActiveTimeIcon
    case Goals.CALORIES:
      return CaloriesIcon
    case Goals.DAILY_DISTANCE:
      return DailyDistanceIcon
    case Goals.SLEEP:
      return SleepIcon
    case Goals.STEPS:
      return StepsIcon
    case Goals.WATER:
      return WaterIcon
    case Goals.WEIGHT:
      return WeightIcon
    default:
      return GoalsIcon
  }
}

export const goalsList: GoalsListItem[] = Object.keys(Goals)
  .sort((a, b) => goalName[a as Goals].localeCompare(goalName[b as Goals]))
  .map((key) => ({
    title: goalName[key as Goals],
    key: key as Goals,
    unit: goalUnit[key as Goals],
  }))

export const goalOptions = {
  [Goals.ACTIVE_TIME]: Array.from(
    { length: Math.ceil((180 - 15) / 5) + 1 },
    (_, i) => 15 + i * 5
  ),
  [Goals.ACTIVE_DAYS]: Array.from({ length: 7 }, (_, i) => i + 1),
  [Goals.CALORIES]: Array.from({ length: 30 }, (_, i) => i * 100 + 100),
  [Goals.DAILY_DISTANCE]: Array.from({ length: 100 }, (_, i) => i + 1),
  [Goals.SLEEP]: Array.from({ length: 12 }, (_, i) => i + 1),
  [Goals.STEPS]: Array.from({ length: 40 }, (_, i) => i * 1000 + 1000),
  [Goals.WATER]: Array.from({ length: 21 }, (_, i) => i * 100 + 2000),
  [Goals.WEIGHT]: Array.from({ length: 151 }, (_, i) => i + 40),
}
