const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todos');

const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'https://todo-fullstack-app-five-kappa.vercel.app',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

app.use(express.json());

app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => res.send('API is running ...'));

module.exports = app;