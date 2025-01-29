import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { SelectOption } from '@/src/types/componentTypes'
import theme from '@/src/constants/theme'
import { ThemedText } from '@/src/components/ThemedText'

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
      <View style={styles.pickerContainer}>
        <View style={styles.pickerHeader}>
          <ThemedText style={styles.label}>{label}</ThemedText>
          <TouchableOpacity onPress={handleDone}>
            <Text style={styles.doneButton}>Done</Text>
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
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
  },
  pickerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    color: theme.colors.darkGray,
    fontWeight: '500',
    fontSize: 16,
  },
  doneButton: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
})
