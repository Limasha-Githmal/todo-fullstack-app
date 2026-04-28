# TODO Fullstack App

A full-stack TODO application built with React.js, Node.js, Express.js,
and MongoDB. Supports full CRUD operations with a clean and responsive UI.

## Videos
- Demo Video: https://youtu.be/R6dSv7xiSUY
- Code Walkthrough: https://youtu.be/of_n2orGxWU

## Live Demo
- Frontend: https://todo-fullstack-app-five-kappa.vercel.app
- Backend API: https://todo-fullstack-app-fort.onrender.com

## Project Structure
todo-fullstack-app/
├── client/                   # React.js frontend
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── todos.js      # Centralized API calls
│   │   ├── components/
│   │   │   ├── TodoForm.jsx  # Add/Edit form
│   │   │   ├── TodoForm.css
│   │   │   ├── TodoItem.jsx  # Single todo card
│   │   │   ├── TodoItem.css
│   │   │   └── TodoList.jsx  # List of todos
│   │   ├── App.jsx           # Main app + state management
│   │   ├── App.css
│   │   └── index.js
│   └── README.md
├── server/                   # Node.js + Express backend
│   ├── src/
│   │   ├── models/
│   │   │   └── Todo.js       # Mongoose schema
│   │   ├── routes/
│   │   │   └── todos.js      # REST API endpoints
│   │   └── app.js            # Express app setup
│   ├── server.js             # Entry point
│   └── README.md
├── package.json              # Monorepo root
└── README.md

## Tech Stack
| Layer       | Technology            |
|-------------|-----------------------|
| Frontend    | React.js              |
| Backend     | Node.js + Express.js  |
| Database    | MongoDB + Mongoose    |
| Hosting FE  | Vercel                |
| Hosting BE  | Render                |
| Database    | MongoDB Atlas         |

## Quick Start

### Install all dependencies at once
```bash
npm run install-all
```

### Run both frontend and backend together
```bash
npm start
```

### Or run separately

Backend:
```bash
cd server
npm run dev
```

Frontend:
```bash
cd client
npm start
```

## Features
- View all todos
- Create todo with title and optional description
- Edit todo title and description
- Mark todo as done/undone
- Delete todo with slide-out animation
- Created and updated timestamps on each todo
- Optimistic UI updates
- Form validation
- User-friendly error messages
- Smooth animations and transitions
- Loading and error states
- Monorepo setup with concurrently

## API Endpoints
| Method | Endpoint             | Description          |
|--------|----------------------|----------------------|
| GET    | /api/todos           | Get all todos        |
| POST   | /api/todos           | Create a new todo    |
| PUT    | /api/todos/:id       | Update a todo        |
| PATCH  | /api/todos/:id/done  | Toggle done status   |
| DELETE | /api/todos/:id       | Delete a todo        |