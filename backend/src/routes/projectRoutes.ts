import express from 'express';
import { getAllProjects, createProject } from '../controllers/projectController';

const router = express.Router();

router.get('/projects', getAllProjects);
router.post('/projects', createProject);

export default router;
