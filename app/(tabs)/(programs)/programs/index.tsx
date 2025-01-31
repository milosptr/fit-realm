import { ScreenView } from '@/src/components/ScreenView'
import { ThemedView } from '@/src/components/ThemedView'
import theme from '@/src/constants/theme'
import { RefreshControl, StyleSheet, View } from 'react-native'
import { ThemedText } from '@/src/components/ThemedText'
import { useThemeColor } from '@/src/hooks/useThemeColor'
import { useProgramLibrary } from '@/src/hooks/programs/usePrograms'
import { SingleProgramCard } from '@/src/components/programs/SingleProgramCard'
import { useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { QueryKey } from '@/src/constants/queryKey'

export const AllWorkoutsScreen = () => {
  const queryClient = useQueryClient()
  const [refreshing, setRefreshing] = useState(false)
  const colors = useThemeColor()
  const { data: programs } = useProgramLibrary()

  const handleRefresh = async () => {
    setRefreshing(true)
    await queryClient.invalidateQueries({
      queryKey: [QueryKey.PROGRAM_LIBRARY],
    })
    setRefreshing(false)
  }
  console.log('[Programs]', programs)

  return (
    <ScreenView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
      <ThemedView
        style={[
          theme.containers.generalPadding,
          theme.containers.screenVerticalPadding,
        ]}
      >
        <View style={styles.header}>
          <ThemedText type={'subtitle'}>Programs library</ThemedText>
          <ThemedText style={{ color: colors.inactive }}>
            Select a program to add to your profile.
          </ThemedText>
        </View>
        <View style={styles.programsSection}>
          {programs?.map((program) => (
            <SingleProgramCard key={program.id} program={program} />
          ))}
        </View>
      </ThemedView>
    </ScreenView>
  )
}

const styles = StyleSheet.create({
  header: {
    gap: 6,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workoutsContainer: {
    marginTop: 16,
    marginBottom: 16,
    gap: 24,
  },
  programsSection: {
    marginTop: 12,
    marginBottom: 12,
    gap: 12,
  },
})

export default AllWorkoutsScreen
