import dotenv from 'dotenv';
dotenv.config();

export const MONGO_URL = process.env.MONGO_URL
export const PORT = process.env.PORT
export const DB_NAME = process.env.DB_NAME