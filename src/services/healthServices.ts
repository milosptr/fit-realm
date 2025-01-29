import BrokenHealthKit, {
  HealthActivitySummary,
  HealthKitPermissions,
  HealthValue,
} from 'react-native-health'

const AppleHealthKit = require('react-native').NativeModules
  .AppleHealthKit as typeof BrokenHealthKit
AppleHealthKit.Constants = BrokenHealthKit.Constants

const permissions = {
  permissions: {
    read: [
      AppleHealthKit.Constants.Permissions.HeartRate,
      AppleHealthKit.Constants.Permissions.Steps,
      AppleHealthKit.Constants.Permissions.StepCount,
      AppleHealthKit.Constants.Permissions.DistanceWalkingRunning,
      AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
      AppleHealthKit.Constants.Permissions.Water,
      AppleHealthKit.Constants.Permissions.SleepAnalysis,
      AppleHealthKit.Constants.Permissions.Workout,
      AppleHealthKit.Constants.Permissions.Weight,
      AppleHealthKit.Constants.Permissions.ActivitySummary,
    ],
    write: [],
  },
} as HealthKitPermissions

export const initHealthKit = () => {
  console.log('[INFO] Initializing HealthKit...')
  return new Promise<void>((resolve, reject) => {
    AppleHealthKit.initHealthKit(permissions, (error: string) => {
      if (error) {
        console.log('[ERROR] Cannot grant permissions!', error)
        reject(error)
        return
      }
      console.log('[INFO] HealthKit initialized successfully!')
      resolve()
    })
  })
}

/**
 * Reusable helper to call an AppleHealthKit method that takes:
 *   - { startDate, endDate } or an empty object
 *   - (error, results) => void callback
 */
function fetchHealthData<T>(
  fetchFn: (
    params: Record<string, unknown>,
    callback: (error: string, results: T) => void
  ) => void,
  {
    startDate,
    endDate,
    logLabel,
  }: {
    startDate?: string
    endDate?: string
    logLabel: string
  },
  useDateRange: boolean = true
): Promise<T> {
  // If date range is used, provide defaults
  const start =
    startDate || new Date(new Date().setHours(0, 0, 0, 0)).toISOString()
  const end = endDate || new Date().toISOString()

  // If we need date range, pass them in; otherwise pass an empty object
  const params = useDateRange ? { startDate: start, endDate: end } : {}

  return new Promise((resolve, reject) => {
    fetchFn(params, (error: string, results: T) => {
      if (error) {
        console.log(`[ERROR] Failed to fetch ${logLabel}!`, error)
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
}

/**
 * 1. Activity summary with date range
 */
export function getActiveTime(startDate?: string, endDate?: string) {
  return fetchHealthData<HealthActivitySummary[]>(
    AppleHealthKit.getActivitySummary,
    {
      startDate,
      endDate,
      logLabel: 'activity summary',
    }
  )
}

/**
 * 2. Active energy burned (calories) with date range
 */
export function getCalories(startDate?: string, endDate?: string) {
  return fetchHealthData<HealthValue[]>(AppleHealthKit.getActiveEnergyBurned, {
    startDate,
    endDate,
    logLabel: 'calories',
  })
}

/**
 * 3. Steps count with date range
 */
export function getSteps(startDate?: string, endDate?: string) {
  return fetchHealthData<HealthValue>(AppleHealthKit.getStepCount, {
    startDate,
    endDate,
    logLabel: 'steps',
  })
}

/**
 * 4. Daily distance with date range
 */
export function getDailyDistance(startDate?: string, endDate?: string) {
  return fetchHealthData<HealthValue[]>(
    AppleHealthKit.getDailyDistanceWalkingRunningSamples,
    {
      startDate,
      endDate,
      logLabel: 'daily distance',
    }
  )
}

/**
 * 5. Sleep samples with date range
 */
export function getSleepAnalysis(startDate?: string, endDate?: string) {
  return fetchHealthData<HealthValue[]>(AppleHealthKit.getSleepSamples, {
    startDate,
    endDate,
    logLabel: 'sleep samples',
  })
}

/**
 * 6. Water intake with date range
 */
export function getWater(startDate?: string, endDate?: string) {
  return fetchHealthData<HealthValue>(AppleHealthKit.getWater, {
    startDate,
    endDate,
    logLabel: 'water samples',
  })
}

/**
 * 7. Weight - no date range needed, so pass `useDateRange: false`
 */
export function getWeight() {
  return fetchHealthData<HealthValue>(
    AppleHealthKit.getLatestWeight,
    {
      logLabel: 'weight',
    },
    false
  )
}
