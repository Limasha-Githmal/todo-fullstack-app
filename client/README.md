# TODO App — Frontend

A React.js frontend for the TODO application.

## Tech Stack
- React.js
- Axios (HTTP requests)
- CSS (custom animations and transitions)

## Prerequisites
- Node.js v16 or higher
- npm

## Setup & Run Locally

### 1. Install dependencies
cd client
npm install

### 2. Configure API URL
The app connects to the backend at:
http://localhost:5000/api/todos

If your backend runs on a different port, update this line in:
src/api/todos.js

const BASE_URL = 'http://localhost:5000/api/todos';

### 3. Start the app
npm start

The app will open at http://localhost:3000

## Features
- View all todos
- Add a new todo (title + optional description)
- Edit a todo
- Mark todo as done/undone
- Delete a todo with slide-out animation
- Optimistic UI updates
- Form validation
- Loading and error states
- Smooth animations and transitions

## Assumptions & Limitations
- Backend must be running before starting the frontend
- No user authentication (single user app)
- Data is not paginated (all todos load at once)