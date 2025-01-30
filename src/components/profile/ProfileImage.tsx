import { Image, StyleSheet, View, ViewProps } from 'react-native'
import { useThemeColor } from '@/src/hooks/useThemeColor'

export const ProfileImage = (props: ViewProps) => {
  const colors = useThemeColor()

  return (
    <View {...props} style={[styles.imageContainer, props.style]}>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={{
          borderRadius: 50,
          backgroundColor: 'white',
          width: 100,
          height: 100,
          borderWidth: 4,
          borderColor: colors.background,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
