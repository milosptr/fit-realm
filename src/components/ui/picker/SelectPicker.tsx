import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { SelectOption } from '@/src/types/componentTypes'
import theme from '@/src/constants/theme'
import { ThemedText } from '@/src/components/ThemedText'
import { useThemeColor } from '@/src/hooks/useThemeColor'

type Props = {
  visible: boolean
  label?: string
  selectedValue?: string
  options: SelectOption[]
  onValueChange: (value: string) => void
  onClose: () => void
}

export const SelectPicker = ({
  label,
  visible,
  options,
  selectedValue,
  onValueChange,
  onClose,
}: Props) => {
  const colors = useThemeColor()
  const [selected, setSelected] = useState(selectedValue)

  const handleDone = () => {
    if (!!selected && selected !== selectedValue) {
      onValueChange(selected)
    }
    onClose()
  }

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType='fade'
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPress={onClose}
      />
      <View
        style={[
          styles.pickerContainer,
          { backgroundColor: colors.tabsBackground },
        ]}
      >
        <View style={[styles.pickerHeader, { borderColor: colors.tabsBorder }]}>
          <ThemedText weight={'medium'}>{label}</ThemedText>
          <TouchableOpacity onPress={handleDone}>
            <ThemedText weight={'semibold'} style={{ color: colors.tint }}>
              Done
            </ThemedText>
          </TouchableOpacity>
        </View>
        <Picker selectedValue={selected} onValueChange={setSelected}>
          <Picker.Item label='Select' value='' enabled={false} />
          {options?.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          )) || []}
        </Picker>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  pickerContainer: {
    paddingBottom: 20,
  },
  pickerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
})
