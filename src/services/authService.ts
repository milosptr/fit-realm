import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from '@firebase/auth'
import { auth } from '@/src/services/firebaseConfig'

const USER_KEY = '@loggedInUser'

export const getOnAuthStateChanged = (): Promise<User | null> => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await AsyncStorage.setItem(USER_KEY, JSON.stringify(user))
        resolve(user)
      } else {
        await AsyncStorage.removeItem(USER_KEY)
        resolve(null)
      }
    })
  })
}

// Initialize user persistence
export const initUserSession = async (): Promise<any | null> => {
  onAuthStateChanged(auth, async (user) => {
    console.log('onAuthStateChanged:', user)
    if (user) {
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(user))
    } else {
      await AsyncStorage.removeItem(USER_KEY)
    }
  })

  return await AsyncStorage.getItem(USER_KEY)
}

// Log in the user
export const login = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(userCredential.user))
  return userCredential.user
}

// Register a new user
export const register = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(userCredential.user))
  return userCredential.user
}

// Log out the user
export const logout = async () => {
  await auth.signOut()
  await AsyncStorage.removeItem(USER_KEY)
}

// Get current Firebase user
export const getCurrentUser = () => {
  return auth.currentUser
}
