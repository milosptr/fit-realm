import { Tabs } from 'expo-router'
import React from 'react'
import { Platform, useColorScheme } from 'react-native'

import { HapticTab } from '@/src/components/HapticTab'
import TabBarBackground from '@/src/components/ui/tabs/TabBarBackground'
import GoalsIcon from '@/src/assets/icons/GoalsIcon'
import HomeIcon from '@/src/assets/icons/HomeIcon'
import theme from '@/src/constants/theme'
import WorkoutsIcon from '@/src/assets/icons/WorkoutsIcon'
import UserIcon from '@/src/assets/icons/UserIcon'
import CalendarTabIcon from '@/src/assets/icons/CalendarTabIcon'

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const colors = theme.colors[colorScheme || 'light']

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.tint,
        tabBarInactiveTintColor: colors.inactive,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: theme.colors.white,
          },
          default: {
            backgroundColor: theme.colors.white,
          },
        }),
      }}
    >
      <Tabs.Screen
        name='today/index'
        options={{
          title: 'Today',
          tabBarIcon: ({ color }) => <CalendarTabIcon fill={color} />,
        }}
      />
      <Tabs.Screen
        name='(workouts)'
        options={{
          title: 'Workouts',
          tabBarIcon: ({ color }) => <WorkoutsIcon fill={color} />,
        }}
      />
      <Tabs.Screen
        name='goals/index'
        options={{
          title: 'Goals',
          tabBarIcon: ({ color }) => <GoalsIcon fill={color} />,
        }}
      />
      <Tabs.Screen
        name='profile/index'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <UserIcon fill={color} />,
        }}
      />
    </Tabs>
  )
}
