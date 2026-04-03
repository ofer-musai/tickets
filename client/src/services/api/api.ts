const baseServerUrl = '/api';

export interface ConcertHighlight {
  icon: string;
  label: string;
  value: string;
}

export interface Concert {
  id: string;
  _id?: string;
  title: string;
  imageUrl: string;
  venue: string;
  date: string;
  doorsOpen: string;
  price: number;
  description: string;
  genre: string;
  capacity: number;
  ageLimit: string;
  photography: string;
  highlights: ConcertHighlight[];
  creatorId?: string;
  ticketCount: number;
  ticketsAvailable: number;
}

export interface ConcertCreatePayload {
  title: string;
  imageUrl: string;
  venue: string;
  date: string;
  doorsOpen: string;
  price: number;
  description: string;
  genre: string;
  capacity: number;
  ageLimit: string;
  photography: string;
  ticketCount: number;
}

export type ConcertUpdatePayload = Partial<ConcertCreatePayload>;

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
}

export interface Stat {
  label: string;
  number: string;
}

function getAuthHeaders(): Record<string, string> {
  const token = localStorage.getItem('tf_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

function apiFetch<T>(url: string, options?: RequestInit): Promise<T> {
  return fetch(url, options).then((res) => {
    if (!res.ok) return res.json().then((body) => { throw new Error(body.message || `Server error ${res.status}`); });
    return res.json() as Promise<T>;
  });
}

export const fetchConcerts = (): Promise<Concert[]> =>
  apiFetch(`${baseServerUrl}/concerts`);

export const fetchConcertById = (id: string): Promise<Concert> =>
  apiFetch(`${baseServerUrl}/concerts/${id}`);

export const fetchMyConcerts = (): Promise<Concert[]> =>
  apiFetch(`${baseServerUrl}/concerts/mine`, { headers: getAuthHeaders() });

export const createConcert = (data: ConcertCreatePayload): Promise<Concert> =>
  apiFetch(`${baseServerUrl}/concerts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify(data),
  });

export const updateConcert = (id: string, data: ConcertUpdatePayload): Promise<Concert> =>
  apiFetch(`${baseServerUrl}/concerts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify(data),
  });

export const loginUser = (creds: { email: string; password: string }): Promise<AuthResponse> =>
  apiFetch(`${baseServerUrl}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(creds),
  });

export const registerUser = (body: { name: string; email: string; password: string }): Promise<AuthResponse> =>
  apiFetch(`${baseServerUrl}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

export const getMe = (): Promise<{ user: AuthUser }> =>
  apiFetch(`${baseServerUrl}/auth/me`, { headers: getAuthHeaders() });

export const fetchStats = (): Promise<Stat[]> =>
  apiFetch(`${baseServerUrl}/stats`);
