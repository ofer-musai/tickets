import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../db/models/User';
import { requireAuth } from '../middleware/auth';
import type { AuthPayload } from '../middleware/auth';

const router = express.Router();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function signToken(payload: AuthPayload): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: (process.env.JWT_EXPIRES_IN || '7d') as any,
  });
}

router.post('/register', async (req: Request, res: Response): Promise<void> => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    res.status(400).json({ message: 'email, password, and name are required' });
    return;
  }
  if (!EMAIL_REGEX.test(email)) {
    res.status(400).json({ message: 'Invalid email format' });
    return;
  }
  if (password.length < 8) {
    res.status(400).json({ message: 'Password must be at least 8 characters' });
    return;
  }

  const existing = await User.findOne({ email: email.toLowerCase() });
  if (existing) {
    res.status(409).json({ message: 'Email already registered' });
    return;
  }

  const rounds = Number(process.env.BCRYPT_ROUNDS || 10);
  const passwordHash = await bcrypt.hash(password, rounds);
  const user = await User.create({ email, passwordHash, name });

  const token = signToken({ userId: user._id.toString(), email: user.email, name: user.name });
  res.status(201).json({
    token,
    user: { id: user._id.toString(), email: user.email, name: user.name, createdAt: user.createdAt },
  });
});

router.post('/login', async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'email and password are required' });
    return;
  }

  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  const valid = await user.comparePassword(password);
  if (!valid) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  const token = signToken({ userId: user._id.toString(), email: user.email, name: user.name });
  res.json({
    token,
    user: { id: user._id.toString(), email: user.email, name: user.name, createdAt: user.createdAt },
  });
});

router.get('/me', requireAuth, async (_req: Request, res: Response): Promise<void> => {
  const { userId } = res.locals.user as AuthPayload;
  const user = await User.findById(userId).select('-passwordHash');
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }
  res.json({ user });
});

export default router;
