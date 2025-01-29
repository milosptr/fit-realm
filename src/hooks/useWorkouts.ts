import { useQuery } from '@tanstack/react-query'
import {
  getCollectionData,
  getCollectionDataByUserId,
} from '@/src/services/firestoreService'

export const useWorkouts = () => {
  return useQuery({
    queryKey: ['workouts'],
    queryFn: () => getCollectionData('workouts'),
  })
}

export const useUserWorkouts = (userId?: string) => {
  return useQuery({
    queryKey: ['workouts', userId],
    queryFn: () => getCollectionDataByUserId(`UserWorkouts`, userId!),
    enabled: !!userId,
  })
}
