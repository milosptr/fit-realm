import { initializeApp } from '@firebase/app'
import { getReactNativePersistence, initializeAuth } from '@firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getFirestore } from '@firebase/firestore'

export const firebaseConfig = {
  apiKey: '[key]',
  authDomain: '[key]',
  projectId: '[key]',
  storageBucket: '[key]',
  messagingSenderId: '[key]',
  appId: '[key]',
  measurementId: '[key]',
}

export const app = initializeApp(firebaseConfig)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})
export const db = getFirestore(app)
