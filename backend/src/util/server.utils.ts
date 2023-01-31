import * as dotenv from 'dotenv';
import { Secret } from 'jsonwebtoken';
dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const SECRET: Secret = process.env.SECRET as Secret;

export { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, SECRET };
