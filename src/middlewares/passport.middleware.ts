import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { LocalStrategyResponse } from '../types/passport';
import { User } from "@prisma/client";

export const localStrategyAuth = (req: Request, res: Response, next: NextFunction) => {
  const authRequest = passport.authenticate('local', (err: any, response: LocalStrategyResponse | false) => {
    if(!response) return res.status(401).json({error: "Unauthorized"});
    req.user = response.user;
    req.authInfo = response.auth;
    return next();
  }) 
  return authRequest(req, res, next);
}

export const bearerStrategyAuth = (req: Request, res: Response, next: NextFunction) => {
  const authRequest = passport.authenticate('bearer', 
    (err: any, user: User | false) => {
      if(!user) return res.status(401).json({error: "Unauthorized"});
      req.user = user;
      return next();
  })
  return authRequest(req, res, next);
}