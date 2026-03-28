const baseServerUrl = '/api';

export interface ConcertHighlight {
  icon: string;
  label: string;
  value: string;
}

export interface Concert {
  id: string;
  title: string;
  imageUrl: string;
  venue: string;
  date: string;
  doorsOpen: string;
  price: string;
  description: string;
  genre: string;
  capacity: number;
  ageLimit: string;
  photography: string;
  highlights: ConcertHighlight[];
}

export interface Stat {
  label: string;
  number: string;
}

export const fetchConcerts = (): Promise<Concert[]> =>
  fetch(`${baseServerUrl}/concerts`).then((res) => {
    if (!res.ok) throw new Error(`Server error ${res.status}`);
    return res.json();
  });

export const fetchConcertById = (id: string): Promise<Concert> =>
  fetch(`${baseServerUrl}/concerts/${id}`).then((res) => {
    if (!res.ok) throw new Error(`Server error ${res.status}`);
    return res.json();
  });

export const fetchStats = (): Promise<Stat[]> =>
  fetch(`${baseServerUrl}/stats`).then((res) => {
    if (!res.ok) throw new Error(`Server error ${res.status}`);
    return res.json();
  });
