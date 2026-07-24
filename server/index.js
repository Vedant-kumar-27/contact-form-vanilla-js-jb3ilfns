import express from 'express';
import cors from 'cors';
import contactFormRoutes from './routes/contactForm.js';

const app = express();
const PORT = 3000;

// CORS middleware
app.use(cors());

app.use(express.json());

// Contact form routesujghjghj
app.use('/api', contactFormRoutes);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

