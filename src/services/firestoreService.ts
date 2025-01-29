import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from '@firebase/firestore'
import { db } from '@/src/services/firebaseConfig'
import {
  GoalData,
  UserGoalInput,
  UserWorkoutType,
  WorkoutType,
} from '@/src/types/firestoreTypes'

export const getCollectionData = async (path: string) => {
  const docs = await getDocs(collection(db, path))
  return docs.docs.map((doc) => doc.data()) as WorkoutType[]
}

export const getCollectionDataByUserId = async (
  path: string,
  userId: string
) => {
  const q = query(collection(db, path), where('uid', '==', userId.toString()))
  const docs = await getDocs(q)
  return docs.docs.map((doc) => doc.data()) as UserWorkoutType[]
}

export const getUserGoals = async (userId?: string): Promise<GoalData[]> => {
  if (!userId) return []

  const q = query(
    collection(db, 'UserGoals'),
    where('uid', '==', userId.toString())
  )
  const docs = await getDocs(q)
  return docs.docs.map((doc) => doc.data()) as GoalData[]
}

export const saveUserGoal = async ({ data, ...input }: UserGoalInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      await setDoc(doc(db, 'UserGoals', `${input.uid}_${input.key}`), {
        ...input,
        unit: data.unit,
      })
      resolve(data)
    } catch (reason) {
      reject(reason)
    }
  })
}
