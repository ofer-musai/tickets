import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createConcert, updateConcert } from '../api';
import type { ConcertCreatePayload, ConcertUpdatePayload } from '../api';

export function useCreateConcertMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ConcertCreatePayload) => createConcert(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['concerts'] });
      queryClient.invalidateQueries({ queryKey: ['my-concerts'] });
    },
  });
}

export function useUpdateConcertMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: ConcertUpdatePayload }) => updateConcert(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['concerts'] });
      queryClient.invalidateQueries({ queryKey: ['my-concerts'] });
    },
  });
}
