const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todos');

const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'https://todo-fullstack-app.vercel.app', // replace with your actual Vercel URL
];

app.use(cors());
app.use(express.json());

app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => res.send('API is running ...'));

module.exports = app;