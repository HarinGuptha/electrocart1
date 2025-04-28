// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('dab.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom error handling middleware
server.use((req, res, next) => {
  try {
    // Handle potential URI malformed errors
    next();
  } catch (err) {
    console.error('Error in request:', err);
    res.status(400).json({ error: 'Bad request' });
  }
});

// Use default router
server.use(router);

// Start server
const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
  console.log(`Server endpoints:`);
  console.log(`http://localhost:${port}/users`);
});
