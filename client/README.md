# TODO App — Frontend

React.js frontend for the TODO fullstack application.

## Videos
- Demo Video: https://youtu.be/R6dSv7xiSUY
- Code Walkthrough: https://youtu.be/of_n2orGxWU

## Live URL
https://todo-fullstack-app-five-kappa.vercel.app

## Tech Stack
- React.js
- Axios (HTTP requests)
- CSS (custom animations and transitions)

## Structure
src/
├── api/
│   └── todos.js           # All API calls centralized
├── components/
│   ├── TodoForm.jsx        # Add and edit form
│   ├── TodoForm.css
│   ├── TodoItem.jsx        # Single todo card
│   ├── TodoItem.css
│   └── TodoList.jsx        # Renders list of todos
├── App.jsx                 # State management and handlers
├── App.css
└── index.js

## Setup & Run Locally

### 1. Install dependencies
```bash
cd client
npm install
```

### 2. Create `.env` file inside `client/`
REACT_APP_API_URL=http://localhost:5000/api/todos

### 3. Start the app
```bash
npm start
```

App runs at: http://localhost:3000

> Make sure the backend server is running first!

## Features
- View all todos
- Create todo with title and optional description
- Edit todo title and description
- Mark as done/undone with toggle button
- Delete todo with slide-out animation
- Title and description labels on each todo card
- Created and updated timestamps displayed on each card
- Optimistic UI updates — UI updates instantly before server response
- Form validation — title is required
- User-friendly error messages with shake animation
- Smooth animations — slide in, slide out, hover effects
- Loading and error states handled gracefully

## Component Overview
| Component    | Purpose                              |
|--------------|--------------------------------------|
| App.jsx      | Main state management and handlers   |
| TodoForm.jsx | Handles both create and edit modes   |
| TodoItem.jsx | Renders a single todo card           |
| TodoList.jsx | Renders the full list of todos       |
| api/todos.js | Centralized axios API calls          |

## Assumptions & Limitations
- Backend must be running before starting the frontend
- No user authentication — single user app
- All todos load at once — no pagination
- REACT_APP_API_URL must be set correctly in .env