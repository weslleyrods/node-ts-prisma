import {Request, Response } from 'express';
import { createUser as createUserService } from '../services/user';
import { createUsers as createUsersService } from '../services/user';

export const createUser = async(req: Request, res: Response)=> {
  try {
    const user = await createUserService(req.body);
    res.status(200).json(user);
  }catch(error){
    res.status(500).json({erro: "Creater user error"});
  }
}

export const createUsers = async(req: Request, res: Response)=> {
  try {
    const users = await createUsersService(req.body);
    res.status(200).json(users);
  }catch(error){
    res.status(500).json({erro: "Creater users error"});
  }
}