# TODO App — Backend

Node.js + Express.js REST API for the TODO fullstack application.

## Videos
- Demo Video: https://youtu.be/R6dSv7xiSUY
- Code Walkthrough: https://youtu.be/of_n2orGxWU

## Live URL
https://todo-fullstack-app-fort.onrender.com

## Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- cors
- nodemon (development only)

## Structure
server/
├── src/
│   ├── models/
│   │   └── Todo.js        # Mongoose schema
│   ├── routes/
│   │   └── todos.js       # All 5 REST endpoints
│   └── app.js             # Express middleware setup
├── server.js              # Entry point
├── .env                   # Environment variables (not committed)
└── README.md

## Setup & Run Locally

### 1. Install dependencies
```bash
cd server
npm install
```

### 2. Create `.env` file inside `server/`

For MongoDB Atlas:
MONGO_URI=mongodb://limashagithmal_db_user:PrM12s3nhNpTgxTh@ac-zhhaxuo-shard-00-00.yhwcdnv.mongodb.net:27017,ac-zhhaxuo-shard-00-01.yhwcdnv.mongodb.net:27017,ac-zhhaxuo-shard-00-02.yhwcdnv.mongodb.net:27017/todo-app?ssl=true&replicaSet=atlas-qy824f-shard-0&authSource=admin&retryWrites=true&w=majority
PORT=5000

### 3. Start the server

Development mode (auto-restart on save):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

Server runs at: http://localhost:5000

## API Endpoints
| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| GET    | /api/todos           | Get all todos            |
| POST   | /api/todos           | Create a new todo        |
| PUT    | /api/todos/:id       | Update title/description |
| PATCH  | /api/todos/:id/done  | Toggle done status       |
| DELETE | /api/todos/:id       | Delete a todo            |

## Database Model
```json
{
  "_id":         "ObjectId (auto generated)",
  "title":       "String (required)",
  "description": "String (optional, default: '')",
  "done":        "Boolean (default: false)",
  "createdAt":   "Timestamp (auto)",
  "updatedAt":   "Timestamp (auto)"
}
```

## MongoDB Notes

### Local MongoDB
- Install MongoDB Community Edition
- Start the service:
```bash
net start MongoDB
```
- Connection URI:
mongodb://localhost:27017/todoapp

### MongoDB Atlas (Cloud)
- Create a free account at mongodb.com/atlas
- Create a free M0 cluster
- Add database user with username and password
- Whitelist IP address: `0.0.0.0/0`
- Copy the connection string into your `.env` file

## Security Notes
- Never commit your `.env` file to GitHub
- `.env` is listed in `.gitignore`
- CORS is configured to only allow requests from the frontend URL

## Assumptions & Limitations
- No user authentication — single user app
- Title is required, description is optional
- Todos are sorted by newest first
- Free Render instance sleeps after inactivity —
  first request may take 30-60 seconds to wake up