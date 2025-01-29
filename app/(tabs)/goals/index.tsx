import { FlatList, StyleSheet, View } from 'react-native'
import { ThemedView } from '@/src/components/ThemedView'
import { ScreenView } from '@/src/components/ScreenView'
import { ThemedText } from '@/src/components/ThemedText'
import theme from '@/src/constants/theme'
import { goalsList } from '@/src/constants/goals'
import { GoalItem } from '@/src/components/goals/GoalItem'
import { useEffect, useState } from 'react'
import { GoalsListItem } from '@/src/types/constantTypes'
import { Button } from '@/src/components/ui/Button'
import { useCurrentAuthUser } from '@/src/hooks/useAuth'
import { useUserGoals, useUserGoalsMutation } from '@/src/hooks/useGoals'
import { mutateGoalData } from '@/src/utils/goalHelpers'
import { useQueryClient } from '@tanstack/react-query'

export const GoalsScreen = () => {
  const queryClient = useQueryClient()
  const { data: user } = useCurrentAuthUser()
  const { data: userGoals } = useUserGoals(user?.uid)
  const { mutateAsync: updateUserGoals, isPending } = useUserGoalsMutation({
    onMutate: async (data) => {
      const previousData = (await queryClient.getQueryData([
        'UserGoals',
        data.uid,
      ])) as GoalsListItem[]
      const updatedData = mutateGoalData(previousData, data)
      queryClient.setQueryData(['UserGoals', data.uid], updatedData)
    },
  })

  const [goals, setGoals] = useState<GoalsListItem[]>([])

  const handleSaveGoals = async () => {
    const dirtyGoals = goals.filter((goal) => goal.__dirty)
    if (dirtyGoals.length && user?.uid) {
      dirtyGoals.forEach((goal) => {
        if (!!goal.value) {
          updateUserGoals({
            uid: user?.uid,
            key: goal.key,
            value: goal.value.toString(),
            data: goal,
          })
        }
      })
    }
  }

  const resetGoals = () => {
    return goalsList.map((goal) => {
      const userGoal = userGoals?.find((g) => g.key === goal.key)
      return {
        ...goal,
        value: userGoal?.value || 0,
      }
    })
  }

  const handleResetGoals = () => {
    setGoals(resetGoals())
  }

  const handleUpdateGoal = (key: string, value: string) => {
    setGoals((prevGoals) => {
      return prevGoals.map((goal) => {
        if (goal.key === key && goal.value !== value) {
          return {
            ...goal,
            __dirty: true,
            value: value,
          }
        }
        return goal
      })
    })
  }

  const isEdited = goals?.some((goal) => goal.__dirty)

  useEffect(() => {
    setGoals(resetGoals())
  }, [userGoals])

  return (
    <ScreenView withScroll={false}>
      <ThemedView
        style={[
          theme.containers.screenVerticalPadding,
          theme.containers.generalPadding,
        ]}
      >
        <ThemedText type={'title'} weight={'bold'}>
          Your goals
        </ThemedText>
        <ThemedText size={'base'} weight={'medium'} style={{ marginTop: 6 }}>
          Set your goals and track your progress!
        </ThemedText>
        <View style={styles.initialBorder}>
          <FlatList
            scrollEnabled={false}
            data={goals}
            renderItem={({ item }) => (
              <GoalItem
                goal={item}
                setValue={(v) => handleUpdateGoal(item.key, v)}
              />
            )}
            keyExtractor={(item) => item.key}
          />
        </View>
        <Button
          text={'Save goals'}
          disabled={!isEdited || isPending}
          style={styles.saveButton}
          onPress={handleSaveGoals}
        />
        {isEdited && (
          <Button
            variant={'primary-outline'}
            text={'Cancel'}
            disabled={!isEdited || isPending}
            style={styles.cancelButton}
            onPress={handleResetGoals}
          />
        )}
      </ThemedView>
    </ScreenView>
  )
}

const styles = StyleSheet.create({
  initialBorder: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.lightGray,
    marginTop: 32,
  },
  saveButton: {
    marginTop: 32,
  },
  cancelButton: {
    marginTop: 12,
  },
})

export default GoalsScreen
