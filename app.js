import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import busboy from "connect-busboy";
import { imageRouter } from './routes/imageRoutes.js';
import { defaultRouter } from './routes/defaultRoutes.js';

const app = express();

app.use(cors());

app.use(busboy());

app.use('/api/v1/default', defaultRouter);
app.use('/api/v1/images', imageRouter);

export default app;

