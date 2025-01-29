import { SafeAreaView, ScrollView } from 'react-native'
import { ThemedView } from '@/src/components/ThemedView'
import { SafeAreaProvider } from 'react-native-safe-area-context'

type Props = {
  children: React.ReactNode
  withScroll?: boolean
}

export const ScreenView = ({ withScroll = true, children }: Props) => {
  return (
    <SafeAreaProvider>
      <ThemedView style={{ paddingBottom: 72 }}>
        <SafeAreaView>
          {withScroll ? <ScrollView>{children}</ScrollView> : children}
        </SafeAreaView>
      </ThemedView>
    </SafeAreaProvider>
  )
}
