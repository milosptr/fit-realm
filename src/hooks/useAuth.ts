import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  login,
  logout,
  register,
  getOnAuthStateChanged,
} from '@/src/services/authService'

export const useCurrentAuthUser = () => {
  return useQuery({
    queryKey: ['currentAuthUser'],
    queryFn: getOnAuthStateChanged,
  })
}

export const useLoginMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login(email, password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentAuthUser'] })
    },
  })
}

export const useRegisterMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      register(email, password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentAuthUser'] })
    },
  })
}

export const useLogoutMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentAuthUser'] })
    },
  })
}

export const useAuth = () => {
  const { data: user, isLoading: isInitializing } = useCurrentAuthUser()
  const loginMutation = useLoginMutation()
  const registerMutation = useRegisterMutation()
  const logoutMutation = useLogoutMutation()

  return {
    user: user,
    isInitializing,
    login: loginMutation.mutateAsync,
    register: registerMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
  }
}
