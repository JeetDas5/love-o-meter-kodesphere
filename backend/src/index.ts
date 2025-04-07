import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import loveroutes from './routes/loveroutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/love', loveroutes)


app.get("/", (_req, res) => {
  res.send("❤️ Love-o-meter backend is live!");
});


app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
