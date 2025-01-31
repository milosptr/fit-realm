import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from '@firebase/firestore'
import { db } from '@/src/services/firebaseConfig'
import {
  GoalData,
  UserGoalInput,
  UserProfileInfo,
  UserProfileInfoInput,
  UserWorkoutType,
  WorkoutType,
} from '@/src/types/firestoreTypes'

export const getCollectionData = async <T>(path: string): Promise<T> => {
  const docs = await getDocs(collection(db, path))
  return docs.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as T
}

export const getDocumentData = async <T>(
  path: string,
  id: string
): Promise<T> => {
  const docRef = doc(db, path, id)
  const docSnap = await getDoc(docRef)
  return docSnap.data() as T
}

export const getCollectionDataByUserId = async (
  path: string,
  userId: string
) => {
  const q = query(collection(db, path), where('uid', '==', userId.toString()))
  const docs = await getDocs(q)
  return docs.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
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

export const getUserProfile = async (userId?: string) => {
  if (!userId) return []

  const q = query(collection(db, 'UserProfile'), where('uid', '==', userId))
  const docs = await getDocs(q)
  return docs.docs.map((doc) => doc.data())
}

export const saveUserProfileInfo = async (
  data: UserProfileInfoInput
): Promise<UserProfileInfo> => {
  return new Promise(async (resolve, reject) => {
    try {
      await setDoc(doc(db, 'UserProfile', `${data.uid}_${data.key}`), data)
      resolve(data)
    } catch (reason) {
      reject(reason)
    }
  })
}
