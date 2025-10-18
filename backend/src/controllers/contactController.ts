import { Request, Response } from 'express';
import pool from '../config/database';

export const createContactMessage = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;
    
    const result = await pool.query(
      `INSERT INTO contact_messages (name, email, message) 
       VALUES ($1, $2, $3) 
       RETURNING *`,
      [name, email, message]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ error: 'Failed to save message' });
  }
};