import { useMutation, useQuery } from '@tanstack/react-query'
import { getUserGoals, saveUserGoal } from '@/src/services/firestoreService'
import { UserGoalInput } from '@/src/types/firestoreTypes'
import { MutationOptions } from '@/src/types/queryTypes'
import { QueryKey } from '@/src/constants/queryKey'

export const useUserGoals = (uid?: string) => {
  return useQuery({
    queryKey: [QueryKey.USER_GOALS, uid],
    queryFn: () => getUserGoals(uid),
    enabled: !!uid,
  })
}

export const useUserGoalsMutation = (
  options?: MutationOptions<unknown, UserGoalInput>
) => {
  return useMutation({
    mutationKey: [QueryKey.USER_GOALS_MUTATION],
    mutationFn: (data: UserGoalInput) => saveUserGoal(data),
    ...options,
  })
}
