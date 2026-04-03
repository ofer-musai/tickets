import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';

import { connect } from './db/connection';
import { seed } from './db/seed';
import concertsRouter from './routes/concerts';
import statsRouter from './routes/stats';
import authRouter from './routes/auth';

if (!process.env.JWT_SECRET) {
  console.error('JWT_SECRET is not set. Please configure it in your .env file.');
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 5010;

app.use(cors());
app.use(express.json());

// --- Routes ---
app.use('/api/auth', authRouter);
app.use('/api/concerts', concertsRouter);
app.use('/api/stats', statsRouter);

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

async function bootstrap() {
  await connect();
  await seed();
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}

bootstrap().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
