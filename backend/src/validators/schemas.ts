import { z } from 'zod';

export const projectSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(1000),
  tech_stack: z.array(z.string().min(1)).min(1).max(20),
  github_url: z.string().url().optional().or(z.literal('')),
  live_url: z.string().url().optional().or(z.literal('')),
  image_url: z.string().url().optional().or(z.literal('')),
});

export const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(2000),
});