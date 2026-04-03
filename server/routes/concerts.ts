import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Concert from '../db/models/Concert';
import { requireAuth } from '../middleware/auth';
import type { AuthPayload } from '../middleware/auth';

const router = express.Router();

router.get('/', async (_req: Request, res: Response): Promise<void> => {
  const concerts = await Concert.find({}).sort({ date: 1 });
  res.json(concerts);
});

// /mine must come before /:id so Express doesn't treat "mine" as an id
router.get('/mine', requireAuth, async (_req: Request, res: Response): Promise<void> => {
  const { userId } = res.locals.user as AuthPayload;
  const concerts = await Concert.find({ creatorId: new mongoose.Types.ObjectId(userId) });
  res.json(concerts);
});

router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const concert = await Concert.findById(req.params.id);
    if (!concert) {
      res.status(404).json({ message: 'Concert not found' });
      return;
    }
    res.json(concert);
  } catch (err) {
    if (err instanceof mongoose.Error.CastError) {
      res.status(400).json({ message: 'Invalid concert ID' });
      return;
    }
    throw err;
  }
});

router.post('/', requireAuth, async (req: Request, res: Response): Promise<void> => {
  const { userId } = res.locals.user as AuthPayload;
  const { title, imageUrl, venue, date, doorsOpen, price, description, genre, capacity, ageLimit, photography, highlights, ticketCount } = req.body;

  const count = ticketCount ?? capacity ?? 0;
  const concert = await Concert.create({
    title,
    imageUrl,
    venue,
    date,
    doorsOpen,
    price: Number(price),
    description,
    genre,
    capacity: Number(capacity),
    ageLimit,
    photography,
    highlights: highlights ?? [],
    creatorId: new mongoose.Types.ObjectId(userId),
    ticketCount: Number(count),
    ticketsAvailable: Number(count),
  });

  res.status(201).json(concert);
});

router.put('/:id', requireAuth, async (req: Request, res: Response): Promise<void> => {
  const { userId } = res.locals.user as AuthPayload;

  try {
    const concert = await Concert.findById(req.params.id);
    if (!concert) {
      res.status(404).json({ message: 'Concert not found' });
      return;
    }

    if (!concert.creatorId) {
      res.status(403).json({ message: 'This concert cannot be edited' });
      return;
    }

    if (concert.creatorId.toString() !== userId) {
      res.status(403).json({ message: 'Forbidden: you do not own this concert' });
      return;
    }

    const { creatorId: _c, ticketCount: _t, _id: _i, ...safeBody } = req.body;
    if (safeBody.price !== undefined) safeBody.price = Number(safeBody.price);
    if (safeBody.capacity !== undefined) safeBody.capacity = Number(safeBody.capacity);

    const updated = await Concert.findByIdAndUpdate(
      req.params.id,
      { $set: safeBody },
      { new: true, runValidators: true },
    );
    res.json(updated);
  } catch (err) {
    if (err instanceof mongoose.Error.CastError) {
      res.status(400).json({ message: 'Invalid concert ID' });
      return;
    }
    throw err;
  }
});

export default router;
