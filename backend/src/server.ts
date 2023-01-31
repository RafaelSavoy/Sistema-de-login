import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';
import * as dotenv from 'dotenv';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from './util/server.utils';
import bodyParser from 'body-parser';
import cors from 'cors';
dotenv.config();

const URI: string = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.get('/', (req, res) => {
  res.status(200).json('OK');
});

mongoose.connect(URI, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log('Banco de dados conectado');
  app.listen(4000, () => {
    console.log('Servidor conectado na porta: 4000');
  });
});