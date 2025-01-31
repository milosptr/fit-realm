import { Pressable, ScrollView, StyleSheet } from 'react-native'
import { useThemeColor } from '@/src/hooks/useThemeColor'
import { ThemedText } from '@/src/components/ThemedText'

type Props = {
  weeks: number
  activeWeek: number
  onChooseWeek: (week: number) => void
}
export const WeekTabs = ({ weeks, activeWeek, onChooseWeek }: Props) => {
  const colors = useThemeColor()
  const weeksArray = Array.from({ length: weeks }, (_, i) => i + 1)
  const tabStyles = {
    backgroundColor: colors.background,
    borderColor: colors.tabsBorder,
  }

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.weekTabs}
    >
      {weeksArray.map((week) => (
        <Pressable
          key={week}
          style={[styles.weekTab, tabStyles]}
          onPress={() => onChooseWeek(week)}
        >
          <ThemedText
            weight={'semibold'}
            style={{
              color: activeWeek === week ? colors.tint : colors.text,
            }}
          >
            Week {week}
          </ThemedText>
        </Pressable>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  weekTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    paddingVertical: 12,
  },
  weekTab: {
    padding: 8,
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 8,
  },
})
