import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/database';
import projectRoutes from './routes/projectRoutes';
import contactRoutes from './routes/contactRoutes';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows frontend to talk to backend
app.use(express.json()); // Parses JSON request bodies

// Test route
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'Server is running!' });
});

// Test database connection
app.get('/api/db-test', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ 
      status: 'Database connected!', 
      timestamp: result.rows[0].now 
    });
  } catch (error) {
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// API routes
app.use('/api', projectRoutes);

app.use('/api', contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});