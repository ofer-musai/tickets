import express, { Request, Response } from 'express';
import { concerts, Concert } from '../mock/concerts';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.json(concerts);
});

router.get('/:id', (req: Request, res: Response) => {
  const concert = concerts.find((c: Concert) => c.id === req.params.id);
  if (!concert) return res.status(404).json({ message: 'Concert not found' });
  res.json(concert);
});

router.post('/', (req: Request, res: Response) => {
  const concert: Concert = { ...req.body, id: String(Date.now()) };
  concerts.push(concert);
  res.status(201).json(concert);
});

export default router;
