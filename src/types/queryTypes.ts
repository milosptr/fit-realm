import { UseMutationOptions } from '@tanstack/react-query'

export type MutationOptions<TData, TVariables> = Omit<
  UseMutationOptions<TData, Error, TVariables, unknown>,
  'mutationFn' | 'mutationKey'
>
