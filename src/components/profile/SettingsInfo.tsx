import { ThemedText } from '@/src/components/ThemedText'
import { StyleSheet, View } from 'react-native'
import theme from '@/src/constants/theme'
import { version } from '@/package.json'

export const SettingsInfo = () => {
  return (
    <View style={styles.sectionContainer}>
      <ThemedText size={'lg'} weight={'semibold'}>
        Settings
      </ThemedText>
      <View>
        <View style={styles.sectionSettingItem}>
          <ThemedText>Subscription</ThemedText>
          <ThemedText>Free</ThemedText>
        </View>
        <View style={styles.sectionSettingItem}>
          <ThemedText>App Language</ThemedText>
          <ThemedText>English</ThemedText>
        </View>
        <View style={styles.sectionSettingItem}>
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
    borderTopColor: theme.colors.lightGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  sectionSettingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGray,
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
})
