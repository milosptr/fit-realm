import { useLocalSearchParams } from 'expo-router/build/hooks'
import { ScreenView } from '@/src/components/ScreenView'
import { ThemedText } from '@/src/components/ThemedText'
import { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { useProgramById } from '@/src/hooks/programs/usePrograms'
import { LoadingScreen } from '@/src/components/screens/LoadingScreen'
import { ThemedView } from '@/src/components/ThemedView'
import { Image, StyleSheet, View } from 'react-native'
import theme from '@/src/constants/theme'
import { defaultWorkoutImage } from '@/src/constants/images'
import { useThemeColor } from '@/src/hooks/useThemeColor'
import CalendarWeekIcon from '@/src/assets/icons/CalendarWeekIcon'
import { WeekTabs } from '@/src/components/programs/WeekTabs'

export const SingleProgramScreen = () => {
  const colors = useThemeColor()
  const { program_id } = useLocalSearchParams<{ program_id: string }>()
  const navigation = useNavigation()
  const { data: program } = useProgramById(program_id)
  const [activeWeek, setActiveWeek] = useState(1)

  useEffect(() => {
    console.log('[SingleProgramScreen]', program)
    navigation.setOptions({
      title: program?.name,
    })
  }, [navigation, program])

  if (!program) return <LoadingScreen />

  return (
    <ScreenView>
      <Image
        source={{ uri: program.cover_image || defaultWorkoutImage }}
        style={styles.image}
      />
      <ThemedView
        style={[
          theme.containers.generalPadding,
          theme.containers.screenVerticalPadding,
        ]}
      >
        <View style={[styles.infoContainer]}>
          <ThemedText>{program.difficulty}</ThemedText>
          <View style={styles.infoItem}>
            <CalendarWeekIcon
              width={20}
              fill={colors.tint}
              style={styles.infoItemIcon}
            />
            <ThemedText>
              {program.duration_weeks} weeks / {program.frequency_per_week} days
              per week
            </ThemedText>
          </View>
        </View>
        <View
          style={[
            styles.descriptionContainer,
            { borderColor: colors.tabsBorder },
          ]}
        >
          <ThemedText style={{ color: colors.inactive }}>
            {program.full_description}
          </ThemedText>
        </View>
        <WeekTabs
          weeks={program.duration_weeks}
          activeWeek={activeWeek}
          onChooseWeek={(w) => setActiveWeek(w)}
        />
      </ThemedView>
    </ScreenView>
  )
}

const styles = StyleSheet.create({
  descriptionContainer: {
    borderBottomWidth: 1,
    paddingBottom: 12,
    marginBottom: 12,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingBottom: 6,
  },
  infoItemIcon: {
    marginBottom: 2,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
})

export default SingleProgramScreen
