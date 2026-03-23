import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/login', (req: Request, res: Response) => {
  const { password } = req.body;

  if (!process.env.ADMIN_PASSWORD || !process.env.JWT_SECRET) {
    res.status(500).json({ error: 'Server not configured' });
    return;
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    res.status(401).json({ error: 'Invalid password' });
    return;
  }

  const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, {
    expiresIn: '4h',
  });

  res.json({ token });
});

export default router;