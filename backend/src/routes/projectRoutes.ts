import express from 'express';
import { getAllProjects, createProject } from '../controllers/projectController';
import { requireAuth } from '../middleware/auth';

const router = express.Router();

router.get('/projects', getAllProjects);
router.post('/projects', requireAuth, createProject);

export default router;
