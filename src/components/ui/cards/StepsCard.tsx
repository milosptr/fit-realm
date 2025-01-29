import { CardWithIcon } from '@/src/components/ui/cards/CardWithIcon'
import { LayoutChangeEvent, StyleSheet, View } from 'react-native'
import { useGetStepCount } from '@/src/hooks/health/useGetStepCount'
import theme from '@/src/constants/theme'
import { ThemedText } from '@/src/components/ThemedText'
import { LineChart } from 'react-native-gifted-charts'
import { useState } from 'react'
import StepsIcon from '@/src/assets/icons/StepsIcon'

export const StepsCard = () => {
  const { data } = useGetStepCount()
  const [cardWidth, setCardWidth] = useState(0)
  const chartData = [
    { value: 10 },
    { value: 50 },
    { value: 30 },
    { value: 60 },
    { value: 30 },
  ]

  const onLayout = (event: LayoutChangeEvent) => {
    setCardWidth(event.nativeEvent.layout.width)
  }
  return (
    <CardWithIcon
      title={'Steps'}
      icon={<StepsIcon color={theme.colors.primary} />}
      viewProps={{ style: styles.cardItem }}
    >
      <ThemedText type={'title'} style={[styles.innerText]}>
        {data?.value ?? 0}
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
  innerText: {
    marginTop: 12,
  },
  graph: {
    position: 'relative',
    left: -24,
    bottom: -16,
    width: '124%',
    height: 70,
  },
})
