import Message from './models/Message';
import Concert from './models/Concert';
import { concerts } from '../mock/concerts';

async function seed(): Promise<void> {
  const msgCount = await Message.countDocuments();
  if (msgCount === 0) {
    await Message.create({ message: 'Hello World from MongoDB!' });
    console.log('Seeded hello message.');
  }

  const concertCount = await Concert.countDocuments();
  if (concertCount === 0) {
    await Concert.insertMany(concerts);
    console.log('Seeded default concerts.');
  }
}

export { seed };
