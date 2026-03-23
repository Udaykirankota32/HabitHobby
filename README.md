# HabitHobby

HabitHobby is a full-stack task manager app with authentication.
Each user has private default folders (today, work, personal, etc.) and can store tasks inside their own folders.

## Tech Stack

- Frontend: React 19, Vite 7, styled-components, react-router-dom
- Backend: Node.js, Express 5, MongoDB, Mongoose
- Auth: JWT, bcryptjs

## Repository Structure

```text
Maincrafts_Assignments/
  todo-list-app/        # React frontend
  todo-list-backend/    # Express API + MongoDB
```

## Features

- User registration and login
- JWT-based protected API routes
- Per-user task isolation
- Default folders created at signup:
  - today
  - work
  - personal
  - important
  - shopping
  - study
  - health
  - finance
  - travel
- Add and delete tasks by folder

## Prerequisites

- Node.js 18+
- npm
- MongoDB Atlas or local MongoDB

## Environment Variables

Create or update `todo-list-backend/.env`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret_value
PORT=5000
```

Use a strong value for `JWT_SECRET`.

## Installation

Install frontend dependencies:

```bash
cd todo-list-app
npm install
```

Install backend dependencies:

```bash
cd ../todo-list-backend
npm install
```

## Run the App

Start backend (Terminal 1):

```bash
cd todo-list-backend
npm run dev
```

Start frontend (Terminal 2):

```bash
cd todo-list-app
npm run dev
```

Frontend: `http://localhost:5173`
Backend: `http://localhost:5000`

## API Endpoints

Base URL: `http://localhost:5000/api/todos`

Public routes:

- `POST /register`
- `POST /login`

Protected routes (require header `Authorization: Bearer <token>`):

- `GET /:folderId/` get tasks for one folder
- `POST /:folderId/tasks` add task in folder
- `DELETE /:folderId/tasks/:taskId` delete task in folder

### Sample Register Payload

```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "Pass@1234"
}
```

### Sample Login Payload

```json
{
  "email": "john@example.com",
  "password": "Pass@1234"
}
```

## NPM Scripts

Backend (`todo-list-backend`):

- `npm run dev` start server with nodemon
- `npm run start` start server with node

Frontend (`todo-list-app`):

- `npm run dev` run Vite dev server
- `npm run build` build production assets
- `npm run preview` preview build
- `npm run lint` run lint checks

## Troubleshooting

- Duplicate key on signup (`E11000 ... index: id_1`):
  - This comes from a stale legacy index in MongoDB.
  - The backend startup includes a cleanup step for old indexes (`id_1`, `folderName_1`).
  - Restart backend after pulling latest changes.

- `500` on register/login:
  - Verify `MONGO_URI` and `JWT_SECRET` in backend `.env`.
  - Ensure backend is running on port `5000`.

- Frontend cannot call backend:
  - Confirm backend server is running.
  - Confirm requests target `http://localhost:5000`.

## Future Improvements

- Task update endpoint (toggle complete state persisted to backend)
- Refresh token / secure cookie auth strategy
- Better validation and user feedback
- Automated tests for auth and tasks
