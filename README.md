# TODO Fullstack App

A full-stack TODO application built with React, Node.js, Express, and MongoDB.

## Live Demo
- Frontend: https://todo-fullstack-app.vercel.app
- Backend API: https://todo-api.onrender.com

## Project Structure
todo-fullstack-app/
├── client/     # React frontend
│   └── README.md
├── server/     # Express backend
│   └── README.md
└── README.md

## Tech Stack
| Layer     | Technology              |
|-----------|------------------------|
| Frontend  | React.js               |
| Backend   | Node.js + Express.js   |
| Database  | MongoDB + Mongoose     |
| Hosting   | Vercel + Render        |

## Quick Start

### Start Backend
cd server
npm install
npm run dev

### Start Frontend
cd client
npm install
npm start

## Features
- View, create, edit, delete todos
- Mark todos as done/undone
- Optimistic UI updates
- Form validation
- Smooth animations and transitions
- Loading and error states
- RESTful API

## API Endpoints
| Method | Endpoint            | Description        |
|--------|---------------------|--------------------|
| GET    | /api/todos          | Get all todos      |
| POST   | /api/todos          | Create a todo      |
| PUT    | /api/todos/:id      | Update a todo      |
| PATCH  | /api/todos/:id/done | Toggle done status |
| DELETE | /api/todos/:id      | Delete a todo      |