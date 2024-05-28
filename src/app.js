import express from "express";
import morgan from "morgan";
import cors from "cors";

import authRoutes from './routes/auth.routes.js'
import dataRoutes from './routes/data.routes.js';
const app = express();
app.use(cors({
    origin: 'https://client-fit-g-life.vercel.app'
}))

app.use(morgan('dev'));
app.use(express.json());
app.use('/api',authRoutes);
app.use('/user',dataRoutes);

export default app;