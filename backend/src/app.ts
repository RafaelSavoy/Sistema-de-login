import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { router } from './router';
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.get('/', (req, res) => {
  res.status(200).json('OK');
});

export { app };
