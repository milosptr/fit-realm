import HealthKit, {
  HKQuantityTypeIdentifier,
  HKCategoryTypeIdentifier,
  HKAuthorizationRequestStatus,
  queryQuantitySamples,
  queryCategorySamples,
  GenericQueryOptions,
} from '@kingstinct/react-native-healthkit'

const permissions = {
  read: [
    HKQuantityTypeIdentifier.heartRate,
    HKQuantityTypeIdentifier.stepCount,
    HKQuantityTypeIdentifier.distanceWalkingRunning,
    HKQuantityTypeIdentifier.activeEnergyBurned,
    HKQuantityTypeIdentifier.dietaryWater,
    HKCategoryTypeIdentifier.sleepAnalysis,
    HKQuantityTypeIdentifier.bodyMass,
    HKQuantityTypeIdentifier.appleExerciseTime,
  ],
  write: [],
}

export const initHealthKit = async (): Promise<void> => {
  try {
    console.log('[INFO] Initializing HealthKit...')
    const status = await HealthKit.getRequestStatusForAuthorization(
      permissions.read
    )
    if (status === HKAuthorizationRequestStatus.unnecessary) {
      console.log('[INFO] Already authorized!')
      return
    }
    await HealthKit.requestAuthorization(permissions.read, permissions.write)
    console.log('[INFO] HealthKit initialized successfully!')
  } catch (error) {
    console.error('[ERROR] Cannot grant permissions!', error)
    throw error
  }
}

const getQueryOptions = (
  startDate?: Date,
  endDate?: Date,
  useDateRange = true
): GenericQueryOptions => {
  const start = startDate || new Date(new Date().setHours(0, 0, 0, 0))
  const end = endDate || new Date()
  return useDateRange ? { from: start, to: end } : {}
}

export const getActiveTime = async (startDate?: Date, endDate?: Date) => {
  try {
    const options = getQueryOptions(startDate, endDate)
    return await queryQuantitySamples(
      HKQuantityTypeIdentifier.appleExerciseTime,
      options
    )
  } catch (e) {
    console.log('[ERROR] getActiveTime failed to fetch samples!')
    return []
  }
}

export const getCalories = async (startDate?: Date, endDate?: Date) => {
  try {
    const options = getQueryOptions(startDate, endDate)
    return await queryQuantitySamples(
      HKQuantityTypeIdentifier.activeEnergyBurned,
      options
    )
  } catch (e) {
    console.log('[ERROR] getCalories failed to fetch samples!')
    return []
  }
}

export const getSteps = async (startDate?: Date, endDate?: Date) => {
  try {
    const options = getQueryOptions(startDate, endDate)
    return await queryQuantitySamples(
      HKQuantityTypeIdentifier.stepCount,
      options
    )
  } catch (e) {
    console.log('[ERROR] getSteps failed to fetch samples!')
    return []
  }
}

export const getDailyDistance = async (startDate?: Date, endDate?: Date) => {
  try {
    const options = getQueryOptions(startDate, endDate)
    return await queryQuantitySamples(
      HKQuantityTypeIdentifier.distanceWalkingRunning,
      options
    )
  } catch (e) {
    console.log('[ERROR] getDailyDistance failed to fetch samples!')
    return []
  }
}

export const getSleepAnalysis = async (startDate?: Date, endDate?: Date) => {
  try {
    const options = getQueryOptions(startDate, endDate)
    return await queryCategorySamples(
      HKCategoryTypeIdentifier.sleepAnalysis,
      options
    )
  } catch (e) {
    console.log('[ERROR] getSleepAnalysis failed to fetch samples!')
    return []
  }
}

export const getWater = async (startDate?: Date, endDate?: Date) => {
  try {
    const options = getQueryOptions(startDate, endDate)
    return await queryQuantitySamples(
      HKQuantityTypeIdentifier.dietaryWater,
      options
    )
  } catch (e) {
    console.log('[ERROR] getWater failed to fetch samples!')
    return []
  }
}

export const getWeight = async (startDate?: Date, endDate?: Date) => {
  try {
    const options = getQueryOptions(startDate, endDate)
    return await queryQuantitySamples(
      HKQuantityTypeIdentifier.bodyMass,
      options
    )
  } catch (e) {
    console.log('[ERROR] getWeight failed to fetch samples!')
    return []
  }
}
