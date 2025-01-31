import { Program } from '@/src/types/firestoreTypes'
import { CardWithIcon } from '@/src/components/ui/cards/CardWithIcon'
import { ThemedText } from '@/src/components/ThemedText'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { useThemeColor } from '@/src/hooks/useThemeColor'
import { defaultWorkoutImage } from '@/src/constants/images'
import { useRouter } from 'expo-router'

type Props = {
  program: Program
}

export const SingleProgramCard = ({ program }: Props) => {
  const colors = useThemeColor()
  const router = useRouter()

  const navigateToProgram = () => {
    router.push(`/programs/${program.id}`)
  }

  return (
    <Pressable onPress={navigateToProgram}>
      <CardWithIcon viewProps={{ style: { padding: 0 } }}>
        <View>
          <Image
            source={{
              uri: program?.cover_image || defaultWorkoutImage,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.container}>
          <ThemedText size={'lg'} weight={'semibold'}>
            {program.name}
          </ThemedText>
          <View style={styles.description}>
            <ThemedText>{program.description}</ThemedText>
          </View>
          <View
            style={[styles.infoContainer, { borderColor: colors.tabsBorder }]}
          >
            <View style={styles.infoItem}>
              <ThemedText weight={'semibold'}>{program.difficulty}</ThemedText>
            </View>
            <View style={styles.infoItem}>
              <ThemedText weight={'semibold'}>
                {program.duration_weeks}
              </ThemedText>
              <ThemedText>weeks</ThemedText>
            </View>
            <View style={styles.infoItem}>
              <ThemedText weight={'semibold'}>
                {program.frequency_per_week}
              </ThemedText>
              <ThemedText>days per week</ThemedText>
            </View>
          </View>
        </View>
      </CardWithIcon>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: '5/2',
    borderRadius: 8,
  },
  container: {
    padding: 12,
  },
  description: {
    marginTop: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    paddingTop: 12,
    marginTop: 12,
    gap: 12,
  },
  infoItem: {
    flexDirection: 'row',
    gap: 3,
  },
})
