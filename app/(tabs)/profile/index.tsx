import { Text } from 'react-native'
import { ThemedView } from '@/src/components/ThemedView'
import { ScreenView } from '@/src/components/ScreenView'

export const ProfileScreen = () => {
  return (
    <ScreenView>
      <ThemedView style={{ height: '100%' }}>
        <Text>Profile</Text>
      </ThemedView>
    </ScreenView>
  )
}

export default ProfileScreen
