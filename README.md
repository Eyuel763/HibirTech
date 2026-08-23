# Hibir Technologies Public Website & STEM Academy Platform

## Tech Stack
- **Frontend**: Next.js 14+ (App Router), TypeScript, Tailwind CSS
- **Backend**: Django 5+, Django REST Framework, PostgreSQL, Redis
- **Infra**: Docker Compose, Nginx, GitHub Actions CI/CD

## Development Quickstart
1. Copy environment files:
   `cp apps/backend/.env.example apps/backend/.env`
   `cp apps/frontend/.env.example apps/frontend/.env.local`
2. Run with Docker:
   `docker compose up --build`
3. Backend running at: `http://localhost:8000`
4. Frontend running at: `http://localhost:3000`
