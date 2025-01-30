import { UserWorkoutType, WorkoutType } from '@/src/types/firestoreTypes'
import { ThemedView } from '@/src/components/ThemedView'
import { ThemedText } from '@/src/components/ThemedText'
import { Image, StyleSheet, View } from 'react-native'
import { defaultWorkoutImage } from '@/src/constants/images'
import { useThemeColor } from '@/src/hooks/useThemeColor'

const isWorkoutType = (
  props: WorkoutType | UserWorkoutType
): props is WorkoutType => {
  return 'name' in props
}

export const SimpleWorkoutCard = (props: WorkoutType | UserWorkoutType) => {
  const colors = useThemeColor()
  const background = {
    backgroundColor: colors.card,
  }

  const name = isWorkoutType(props) ? props.name : props.workout

  return (
    <ThemedView style={[background, styles.container]}>
      <Image
        source={{ uri: props?.image ?? defaultWorkoutImage }}
        style={{
          width: '100%',
          aspectRatio: '2/1',
          borderRadius: 8,
        }}
        resizeMode='cover'
      />
      <View style={styles.textContainer}>
        <ThemedText size={'lg'} weight={'medium'}>
          {name}
        </ThemedText>
        <ThemedText>{props.category}</ThemedText>
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRadius: 8,
  },
  textContainer: {
    flexDirection: 'column',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
})
