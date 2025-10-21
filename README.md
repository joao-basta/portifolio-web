# Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1-61dafb)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)

A modern, full-stack portfolio website showcasing software engineering projects, skills, and professional experience. Built with React, TypeScript, Node.js, and PostgreSQL.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dynamic Project Showcase**: Database-driven project portfolio with admin management
- **Interactive UI**: Smooth animations, cursor glow effects, and section-based navigation
- **Contact Form**: Integrated contact system with database storage
- **Admin Panel**: Secure content management for projects
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **Type-Safe**: Full TypeScript implementation across frontend and backend
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels

## 🛠 Tech Stack

### Frontend
- **Framework**: React 19.1 with TypeScript
- **Build Tool**: Vite 7.1
- **Styling**: Tailwind CSS 4.1 with PostCSS
- **Animations**: React Typed, CSS transitions
- **State Management**: React Hooks
- **Linting**: ESLint 9 with TypeScript ESLint

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js 5.1
- **Database**: PostgreSQL 8.16
- **Language**: TypeScript 5.9
- **Development**: Nodemon, ts-node

### DevOps & Tools
- **Version Control**: Git
- **Package Manager**: npm
- **Environment**: dotenv for configuration
- **CORS**: Enabled for cross-origin requests

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher
- **PostgreSQL**: v12.0 or higher
- **Git**: Latest version

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/joao-basta/portfolio.git
cd portfolio
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## ⚙️ Configuration

### Database Setup

1. **Create PostgreSQL Database**:

```sql
CREATE DATABASE portfolio_db;
```

2. **Initialize Database Schema**:

```bash
cd backend
npm run init-db
```

This will create the following tables:
- `projects`: Stores portfolio projects
- `contact_messages`: Stores contact form submissions

### Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio_db

# Optional: Add these for production
# CORS_ORIGIN=https://yourdomain.com
# SESSION_SECRET=your-secret-key
```

**Security Note**: Never commit `.env` files to version control. Use `.env.example` for documentation.

## 💻 Usage

### Development Mode

Run both frontend and backend concurrently:

**Terminal 1 - Backend**:
```bash
cd backend
npm run dev
```
Backend will run on `http://localhost:5000`

**Terminal 2 - Frontend**:
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:5173`

### Production Build

**Backend**:
```bash
cd backend
npm run build
npm start
```

**Frontend**:
```bash
cd frontend
npm run build
npm run preview
```

### Admin Access

Access the admin panel by clicking the hidden button in the bottom-right corner of the homepage.

**Default Credentials** (Change in production):
- Password: `admin123`

## 📁 Project Structure

```
portfolio/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.ts       # Database connection
│   │   │   └── init-db.ts        # Schema initialization
│   │   ├── controllers/
│   │   │   ├── contactController.ts
│   │   │   └── projectController.ts
│   │   ├── routes/
│   │   │   ├── contactRoutes.ts
│   │   │   └── projectRoutes.ts
│   │   └── server.ts             # Express application entry
│   ├── .env                      # Environment variables (not in repo)
│   ├── .gitignore
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── public/
│   │   └── jb.svg                # Logo
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── CursorGlow.tsx
│   │   │   └── SideBar.tsx
│   │   ├── hooks/
│   │   │   ├── useActiveSection.ts
│   │   │   └── useScrollAnimation.ts
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── Admin.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Hero.tsx
│   │   │   └── Projects.tsx
│   │   ├── services/
│   │   │   └── api.ts            # API client
│   │   ├── types/
│   │   │   └── index.ts          # TypeScript definitions
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── .gitignore
│   ├── package.json
│   ├── tailwind.config.cjs
│   ├── tsconfig.json
│   └── vite.config.ts
│
└── README.md
```

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### Projects

**GET** `/api/projects`
- **Description**: Retrieve all projects
- **Response**: `200 OK`
```json
[
  {
    "id": 1,
    "title": "Project Title",
    "description": "Project description",
    "tech_stack": ["React", "Node.js"],
    "github_url": "https://github.com/...",
    "live_url": "https://example.com",
    "image_url": "https://...",
    "created_at": "2025-01-01T00:00:00.000Z"
  }
]
```

**POST** `/api/projects`
- **Description**: Create a new project (Admin only)
- **Request Body**:
```json
{
  "title": "Project Title",
  "description": "Description",
  "tech_stack": ["React", "TypeScript"],
  "github_url": "https://github.com/...",
  "live_url": "https://example.com",
  "image_url": "https://..."
}
```
- **Response**: `201 Created`

#### Contact

**POST** `/api/contact`
- **Description**: Submit a contact message
- **Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```
- **Response**: `201 Created`

#### Health Check

**GET** `/api/health`
- **Description**: Check server status
- **Response**: `200 OK`
```json
{
  "status": "Server is running!"
}
```

**GET** `/api/db-test`
- **Description**: Test database connection
- **Response**: `200 OK`
```json
{
  "status": "Database connected!",
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

## 🌐 Deployment

### Deployment Options

#### Option 1: Vercel (Frontend) + Render (Backend)

**Frontend (Vercel)**:
1. Push code to GitHub
2. Import project in Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Root Directory: `frontend`

**Backend (Render)**:
1. Create new Web Service
2. Connect GitHub repository
3. Configure:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Root Directory: `backend`
4. Add environment variables

#### Option 2: Docker Deployment

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:14
    environment:
      POSTGRES_DB: portfolio_db
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      DATABASE_URL: ${DATABASE_URL}
    depends_on:
      - postgres

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend

volumes:
  postgres_data:
```

Deploy with:
```bash
docker-compose up -d
```

### Environment Variables for Production

```env
# Backend
NODE_ENV=production
PORT=5000
DATABASE_URL=postgresql://user:pass@host:5432/db
CORS_ORIGIN=https://yourdomain.com

# Frontend
VITE_API_URL=https://api.yourdomain.com
```

## 🧪 Testing

### Run Tests

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

### Linting

```bash
# Backend
cd backend
npm run lint

# Frontend
cd frontend
npm run lint
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**:
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style

- Follow TypeScript best practices
- Use ESLint configuration provided
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Joao Basta**
- GitHub: [@joao-basta](https://github.com/joao-basta)
- LinkedIn: [Joao Paulo Santana Basta](https://linkedin.com/in/joao-paulo-santana-basta-47b849310)
- Email: bpjoao00a@gmail.com

## 🙏 Acknowledgments

- React and TypeScript communities
- Tailwind CSS for the styling framework
- PostgreSQL for reliable data storage
- All open-source contributors

## 📞 Support

For support, email bpjoao00a@gmail.com or open an issue on GitHub.

---

**Note**: This is a personal portfolio project. Feel free to use it as inspiration for your own portfolio, but please give appropriate credit.

Made with ❤️ by Joao Basta