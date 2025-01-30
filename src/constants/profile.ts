import { ProfileInfoListItem } from '@/src/types/constantTypes'

export enum Profile {
  FULL_NAME = 'FULL_NAME',
  EMAIL = 'EMAIL',
  HEIGHT = 'HEIGHT',
  WEIGHT = 'WEIGHT',
}

export const profileName = {
  [Profile.FULL_NAME]: 'Full Name',
  [Profile.EMAIL]: 'Email',
  [Profile.HEIGHT]: 'Height',
  [Profile.WEIGHT]: 'Weight',
}

export const profileList: ProfileInfoListItem[] = Object.entries(Profile).map(
  ([_, value]) => ({
    label: profileName[value],
    key: value as Profile,
    __dirty: false,
    __disabled: value === Profile.EMAIL,
  })
)
