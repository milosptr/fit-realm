import { Pressable, StyleSheet } from 'react-native'
import { ThemedView } from '@/src/components/ThemedView'
import { ScreenView } from '@/src/components/ScreenView'
import { ThemedText } from '@/src/components/ThemedText'
import theme from '@/src/constants/theme'
import { ProfileInfo } from '@/src/components/profile/ProfileInfo'
import { SettingsInfo } from '@/src/components/profile/SettingsInfo'
import { SupportInfo } from '@/src/components/profile/SupportInfo'

export const ProfileScreen = () => {
  return (
    <ScreenView withScroll={false}>
      <ThemedView style={theme.containers.generalPadding}>
        <ProfileInfo />
        <SettingsInfo />
        <SupportInfo />
        <Pressable>
          {({ pressed }) => (
            <ThemedText
              size={'lg'}
              style={[
                styles.singOutButton,
                pressed && styles.singOutButtonPressed,
              ]}
            >
              Sign out
            </ThemedText>
          )}
        </Pressable>
      </ThemedView>
    </ScreenView>
  )
}

const styles = StyleSheet.create({
  profileCard: {
    position: 'relative',
    padding: 12,
    paddingTop: 62,
    marginTop: 50,
    borderRadius: 8,
    gap: 6,
  },
  profileImage: {
    position: 'absolute',
    left: 0,
    top: -50,
    width: '100%',
    justifyContent: 'center',
  },
  singOutButton: {
    marginTop: 20,
    textAlign: 'center',
    color: theme.colors.danger,
  },
  singOutButtonPressed: {
    opacity: 0.5,
  },
})

export default ProfileScreen
