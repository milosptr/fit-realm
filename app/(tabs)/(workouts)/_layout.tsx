import { StyleSheet, useColorScheme } from 'react-native'
import theme from '@/src/constants/theme'
import { Tabs } from 'expo-router'
import { HapticTab } from '@/src/components/HapticTab'

export default function WorkoutsScreen() {
  const colorScheme = useColorScheme()
  const colors = theme.colors[colorScheme || 'light']

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.white,
        },
        tabBarButton: HapticTab,
        tabBarActiveTintColor: colors.tint,
        tabBarInactiveTintColor: colors.inactive,
        tabBarPosition: 'top',
        tabBarIcon: () => null,
        tabBarIconStyle: {
          width: 0,
          height: 0,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          lineHeight: 32,
        },
      }}
    >
      <Tabs.Screen name='all-workouts' options={{ title: 'All Workouts' }} />
      <Tabs.Screen name='my-workouts' options={{ title: 'My Workouts' }} />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workoutsContainer: {
    marginTop: 12,
    marginBottom: 12,
    gap: 12,
  },
  addWorkoutButton: {
    paddingHorizontal: 16,
    height: 40,
  },
})
