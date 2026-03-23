import { Request, Response } from 'express';
import pool from '../config/database';
import { projectSchema } from '../validators/schemas';

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM projects ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

export const createProject = async (req: Request, res: Response) => {
  const parsed = projectSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: 'Invalid data', details: parsed.error.flatten() });
    return;
  }

  const { title, description, tech_stack, github_url, live_url, image_url } = parsed.data;

  try {
    const result = await pool.query(
      `INSERT INTO projects (title, description, tech_stack, github_url, live_url, image_url)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [title, description, tech_stack, github_url || null, live_url || null, image_url || null]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Failed to create project' });
  }
};