
import express from "express";
import path from 'path';
import dotenv from 'dotenv';
import { route } from './routes';

dotenv.config();
const server = express();
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(route);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
