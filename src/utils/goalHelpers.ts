import { GoalsListItem } from '@/src/types/constantTypes'
import { UserGoalInput } from '@/src/types/firestoreTypes'

export const mutateGoalData = (
  old: GoalsListItem[],
  updated: UserGoalInput
) => {
  const hasData = old.find((item) => item.key === updated.key)
  let updatedData: GoalsListItem[] = []
  if (hasData) {
    updatedData = old.map((item) => {
      if (item.key === updated.key) {
        return { ...item, value: updated.value, __dirty: false }
      }
      return item
    })
  } else {
    updatedData = [...old, { ...updated.data, __dirty: false }]
  }
  return updatedData
}
