import { useQuery } from '@tanstack/react-query';
import { fetchConcerts } from '../api';
import type { Concert } from '../api';
import type { UseQueryResult } from '@tanstack/react-query';

export const useGetConcertsList = (): UseQueryResult<Concert[], Error> =>
  useQuery({
    queryKey: ['concerts'],
    queryFn: fetchConcerts,
  });
