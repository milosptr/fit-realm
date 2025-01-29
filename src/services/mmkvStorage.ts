import { MMKVLoader } from 'react-native-mmkv-storage'

const storage = new MMKVLoader()
  .withEncryption() // Optional: Encrypt the data
  .initialize()

export default storage
