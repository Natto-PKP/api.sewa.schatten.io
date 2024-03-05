import Express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

export const Server = Express();

Server.use(cors());
Server.use(cookieParser(process.env.SIGNED_COOKIE_SECRET));
Server.use(Express.json());
Server.use(Express.urlencoded({ extended: true }));
