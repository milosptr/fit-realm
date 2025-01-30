import { useCurrentAuthUser, useUserInfo } from '@/src/hooks/useAuth'
import { ThemedText } from '@/src/components/ThemedText'
import { FlatList, StyleSheet, View } from 'react-native'
import theme from '@/src/constants/theme'
import { profileList } from '@/src/constants/profile'
import { ProfileInfoItem } from '@/src/components/profile/ProfileInfoItem'
import { useEffect, useState } from 'react'
import { Profile } from '@/src/constants/profile'

export const ProfileInfo = () => {
  const { data: user } = useCurrentAuthUser()
  const { data } = useUserInfo(user?.uid)
  const [userProfileList, setUserProfileList] = useState(profileList)

  console.log('[UserInfo]', data)

  const getValue = (key: string) => {
    if (key === Profile.EMAIL) return user?.email
    const value = data?.find((d) => d.key === key)?.value
    return value || ''
  }

  useEffect(() => {
    setUserProfileList(
      profileList.map((item) => ({
        ...item,
        value: getValue(item.key),
      }))
    )
  }, [data])

  return (
    <View style={styles.sectionContainer}>
      <ThemedText size={'lg'} weight={'semibold'}>
        Personal information
      </ThemedText>
      <View>
        <FlatList
          scrollEnabled={false}
          data={userProfileList}
          renderItem={({ item }) => <ProfileInfoItem item={item} />}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  sectionContainer: {
    paddingVertical: 12,
    marginTop: 12,
    gap: 6,
  },
  sectionItem: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.lightGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
})
