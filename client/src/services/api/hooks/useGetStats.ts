import { useQuery } from '@tanstack/react-query';
import { fetchStats } from '../api';
import type { Stat } from '../api';
import type { UseQueryResult } from '@tanstack/react-query';

export const useGetStats = (): UseQueryResult<Stat[], Error> =>
  useQuery({
    queryKey: ['stats'],
    queryFn: fetchStats,
  });
