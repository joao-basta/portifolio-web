import { Request, Response } from 'express';
import pool from '../config/database';

// Get all projects
export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      'SELECT * FROM projects ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

// Create a new project
export const createProject = async (req: Request, res: Response) => {
  try {
    const { title, description, tech_stack, github_url, live_url, image_url } = req.body;
    
    const result = await pool.query(
      `INSERT INTO projects (title, description, tech_stack, github_url, live_url, image_url) 
       VALUES ($1, $2, $3, $4, $5, $6) 
       RETURNING *`,
      [title, description, tech_stack, github_url, live_url, image_url]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Failed to create project' });
  }
};