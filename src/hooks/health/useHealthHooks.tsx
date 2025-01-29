import { useQuery } from '@tanstack/react-query'
import {
  getActiveTime,
  getCalories,
  getDailyDistance,
  getSleepAnalysis,
  getSteps,
  getWater,
  getWeight,
} from '@/src/services/healthServices'

export const useGetAllHealthData = (startDate?: string, endDate?: string) => {
  const activeTime = useGetActiveTime(startDate, endDate)
  const calories = useGetCalories(startDate, endDate)
  const steps = useGetSteps(startDate, endDate)
  const dailyDistance = useGetDailyDistance(startDate, endDate)
  const sleepAnalysis = useGetSleepAnalysis(startDate, endDate)
  const water = useGetWater(startDate, endDate)
  const weight = useGetWeight()

  return {
    activeTime,
    calories,
    steps,
    dailyDistance,
    sleepAnalysis,
    water,
    weight,
  }
}

export const useGetActiveTime = (startDate?: string, endDate?: string) => {
  return useQuery({
    queryKey: ['activeTime', startDate, endDate],
    queryFn: () => getActiveTime(startDate, endDate),
  })
}

export const useGetCalories = (startDate?: string, endDate?: string) => {
  return useQuery({
    queryKey: ['calories', startDate, endDate],
    queryFn: () => getCalories(startDate, endDate),
  })
}

export const useGetSteps = (startDate?: string, endDate?: string) => {
  return useQuery({
    queryKey: ['stepCount', startDate, endDate],
    queryFn: () => getSteps(startDate, endDate),
  })
}

export const useGetDailyDistance = (startDate?: string, endDate?: string) => {
  return useQuery({
    queryKey: ['dailyDistance', startDate, endDate],
    queryFn: () => getDailyDistance(startDate, endDate),
  })
}

export const useGetSleepAnalysis = (startDate?: string, endDate?: string) => {
  return useQuery({
    queryKey: ['sleepAnalysis', startDate, endDate],
    queryFn: () => getSleepAnalysis(startDate, endDate),
  })
}

export const useGetWater = (startDate?: string, endDate?: string) => {
  return useQuery({
    queryKey: ['water', startDate, endDate],
    queryFn: () => getWater(startDate, endDate),
  })
}

// getWeight doesn’t use dates, but we keep the signature for consistency
export const useGetWeight = (_startDate?: string, _endDate?: string) => {
  return useQuery({
    queryKey: ['weight'],
    queryFn: () => getWeight(),
  })
}
