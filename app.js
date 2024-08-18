const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, './views')));


// Middleware to parse JSON bodies
app.use(express.json());

// In-memory store for tasks
let tasks = [];

// Route to get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Route to add a new task
app.post('/tasks', (req, res) => {
  const { task } = req.body;
  if (task) {
    tasks.push({ id: tasks.length + 1, task });
    res.status(201).json({ message: 'Task added!' });
  } else {
    res.status(400).json({ message: 'Task is required' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
