import Message from './models/Message';
import Concert from './models/Concert';
import { concerts } from '../mock/concerts';

async function seed(): Promise<void> {
  const msgCount = await Message.countDocuments();
  if (msgCount === 0) {
    await Message.create({ message: 'Hello World from MongoDB!' });
    console.log('Seeded hello message.');
  }

  // Always re-seed concerts to ensure schema is up to date
  await Concert.deleteMany({});
  const seedData = concerts.map((c) => ({
    imageUrl: c.imageUrl,
    title: c.title,
    date: c.date,
    venue: c.venue,
    price: c.price,
    doorsOpen: c.doorsOpen,
    description: c.description,
    genre: c.genre,
    capacity: c.capacity,
    ageLimit: c.ageLimit,
    photography: c.photography,
    highlights: c.highlights,
    ticketCount: c.capacity,
    ticketsAvailable: c.capacity,
  }));
  await Concert.insertMany(seedData);
  console.log('Seeded default concerts.');
}

export { seed };
