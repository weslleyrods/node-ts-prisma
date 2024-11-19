import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import { findUserByToken } from '../controllers/user.controller';

const payload = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_TOKEN as string
}

export const jwtStrategy = new JWTStrategy(payload, async(payload, done) => {
  console.log('payload', payload);
  const { id } = payload;
  const user = await findUserByToken(id);
  if(!user) return done(null, false);
  else return done(null, user);
})