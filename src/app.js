import express from "express";
import morgan from "morgan";
import cors from "cors";

import authRoutes from './routes/auth.routes.js'
import dataRoutes from './routes/data.routes.js';
const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(morgan('dev'));
app.use(express.json());
app.use('/api',authRoutes);
app.use('/user',dataRoutes);

export default app;