
import { Strategy as LocalStrategy } from 'passport-local';
import { findUserByEmailAndPassword, createUserToken } from '../services/user.service';
import { LocalStrategyResponse } from '../types/passport';

export const localStrategy = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  const user = await findUserByEmailAndPassword(email, password);
  if(!user) return done(null, false);
  else{
    const token = await createUserToken(user);
    const response: LocalStrategyResponse = {
      auth: { 
        token: String(token) },
      user
    }
    return done(null, response);
  }
})
