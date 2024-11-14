import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';

const payload = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_TOKEN as string
}

export const jwtStrategy = new JWTStrategy(payload, async(payload, done) => {
  console.log('payload', payload)
})