import { useMutation } from '@tanstack/react-query';
import { loginUser, registerUser } from '../api';

export function useLoginMutation() {
  return useMutation({ mutationFn: loginUser });
}

export function useRegisterMutation() {
  return useMutation({ mutationFn: registerUser });
}
