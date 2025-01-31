import { ScreenView } from '@/src/components/ScreenView'
import { ThemedView } from '@/src/components/ThemedView'
import { StyleSheet, Text, View } from 'react-native'
import { useCurrentAuthUser } from '@/src/hooks/useAuth'
import theme from '@/src/constants/theme'
import { ThemedText } from '@/src/components/ThemedText'
import { Button } from '@/src/components/ui/Button'
import { useThemeColor } from '@/src/hooks/useThemeColor'
import { useRouter } from 'expo-router'

export const MyProgramsScreen = () => {
  const router = useRouter()
  const { data: user } = useCurrentAuthUser()
  const colors = useThemeColor()

  return (
    <ScreenView>
      <ThemedView
        style={[
          theme.containers.generalPadding,
          theme.containers.screenVerticalPadding,
        ]}
      >
        <View style={styles.titleContainer}>
          <ThemedText type={'subtitle'}>Programs</ThemedText>
        </View>
        <View
          style={[
            styles.noWorkoutsContainer,
            { borderColor: colors.tabsBorder },
          ]}
        >
          <ThemedText style={{ color: colors.inactive }}>
            You don't have any programs yet.
          </ThemedText>
          <ThemedText style={{ color: colors.inactive }}>
            Create or choose one to get started.
          </ThemedText>
        </View>
        <View style={styles.buttonsSection}>
          <Button text={'Create custom program'} />
          <Button
            variant={'primary-outline'}
            text={'Choose program'}
            onPress={() => {
              router.push('/programs')
            }}
          />
        </View>
      </ThemedView>
    </ScreenView>
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
    borderBottomWidth: 1,
  },
  noWorkoutsContainer: {
    marginTop: 12,
    marginBottom: 12,
    paddingBottom: 24,
    gap: 12,
    borderBottomWidth: 1,
  },
  addWorkoutButton: {
    paddingHorizontal: 16,
    height: 40,
  },
  buttonsSection: {
    marginTop: 12,
    gap: 12,
  },
})

export default MyProgramsScreen
