import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import aiRoutes from './src/routes/ai.routes.js';
import cookieParser from 'cookie-parser';
import authRoutes from './src/routes/authRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './src/lib/db.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}

app.get('/', (req, res) => {
  res.send('Hello World');
});

connectDB();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});    