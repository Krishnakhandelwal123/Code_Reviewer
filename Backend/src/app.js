const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes.js');
const path = require('path');

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use('/api/ai', aiRoutes);
app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html'));
  });
}

app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = app;
