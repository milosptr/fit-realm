import { Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'

import { HapticTab } from '@/src/components/HapticTab'
import GoalsIcon from '@/src/assets/icons/GoalsIcon'
import theme from '@/src/constants/theme'
import WorkoutsIcon from '@/src/assets/icons/WorkoutsIcon'
import UserIcon from '@/src/assets/icons/UserIcon'
import CalendarTabIcon from '@/src/assets/icons/CalendarTabIcon'
import { useThemeColor } from '@/src/hooks/useThemeColor'
import ProgramsIcon from '@/src/assets/icons/ProgramsIcon'

export default function TabLayout() {
  const colors = useThemeColor()

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
            backgroundColor: colors.tabsBackground,
            borderTopColor: colors.tabsBorder,
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
        name='(programs)'
        options={{
          title: 'Programs',
          tabBarIcon: ({ color }) => <ProgramsIcon fill={color} />,
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
