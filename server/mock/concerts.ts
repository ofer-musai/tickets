export interface ConcertHighlight {
  icon: string;
  label: string;
  value: string;
}

export interface Concert {
  id: string;
  imageUrl: string;
  title: string;
  date: string;
  venue: string;
  price: number;
  doorsOpen: string;
  description: string;
  genre: string;
  capacity: number;
  ageLimit: string;
  photography: string;
  highlights: ConcertHighlight[];
}

export const concerts: Concert[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80&fit=crop',
    title: 'Rock Night Live',
    date: 'Apr 12, 2026',
    venue: 'Madison Square Garden',
    price: 49,
    doorsOpen: '7:00 PM',
    description: 'An explosive night of rock classics and new anthems. Rock Night Live brings together the biggest guitar riffs and pounding drums for a sold-out arena experience unlike any other.',
    genre: 'Rock',
    capacity: 20000,
    ageLimit: '16+',
    photography: 'Allowed',
    highlights: [
      { icon: '🎸', label: 'Genre', value: 'Rock' },
      { icon: '🏟️', label: 'Capacity', value: '20,000+' },
      { icon: '⭐', label: 'Rating', value: '4.9 / 5' },
      { icon: '🌍', label: 'Language', value: 'English' },
      { icon: '🎭', label: 'Age Limit', value: '16+' },
      { icon: '📸', label: 'Photography', value: 'Allowed' },
    ],
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80&fit=crop',
    title: 'Piano & Soul',
    date: 'Apr 20, 2026',
    venue: 'Carnegie Hall',
    price: 35,
    doorsOpen: '6:30 PM',
    description: 'A soulful evening of piano virtuosity set in the world-renowned Carnegie Hall. Experience timeless compositions performed live by award-winning pianists in an intimate acoustic setting.',
    genre: 'Classical',
    capacity: 2800,
    ageLimit: 'All Ages',
    photography: 'Not Allowed',
    highlights: [
      { icon: '🎹', label: 'Genre', value: 'Classical' },
      { icon: '🏛️', label: 'Capacity', value: '2,800' },
      { icon: '⭐', label: 'Rating', value: '5.0 / 5' },
      { icon: '🌍', label: 'Language', value: 'Instrumental' },
      { icon: '🎭', label: 'Age Limit', value: 'All Ages' },
      { icon: '📸', label: 'Photography', value: 'Not Allowed' },
    ],
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80&fit=crop',
    title: 'Jazz Fest 2026',
    date: 'May 3, 2026',
    venue: 'Blue Note, NYC',
    price: 28,
    doorsOpen: '8:00 PM',
    description: "New York's most celebrated jazz festival returns to the legendary Blue Note. Expect smooth improvisations, late-night sessions, and a lineup of the finest jazz musicians on the planet.",
    genre: 'Jazz',
    capacity: 500,
    ageLimit: '18+',
    photography: 'Allowed',
    highlights: [
      { icon: '🎷', label: 'Genre', value: 'Jazz' },
      { icon: '🏟️', label: 'Capacity', value: '500' },
      { icon: '⭐', label: 'Rating', value: '4.8 / 5' },
      { icon: '🌍', label: 'Language', value: 'Instrumental' },
      { icon: '🎭', label: 'Age Limit', value: '18+' },
      { icon: '📸', label: 'Photography', value: 'Allowed' },
    ],
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80&fit=crop',
    title: 'Symphony Evening',
    date: 'May 15, 2026',
    venue: 'Lincoln Center',
    price: 60,
    doorsOpen: '7:30 PM',
    description: 'An enchanting symphonic performance at Lincoln Center featuring a full 80-piece orchestra. From Beethoven to modern film scores, this evening promises to move and inspire every audience member.',
    genre: 'Symphony',
    capacity: 2700,
    ageLimit: 'All Ages',
    photography: 'Not Allowed',
    highlights: [
      { icon: '🎻', label: 'Genre', value: 'Symphony' },
      { icon: '🏛️', label: 'Capacity', value: '2,700' },
      { icon: '⭐', label: 'Rating', value: '4.9 / 5' },
      { icon: '🌍', label: 'Language', value: 'Instrumental' },
      { icon: '🎭', label: 'Age Limit', value: 'All Ages' },
      { icon: '📸', label: 'Photography', value: 'Not Allowed' },
    ],
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80&fit=crop',
    title: 'Pop Stars Unite',
    date: 'Jun 1, 2026',
    venue: 'Barclays Center',
    price: 75,
    doorsOpen: '7:00 PM',
    description: 'The biggest pop collaboration of the year brings together chart-topping artists for one mega night at Barclays Center. Expect dazzling production, surprise guests, and non-stop hit songs.',
    genre: 'Pop',
    capacity: 19000,
    ageLimit: 'All Ages',
    photography: 'Allowed',
    highlights: [
      { icon: '🎤', label: 'Genre', value: 'Pop' },
      { icon: '🏟️', label: 'Capacity', value: '19,000+' },
      { icon: '⭐', label: 'Rating', value: '4.7 / 5' },
      { icon: '🌍', label: 'Language', value: 'English' },
      { icon: '🎭', label: 'Age Limit', value: 'All Ages' },
      { icon: '📸', label: 'Photography', value: 'Allowed' },
    ],
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&q=80&fit=crop',
    title: 'Drum & Bass Night',
    date: 'Jun 18, 2026',
    venue: 'Brooklyn Mirage',
    price: 40,
    doorsOpen: '10:00 PM',
    description: 'Brooklyn Mirage transforms into the ultimate open-air drum and bass arena. With world-class DJs, laser shows, and a state-of-the-art sound system, this is the night the underground has been waiting for.',
    genre: 'Drum & Bass',
    capacity: 5000,
    ageLimit: '18+',
    photography: 'Allowed',
    highlights: [
      { icon: '🎧', label: 'Genre', value: 'Drum & Bass' },
      { icon: '🏟️', label: 'Capacity', value: '5,000+' },
      { icon: '⭐', label: 'Rating', value: '4.8 / 5' },
      { icon: '🌍', label: 'Language', value: 'English' },
      { icon: '🎭', label: 'Age Limit', value: '18+' },
      { icon: '📸', label: 'Photography', value: 'Allowed' },
    ],
  },
];
