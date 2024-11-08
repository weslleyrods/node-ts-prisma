import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { findUserByToken } from '../controllers/user.controller';

export const bearerStrategy = new BearerStrategy( async (token, done) => {
  const user = await findUserByToken(token);
  if(!user) return done(null, false);
  else return done(null, user);
});
