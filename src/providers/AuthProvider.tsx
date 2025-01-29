import React, { createContext, useContext, useEffect } from 'react'
import { useCurrentAuthUser } from '@/src/hooks/useAuth'
import { SafeAreaView, Text } from 'react-native'
import { usePathname, useRouter } from 'expo-router'

const AuthContext = createContext<any>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const pathname = usePathname()
  const { data: user, isLoading } = useCurrentAuthUser()

  useEffect(() => {
    const isLogin = pathname.includes('/login')
    const isIndex = pathname === '/'

    if (!isLoading && !user && !isLogin) {
      router.replace('/login')
    } else if (!isLoading && user && (isLogin || isIndex)) {
      router.replace('/(tabs)/today')
    }
  }, [user, isLoading, pathname])

  if (isLoading) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)
