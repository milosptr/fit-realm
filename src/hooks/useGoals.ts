import { useMutation, useQuery } from '@tanstack/react-query'
import { getUserGoals, saveUserGoal } from '@/src/services/firestoreService'
import { UserGoalInput } from '@/src/types/firestoreTypes'
import { MutationOptions } from '@/src/types/queryTypes'
import { GoalsListItem } from '@/src/types/constantTypes'

export const useUserGoals = (uid?: string) => {
  return useQuery({
    queryKey: ['UserGoals', uid],
    queryFn: () => getUserGoals(uid),
    enabled: !!uid,
  })
}

export const useUserGoalsMutation = (
  options?: MutationOptions<unknown, UserGoalInput>
) => {
  return useMutation({
    mutationKey: ['UserGoalsMutation'],
    mutationFn: (data: UserGoalInput) => saveUserGoal(data),
    ...options,
  })
}
