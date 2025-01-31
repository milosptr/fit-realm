import { useQuery } from '@tanstack/react-query'
import { QueryKey } from '@/src/constants/queryKey'
import {
  getCollectionData,
  getDocumentData,
} from '@/src/services/firestoreService'
import { Program } from '@/src/types/firestoreTypes'

export const useProgramLibrary = () => {
  return useQuery<Program[]>({
    queryKey: [QueryKey.PROGRAM_LIBRARY],
    queryFn: () => getCollectionData<Program[]>('Programs'),
  })
}

export const useProgramById = (id?: string) => {
  return useQuery<Program>({
    queryKey: [QueryKey.PROGRAM, id],
    queryFn: () => getDocumentData<Program>('Programs', id as string),
    enabled: !!id,
  })
}
