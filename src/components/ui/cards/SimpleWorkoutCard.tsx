import { UserWorkoutType, WorkoutType } from '@/src/types/firestoreTypes'
import { ThemedView } from '@/src/components/ThemedView'
import { ThemedText } from '@/src/components/ThemedText'
import { Image, StyleSheet, useColorScheme, View } from 'react-native'
import theme from '@/src/constants/theme'
import { defaultWorkoutImage } from '@/src/constants/images'

const isWorkoutType = (
  props: WorkoutType | UserWorkoutType
): props is WorkoutType => {
  return 'name' in props
}

export const SimpleWorkoutCard = (props: WorkoutType | UserWorkoutType) => {
  const colorScheme = useColorScheme()
  const background = {
    backgroundColor: theme.colors[colorScheme ?? 'light'].card,
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
