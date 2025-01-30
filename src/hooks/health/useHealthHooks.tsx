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
import { QueryKey } from '@/src/constants/queryKey'

export const useGetAllHealthData = (startDate?: Date, endDate?: Date) => {
  const activeTime = useGetActiveTime(startDate, endDate)
  const calories = useGetCalories(startDate, endDate)
  const steps = useGetSteps(startDate, endDate)
  const dailyDistance = useGetDailyDistance(startDate, endDate)
  const sleepAnalysis = useGetSleepAnalysis(startDate, endDate)
  const water = useGetWater(startDate, endDate)
  const weight = useGetWeight(startDate, endDate)

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

export const useGetActiveTime = (startDate?: Date, endDate?: Date) => {
  return useQuery({
    queryKey: [QueryKey.HEALTH_DATA, QueryKey.ACTIVE_TIME, startDate, endDate],
    queryFn: () => getActiveTime(startDate, endDate),
    select: (data) => data?.reduce((acc, curr) => acc + curr.quantity, 0) ?? 0,
  })
}

export const useGetCalories = (startDate?: Date, endDate?: Date) => {
  return useQuery({
    queryKey: [QueryKey.HEALTH_DATA, QueryKey.CALORIES, startDate, endDate],
    queryFn: () => getCalories(startDate, endDate),
    select: (data) => data?.reduce((acc, curr) => acc + curr.quantity, 0) ?? 0,
  })
}

export const useGetSteps = (startDate?: Date, endDate?: Date) => {
  return useQuery({
    queryKey: [QueryKey.HEALTH_DATA, QueryKey.STEPS, startDate, endDate],
    queryFn: () => getSteps(startDate, endDate),
    select: (data) => data?.reduce((acc, curr) => acc + curr.quantity, 0) ?? 0,
  })
}

export const useGetDailyDistance = (startDate?: Date, endDate?: Date) => {
  return useQuery({
    queryKey: [
      QueryKey.HEALTH_DATA,
      QueryKey.DAILY_DISTANCE,
      startDate,
      endDate,
    ],
    queryFn: () => getDailyDistance(startDate, endDate),
    select: (data) => data?.reduce((acc, curr) => acc + curr.quantity, 0) ?? 0,
  })
}

export const useGetSleepAnalysis = (startDate?: Date, endDate?: Date) => {
  return useQuery({
    queryKey: [QueryKey.HEALTH_DATA, QueryKey.SLEEP, startDate, endDate],
    queryFn: () => getSleepAnalysis(startDate, endDate),
    select: (data) => data?.reduce((acc, curr) => acc + curr.value, 0) ?? 0,
  })
}

export const useGetWater = (startDate?: Date, endDate?: Date) => {
  return useQuery({
    queryKey: [QueryKey.HEALTH_DATA, QueryKey.WATER, startDate, endDate],
    queryFn: () => getWater(startDate, endDate),
    select: (data) => data?.reduce((acc, curr) => acc + curr.quantity, 0) ?? 0,
  })
}

export const useGetWeight = (_startDate?: Date, _endDate?: Date) => {
  return useQuery({
    queryKey: [QueryKey.HEALTH_DATA, QueryKey.WEIGHT],
    queryFn: () => getWeight(),
    select: (data) => data?.at(-1)?.quantity ?? 0,
  })
}
