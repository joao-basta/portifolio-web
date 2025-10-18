export interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string[];
  github_url?: string;
  live_url?: string;
  image_url?: string;
  created_at: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}