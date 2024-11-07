import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { LocalStrategyResponse } from '../types/passport';

export const localStrategyAuth = (req: Request, res: Response, next: NextFunction) => {4
  const authRequest = passport.authenticate('local', (err: any, response: LocalStrategyResponse | false) => {
    if(!response) return res.status(401).json({error: "Unauthorized"});
    req.user = response.user;
    req.authInfo = response.auth;
    return next();
  }) 
  return authRequest(req, res, next);
}