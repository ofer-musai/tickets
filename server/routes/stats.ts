import express, { Request, Response } from 'express';
import { stats } from '../mock/stats';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.json(stats);
});

export default router;
