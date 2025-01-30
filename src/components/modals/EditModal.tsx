import { Modal, Pressable, SafeAreaView, StyleSheet, View } from 'react-native'
import { ThemedText } from '@/src/components/ThemedText'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useThemeColor } from '@/src/hooks/useThemeColor'
import ArrowLeftIcon from '@/src/assets/icons/ArrowLeftIcon'

type Props = {
  visible: boolean
  onClose: () => void
  onSave: () => void
  children: React.ReactNode
}
export const EditModal = ({
  visible = false,
  children,
  onSave,
  onClose,
}: Props) => {
  const colors = useThemeColor()

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType='slide'
      onRequestClose={onClose}
    >
      <SafeAreaProvider style={{ backgroundColor: colors.background }}>
        <SafeAreaView>
          <View
            style={[styles.header, { borderBottomColor: colors.tabsBorder }]}
          >
            <Pressable onPress={onClose} hitSlop={20} style={styles.goBack}>
              <ArrowLeftIcon fill={colors.tint} strokeWidth={1} />
              <ThemedText
                size={'md'}
                weight={'semibold'}
                style={{ color: colors.tint, marginTop: 2 }}
              >
                Back
              </ThemedText>
            </Pressable>
            <Pressable onPress={onSave} hitSlop={20}>
              <ThemedText
                size={'md'}
                weight={'semibold'}
                style={{ color: colors.tint }}
              >
                Done
              </ThemedText>
            </Pressable>
          </View>
          <View style={styles.mainContainer}>{children}</View>
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainContainer: {
    padding: 12,
    minHeight: '100%',
  },
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
