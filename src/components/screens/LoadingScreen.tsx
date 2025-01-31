import { ScreenView } from '@/src/components/ScreenView'
import { ActivityIndicator, View } from 'react-native'
import theme from '@/src/constants/theme'

export const LoadingScreen = () => {
  return (
    <ScreenView withScroll={false}>
      <View style={{ height: '100%', justifyContent: 'center' }}>
        <ActivityIndicator size='large' color={theme.colors.primary} />
      </View>
    </ScreenView>
  )
}
