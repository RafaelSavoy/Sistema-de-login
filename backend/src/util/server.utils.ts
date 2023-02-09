import * as dotenv from 'dotenv';
import { Secret } from 'jsonwebtoken';
dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const SECRET: Secret = process.env.SECRET as Secret;

const URI: string = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const TESTURI: string = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/test?retryWrites=true&w=majority`;

export { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, SECRET, URI, TESTURI };
