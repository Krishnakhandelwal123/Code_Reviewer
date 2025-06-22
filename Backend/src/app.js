const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes.js');
const path = require('path');

const app = express();

app.use(cookieParser());
app.use(express.json());

// Enable CORS in development
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// API routes
app.use('/api/ai', aiRoutes);
app.use("/api/auth", authRoutes);

// Serve frontend static files in production
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, '..', 'frontend', 'dist');
  console.log('✅ Serving frontend from:', frontendPath);

  app.use(express.static(frontendPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
  });
}

// Default route
app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = app;
