import { ThemedText } from '@/src/components/ThemedText'
import { Pressable, StyleSheet, View } from 'react-native'
import theme from '@/src/constants/theme'
import { useEffect, useState } from 'react'
import { ProfileInfoListItem } from '@/src/types/constantTypes'
import { EditModal } from '@/src/components/modals/EditModal'
import { TextInput } from '@/src/components/ui/TextInput'
import { useCurrentAuthUser, useUserInfoMutation } from '@/src/hooks/useAuth'
import { useQueryClient } from '@tanstack/react-query'
import { QueryKey } from '@/src/constants/queryKey'
import { useThemeColor } from '@/src/hooks/useThemeColor'
import ArrowRightIcon from '@/src/assets/icons/ArrowRightIcon'

type Props = {
  item: ProfileInfoListItem
}

export const ProfileInfoItem = ({ item }: Props) => {
  const queryClient = useQueryClient()
  const colors = useThemeColor()
  const { data: user } = useCurrentAuthUser()
  const { mutateAsync: saveInfo } = useUserInfoMutation()

  const [edit, setEdit] = useState(false)
  const [currentValue, setCurrentValue] = useState('')

  const textColor = item.__dirty ? theme.colors.warning : colors.text
  const borderColor = { borderBottomColor: colors.tabsBorder }

  useEffect(() => {
    setCurrentValue(item.value || '')
  }, [item.value])

  const handleClose = () => {
    setEdit(false)
    setCurrentValue(item.value || '')
  }

  const handleSave = async () => {
    if (!user || !currentValue) return

    await saveInfo({
      uid: user.uid,
      key: item.key,
      value: currentValue,
    })
    await queryClient.invalidateQueries({ queryKey: [QueryKey.USER_INFO] })
    handleClose()
  }

  return (
    <>
      <View style={[styles.profileItem, borderColor]}>
        <ThemedText>{item.label}</ThemedText>
        <Pressable disabled={item.__disabled} onPress={() => setEdit(true)}>
          {({ pressed }) => (
            <View style={[theme.containers.rowCentered]}>
              <ThemedText
                style={{
                  marginTop: 2,
                  color: pressed ? theme.colors.lightSlateGray : textColor,
                }}
              >
                {item.value || `Set ${item.label.toLowerCase()}`}
              </ThemedText>
              {!item.__disabled && (
                <ArrowRightIcon
                  height={20}
                  fill={pressed ? theme.colors.lightSlateGray : textColor}
                  strokeWidth={0}
                />
              )}
            </View>
          )}
        </Pressable>
      </View>
      <EditModal visible={edit} onSave={handleSave} onClose={handleClose}>
        <TextInput
          label={item.label}
          value={currentValue}
          placeholder={`Set ${item.label.toLowerCase()}...`}
          onChangeText={(v) => setCurrentValue(v)}
        />
      </EditModal>
    </>
  )
}

const styles = StyleSheet.create({
  profileItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
})
