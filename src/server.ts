
import express from "express";
import path from 'path';
import dotenv from 'dotenv';
import { route } from './routes';
import passport from 'passport';
import { localStrategy  } from './libs/passport-local';
import { bearerStrategy } from "./libs/passport-bearer";
import { jwtStrategy } from "./libs/passport-jwt";

dotenv.config();
const server = express();
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(route);
passport.use(bearerStrategy);
passport.use(localStrategy);
passport.use(jwtStrategy);
server.use(passport.initialize());

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
