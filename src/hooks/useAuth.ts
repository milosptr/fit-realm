import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  login,
  logout,
  register,
  getOnAuthStateChanged,
} from '@/src/services/authService'
import { QueryKey } from '@/src/constants/queryKey'
import {
  getUserProfile,
  saveUserProfileInfo,
} from '@/src/services/firestoreService'
import {
  UserProfileInfo,
  UserProfileInfoInput,
} from '@/src/types/firestoreTypes'
import { MutationOptions } from '@/src/types/queryTypes'

export const useCurrentAuthUser = () => {
  return useQuery({
    queryKey: [QueryKey.CURRENT_USER],
    queryFn: getOnAuthStateChanged,
  })
}

export const useUserInfo = (uid?: string) => {
  return useQuery({
    queryKey: [QueryKey.USER_INFO],
    queryFn: () => getUserProfile(uid),
    enabled: !!uid,
  })
}

export const useUserInfoMutation = (
  options?: MutationOptions<UserProfileInfo, UserProfileInfoInput>
) => {
  return useMutation({
    mutationKey: [QueryKey.USER_INFO],
    mutationFn: (data: UserProfileInfoInput) => saveUserProfileInfo(data),
    ...options,
  })
}

export const useLoginMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login(email, password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.CURRENT_USER] })
    },
  })
}

export const useRegisterMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      register(email, password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.CURRENT_USER] })
    },
  })
}

export const useLogoutMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.CURRENT_USER] })
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
