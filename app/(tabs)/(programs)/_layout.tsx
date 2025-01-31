import { StyleSheet } from 'react-native'
import { Stack, Tabs } from 'expo-router'
import { HapticTab } from '@/src/components/HapticTab'
import { useThemeColor } from '@/src/hooks/useThemeColor'

export default function WorkoutsScreen() {
  const colors = useThemeColor()

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.tabsBackground,
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
        <Tabs.Screen name='my-programs' options={{ title: 'My Programs' }} />
        <Tabs.Screen name='programs' options={{ title: 'All Programs' }} />
      </Tabs>
    </>
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
