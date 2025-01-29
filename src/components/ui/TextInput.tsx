import {
  StyleSheet,
  Text,
  TextInput as Input,
  TextInputProps as TIP,
  View,
} from 'react-native'
import { useColorScheme } from '@/src/hooks/useColorScheme'
import theme from '@/src/constants/theme'

interface TextInputProps extends TIP {
  label?: string
}

export const TextInput = (props: TextInputProps) => {
  const scheme = useColorScheme()
  const textColor =
    scheme === 'dark' ? theme.colors.lightGray : theme.colors.darkSlateGray
  const placeholderTextColor =
    scheme === 'dark' ? theme.colors.darkSlateGray : theme.colors.lightGray

  return (
    <View style={styles.container}>
      {props.label && (
        <Text style={[styles.label, { color: textColor }]}>{props.label}</Text>
      )}
      <Input
        style={[styles.input, { color: textColor }]}
        placeholderTextColor={placeholderTextColor}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    height: 48,
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#9fa2a5',
  },
})
