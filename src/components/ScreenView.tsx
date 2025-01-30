import { RefreshControlProps, SafeAreaView, ScrollView } from 'react-native'
import { ThemedView } from '@/src/components/ThemedView'
import { SafeAreaProvider } from 'react-native-safe-area-context'

type Props = {
  children: React.ReactNode
  withScroll?: boolean
  refreshControl?: React.ReactElement<RefreshControlProps>
}

export const ScreenView = ({
  withScroll = true,
  refreshControl = undefined,
  children,
}: Props) => {
  return (
    <SafeAreaProvider>
      <ThemedView style={{ paddingBottom: 72, minHeight: '100%' }}>
        <SafeAreaView>
          {withScroll ? (
            <ScrollView
              refreshControl={refreshControl}
              style={{ minHeight: '100%' }}
            >
              {children}
            </ScrollView>
          ) : (
            children
          )}
        </SafeAreaView>
      </ThemedView>
    </SafeAreaProvider>
  )
}
