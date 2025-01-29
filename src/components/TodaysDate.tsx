import { StyleSheet, Text, View } from 'react-native'
import { ThemedText } from '@/src/components/ThemedText'
import CalendarIcon from '@/src/assets/icons/CalendarIcon'
import theme from '@/src/constants/theme'

export const TodaysDate = () => {
  return (
    <View style={styles.container}>
      <ThemedText weight={'medium'} style={{ fontSize: 14 }}>
        {new Date().toDateString()}
      </ThemedText>
      <CalendarIcon fill={theme.colors.primary} width={20} height={20} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 6,
  },
})
