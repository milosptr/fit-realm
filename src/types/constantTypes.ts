import { Goals } from '@/src/constants/goals'
import { Profile } from '@/src/constants/profile'

export type GoalsListItem = {
  title: string
  key: Goals
  value?: string | number
  unit: string
  __dirty?: boolean
}

export type ProfileInfoListItem = {
  label: string
  key: Profile
  value?: string
  __dirty?: boolean
  __disabled?: boolean
}
