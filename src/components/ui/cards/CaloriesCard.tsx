import { CardWithIcon } from '@/src/components/ui/cards/CardWithIcon'
import { LayoutChangeEvent, StyleSheet, View } from 'react-native'
import { useGetActiveEnergyBurned } from '@/src/hooks/health/useGetActiveEnergyBurned'
import { ThemedText } from '@/src/components/ThemedText'
import theme from '@/src/constants/theme'
import { LineChart } from 'react-native-gifted-charts'
import { useState } from 'react'
import CaloriesIcon from '@/src/assets/icons/CaloriesIcon'

export const CaloriesCard = () => {
  const { data } = useGetActiveEnergyBurned()
  const [cardWidth, setCardWidth] = useState(0)

  const calories = data?.reduce((acc, curr) => acc + curr.value, 0) ?? 0
  const chartData = data?.map((c) => ({ value: c?.value ?? 0 }))

  const onLayout = (event: LayoutChangeEvent) => {
    setCardWidth(event.nativeEvent.layout.width)
  }

  return (
    <CardWithIcon
      title={'Calories'}
      icon={<CaloriesIcon color={theme.colors.primary} />}
      viewProps={{ style: styles.cardItem }}
    >
      <ThemedText type={'title'} weight={'semibold'} style={[styles.innerText]}>
        {calories}
      </ThemedText>
      <View onLayout={onLayout} style={styles.graph}>
        <LineChart
          adjustToWidth
          areaChart
          data={chartData}
          startFillColor={theme.colors.primary}
          endFillColor={theme.colors.primaryLight}
          startOpacity={0.8}
          endOpacity={0.3}
          curved
          hideYAxisText
          hideDataPoints
          hideAxesAndRules
          parentWidth={cardWidth}
          height={70}
          initialSpacing={0}
        />
      </View>
    </CardWithIcon>
  )
}

const styles = StyleSheet.create({
  cardItem: {
    position: 'relative',
    width: '48%',
    overflow: 'hidden',
  },
  graph: {
    position: 'relative',
    left: -24,
    bottom: -16,
    width: '124%',
    height: 70,
  },
  innerText: {
    marginTop: 12,
  },
})
