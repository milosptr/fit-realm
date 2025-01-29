import { ThemedText } from '@/src/components/ThemedText'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { TextInput } from '@/src/components/ui/TextInput'
import { Button } from '@/src/components/ui/Button'
import { useRouter } from 'expo-router'
import { useAuth } from '@/src/hooks/useAuth'
import { useEffect, useState } from 'react'

export const LoginScreen = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const onLogin = () => {
    login({ email, password }).then((data) => {
      router.replace('/(tabs)/today')
    })
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.title}>
          <ThemedText type={'title'}>Hey there 👋</ThemedText>
          <ThemedText type={'title'}>let's sign you in.</ThemedText>
        </View>
        <View style={styles.inputs}>
          <TextInput
            textContentType={'emailAddress'}
            label={'Email'}
            placeholder={'Username'}
            onChangeText={(v) => setEmail(v)}
          />
          <TextInput
            label={'Password'}
            textContentType={'password'}
            placeholder={'Password'}
            onChangeText={(v) => setPassword(v)}
          />
          <Button text={'Login'} onPress={onLogin} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    flexDirection: 'column',
    gap: 6,
  },
  inputs: {
    flexDirection: 'column',
    gap: 12,
    marginTop: 32,
  },
})

export default LoginScreen
