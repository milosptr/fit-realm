import { useQuery } from '@tanstack/react-query'
import {
  getCollectionData,
  getCollectionDataByUserId,
} from '@/src/services/firestoreService'
import { QueryKey } from '@/src/constants/queryKey'

export const useWorkouts = () => {
  return useQuery({
    queryKey: [QueryKey.WORKOUTS],
    queryFn: () => getCollectionData('workouts'),
  })
}

export const useUserWorkouts = (userId?: string) => {
  return useQuery({
    queryKey: [QueryKey.WORKOUTS, QueryKey.USER_WORKOUTS, userId],
    queryFn: () => getCollectionDataByUserId(`UserWorkouts`, userId!),
    enabled: !!userId,
  })
}
