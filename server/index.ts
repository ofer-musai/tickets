import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';

import concertsRouter from './routes/concerts';
import statsRouter from './routes/stats';

const app = express();
const PORT = process.env.PORT || 5010;

app.use(cors());
app.use(express.json());

// --- Routes ---
app.use('/api/concerts', concertsRouter);
app.use('/api/stats', statsRouter);

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
