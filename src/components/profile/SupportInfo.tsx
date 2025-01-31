import { ThemedText } from '@/src/components/ThemedText'
import { StyleSheet, View } from 'react-native'
import theme from '@/src/constants/theme'
import ArrowRightIcon from '@/src/assets/icons/ArrowRightIcon'
import { useThemeColor } from '@/src/hooks/useThemeColor'

export const SupportInfo = () => {
  const colors = useThemeColor()
  const borderColor = { borderBottomColor: colors.tabsBorder }

  return (
    <View style={[styles.sectionContainer, borderColor]}>
      <ThemedText size={'lg'} weight={'semibold'}>
        Support
      </ThemedText>
      <View>
        <View style={[styles.sectionSupportItem, borderColor]}>
          <ThemedText>Help Center</ThemedText>
          <ArrowRightIcon fill={colors.text} />
        </View>
        <View style={[styles.sectionSupportItem, borderColor]}>
          <ThemedText>Terms of Use</ThemedText>
          <ArrowRightIcon fill={colors.text} />
        </View>
        <View style={[styles.sectionSupportItem, borderColor]}>
          <ThemedText>Privacy Policy</ThemedText>
          <ArrowRightIcon fill={colors.text} />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  sectionContainer: {
    paddingVertical: 12,
    gap: 6,
  },
  sectionItem: {
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  sectionSupportItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
})
