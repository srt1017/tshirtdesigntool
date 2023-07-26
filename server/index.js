import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import graphicbotRoutes from './routes/graphicbot.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/dalle', graphicbotRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from GraphicBot!' });
});

app.listen (8080, () => console.log('Server running on port 8080!'))