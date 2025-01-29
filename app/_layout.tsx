import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import 'react-native-reanimated'

import { useColorScheme } from '@/src/hooks/useColorScheme'
import { initHealthKit } from '@/src/services/healthServices'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from '@/src/providers/AuthProvider'
import { fonts } from '@/src/constants/theme'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()
const queryClient = new QueryClient()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    Onest: require('@/src/assets/fonts/Onest-Regular.ttf'),
    'Onest-Medium': require('@/src/assets/fonts/Onest-Medium.ttf'),
    'Onest-Bold': require('@/src/assets/fonts/Onest-Bold.ttf'),
    'Onest-Heavy': require('@/src/assets/fonts/Onest-ExtraBold.ttf'),
  })

  const theme = {
    ...(colorScheme === 'dark' ? DarkTheme : DefaultTheme),
    ...fonts,
  }

  useEffect(() => {
    try {
      const initializeHealthKit = async () => {
        await initHealthKit()
      }

      initializeHealthKit()
    } catch (error) {
      console.error(
        '[ERROR] HealthKit Initialization or Data Fetch Failed:',
        error
      )
    }
  }, [])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider value={theme}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='(tabs)' />
            <Stack.Screen name='+not-found' />
          </Stack>
          <StatusBar style='auto' />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}
