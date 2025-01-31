import { ThemedText } from '@/src/components/ThemedText'
import { StyleSheet, View } from 'react-native'
import theme from '@/src/constants/theme'
import { version } from '@/package.json'
import { useThemeColor } from '@/src/hooks/useThemeColor'

export const SettingsInfo = () => {
  const colors = useThemeColor()
  const borderColor = { borderBottomColor: colors.tabsBorder }

  return (
    <View style={[styles.sectionContainer, borderColor]}>
      <ThemedText size={'lg'} weight={'semibold'}>
        Settings
      </ThemedText>
      <View>
        <View style={[styles.sectionSettingItem, borderColor]}>
          <ThemedText>Subscription</ThemedText>
          <ThemedText>Free</ThemedText>
        </View>
        <View style={[styles.sectionSettingItem, borderColor]}>
          <ThemedText>App Language</ThemedText>
          <ThemedText>English</ThemedText>
        </View>
        <View style={[styles.sectionSettingItem, borderColor]}>
          <ThemedText>App Version</ThemedText>
          <ThemedText>{version}</ThemedText>
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
  sectionSettingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
})
