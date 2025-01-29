import { ThemedText } from '@/src/components/ThemedText'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import theme from '@/src/constants/theme'
import { useState } from 'react'
import { SelectPicker } from '@/src/components/ui/picker/SelectPicker'
import { GoalsListItem } from '@/src/types/constantTypes'
import { goalOptions } from '@/src/constants/goals'
import { SelectOption } from '@/src/types/componentTypes'

type Props = {
  goal: GoalsListItem
  setValue: (value: string) => void
}

export const GoalItem = ({ goal, setValue }: Props) => {
  const [edit, setEdit] = useState(false)
  const options = goalOptions[goal.key].map((o) => {
    return {
      label: `${o.toString()} ${goal.unit}`,
      value: o.toString(),
    } as SelectOption
  })

  return (
    <View style={styles.goalItem}>
      <ThemedText>{goal.title}</ThemedText>
      <Pressable onPress={() => setEdit(true)}>
        <ThemedText
          weight={'medium'}
          style={{
            color: theme.colors[goal.__dirty ? 'warning' : 'primary'],
          }}
        >
          {goal.value || 'Set goal'} {!!goal.value ? goal.unit : ''}
        </ThemedText>
      </Pressable>
      <SelectPicker
        label={`Set ${goal.title.toLowerCase()} goal`}
        visible={edit}
        options={options}
        selectedValue={goal?.value?.toString()}
        onValueChange={setValue}
        onClose={() => setEdit(false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGray,
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
})
