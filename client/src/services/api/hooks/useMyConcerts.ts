import { useQuery } from '@tanstack/react-query';
import { fetchMyConcerts } from '../api';
import { useAuth } from '../../../contexts/AuthContext';

export function useMyConcerts() {
  const { isAuthenticated } = useAuth();
  return useQuery({
    queryKey: ['my-concerts'],
    queryFn: fetchMyConcerts,
    enabled: isAuthenticated,
  });
}
