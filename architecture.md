# HabitHobby Architecture

## 1. Overview
HabitHobby is a full-stack task management application with authentication.
The system is split into two deployable parts:
- Frontend client in React and Vite
- Backend API in Node.js and Express with MongoDB

Each authenticated user has private default folders and folder-specific task lists.

## 2. High-Level Components

### Frontend
Path: todo-list-app

Main responsibilities:
- Render Sign Up and Sign In experiences
- Store JWT token and user profile in browser local storage
- Guard private routes using a protected route component
- Fetch, add, and delete tasks through authenticated API requests

Key modules:
- src/App.jsx: route wiring
- src/components/RegisterPage: authentication forms and API calls
- src/components/HomePage: task list interactions
- src/ProtectedRoute: login guard

### Backend
Path: todo-list-backend

Main responsibilities:
- Connect to MongoDB
- Register and authenticate users
- Issue JWT tokens
- Authorize protected task endpoints
- Enforce per-user task isolation

Key modules:
- server.js: app bootstrap and middleware wiring
- routes/todoRoutes.js: API route definitions
- controllers/todoController.js: auth and task handlers
- middleware/authMiddleware.js: JWT verification
- models/TaskManager.js: schema, indexes, password helpers
- utils/seedDefaultFolders.js: create default folders at signup
- config/db.js: Mongo connection and legacy index cleanup

## 3. Data Model
Collection: taskmanagers

Document shape:
- userDetails
  - userId
  - userName
  - email
  - password (hashed)
- folderName
- list (array of tasks)
  - taskId
  - task
  - isDone
- createdAt

Index strategy:
- Unique compound index on userDetails.userId + folderName
  - Ensures one folder name per user
- Non-unique index on userDetails.email
  - Speeds up login and duplicate user checks

Legacy index handling:
- Startup logic attempts to drop old stale indexes:
  - id_1
  - folderName_1
This prevents duplicate key failures from outdated schema history.

## 4. Authentication and Authorization Flow

### Registration
1. Frontend sends name, email, and password to POST /api/todos/register
2. Backend validates payload and checks if email already exists
3. Backend creates a new userId
4. Backend seeds default folders for that user
5. Backend hashes password before storage
6. Backend returns JWT and user payload

### Login
1. Frontend sends email and password to POST /api/todos/login
2. Backend looks up user by email
3. Backend compares plaintext password with hashed password
4. Backend returns JWT and user payload on success

### Protected requests
1. Frontend sends Authorization header with Bearer token
2. authMiddleware verifies token using JWT secret
3. Controller uses req.user.userId for all folder/task queries
4. Data access is restricted to that authenticated user

## 5. Request Flow for Tasks

Read folder tasks:
- GET /api/todos/:folderId/
- Query filter: userDetails.userId + folderName

Add task:
- POST /api/todos/:folderId/tasks
- Adds task object with generated taskId

Delete task:
- DELETE /api/todos/:folderId/tasks/:taskId
- Removes matching task from list

## 6. Security Decisions
- Passwords are hashed with bcryptjs
- JWT is signed with server-side secret from environment variables
- Protected routes reject missing or invalid tokens
- Password field is removed from JSON serialization

## 7. Runtime Configuration
Backend environment variables:
- MONGO_URI
- JWT_SECRET
- PORT (optional, defaults to 5000)

Frontend runtime assumption:
- API base URL is currently hardcoded to http://localhost:5000

## 8. Known Constraints and Future Improvements
- Task completion toggle is currently local UI state and not persisted to backend
- User details are repeated across folder documents; can be normalized into separate User collection later
- API base URL should be moved to frontend environment variables for easier deployment
- Add tests for auth, middleware, and task operations
