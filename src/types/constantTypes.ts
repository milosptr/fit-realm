import { Goals } from '@/src/constants/goals'

export type GoalsListItem = {
  title: string
  key: Goals
  value?: string | number
  unit: string
  __dirty?: boolean
}
