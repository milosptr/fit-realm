import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
  ViewStyle,
} from 'react-native'
import theme from '@/src/constants/theme'

interface ButtonProps extends PressableProps {
  text: string
  variant?: 'primary' | 'primary-outline'
  style?: ViewStyle
}

// TODO: Refactor and implement color scheme and more variants
export const Button = ({
  text,
  variant = 'primary',
  style,
  disabled,
  onPress,
  ...props
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        ...styles.button,
        ...styles[variant],
        ...style,
        ...(disabled && { backgroundColor: theme.colors.primaryLightest }),
        ...(pressed &&
          !disabled && { backgroundColor: theme.colors.primaryDark }),
      })}
      disabled={disabled}
      {...props}
    >
      {({ pressed }) => (
        <Text
          style={[
            styles.text,
            styles[`text-${variant}`],
            pressed && variant === 'primary-outline' && { color: '#fff' },
          ]}
        >
          {text}
        </Text>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 48,
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  'primary-outline': {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  'text-primary': {
    color: '#fff',
  },
  'text-primary-outline': {
    color: theme.colors.primary,
  },
})
