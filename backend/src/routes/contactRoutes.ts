import express from 'express';
import { createContactMessage } from '../controllers/contactController';

const router = express.Router();

router.post('/contact', createContactMessage);

export default router;