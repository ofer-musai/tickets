import { useQuery } from '@tanstack/react-query';
import { fetchConcertById } from '../api';
import type { Concert } from '../api';
import type { UseQueryResult } from '@tanstack/react-query';

export const useGetConcert = (id: string | undefined): UseQueryResult<Concert, Error> =>
  useQuery({
    queryKey: ['concert', id],
    queryFn: () => fetchConcertById(id!),
    enabled: !!id,
  });
