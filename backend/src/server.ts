import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from './util/server.utils';
import { app } from './app';
import mongoose from 'mongoose';

const URI: string = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(URI, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log('Database connected');
  app.listen(4000, () => {
    console.log('Server connect on port: 4000');
  });
});
