import { Stack } from 'expo-router'
import { useThemeColor } from '@/src/hooks/useThemeColor'

export const Layout = () => {
  const colors = useThemeColor()
  return (
    <Stack>
      <Stack.Screen
        name={'index'}
        options={{ title: 'All Programs', headerShown: false }}
      />
      <Stack.Screen
        name={'[program_id]'}
        options={{
          headerTintColor: colors.tint,
          headerStyle: {
            backgroundColor: colors.tabsBackground,
          },
          headerBackButtonDisplayMode: 'minimal',
        }}
      />
    </Stack>
  )
}

export default Layout
