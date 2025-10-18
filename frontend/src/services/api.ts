import type { Project, ContactMessage } from '../types';

const API_URL = 'http://localhost:5000/api';

// Get all projects
export const getProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch(`${API_URL}/projects`);
    if (!response.ok) throw new Error('Failed to fetch projects');
    return await response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

// Create a new project (for admin use later)
export const createProject = async (project: Omit<Project, 'id' | 'created_at'>): Promise<Project | null> => {
  try {
    const response = await fetch(`${API_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });
    if (!response.ok) throw new Error('Failed to create project');
    return await response.json();
  } catch (error) {
    console.error('Error creating project:', error);
    return null;
  }
};

// Send contact message
export const sendContactMessage = async (message: ContactMessage): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    return response.ok;
  } catch (error) {
    console.error('Error sending message:', error);
    return false;
  }
};