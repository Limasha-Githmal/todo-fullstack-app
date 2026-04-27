# TODO App — Backend

A Node.js + Express.js REST API for the TODO application.

## Tech Stack
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv (environment variables)
- cors (cross-origin requests)

## Prerequisites
- Node.js v16 or higher
- npm
- MongoDB (local or Atlas)

## Setup & Run Locally

### 1. Install dependencies
cd server
npm install

### 2. Configure environment variables
Create a .env file in the server/ folder:

For local MongoDB:
MONGO_URI=mongodb://localhost:27017/todoapp
PORT=5000

For MongoDB Atlas:
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp?retryWrites=true&w=majority
PORT=5000

### 3. Start the server
Development mode (auto-restart):
npm run dev

Production mode:
npm start

Server runs at http://localhost:5000

## API Endpoints

| Method | Endpoint            | Description          |
|--------|---------------------|----------------------|
| GET    | /api/todos          | Get all todos        |
| POST   | /api/todos          | Create a new todo    |
| PUT    | /api/todos/:id      | Update a todo        |
| PATCH  | /api/todos/:id/done | Toggle done status   |
| DELETE | /api/todos/:id      | Delete a todo        |

## MongoDB Connection Notes

### Local MongoDB
- Install MongoDB Community Edition
- Start service: net start MongoDB
- Connection: mongodb://localhost:27017/todoapp

### MongoDB Atlas (Cloud)
- Create free account at mongodb.com/atlas
- Create a free M0 cluster
- Whitelist IP: 0.0.0.0/0
- Get connection string and paste in .env

## Assumptions & Limitations
- No authentication (single user app)
- Title is required, description is optional
- Todos sorted by newest first