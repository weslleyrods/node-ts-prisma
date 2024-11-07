import {Request, Response } from 'express';
import { 
  createUser as createUserService, 
  createUsers as createUsersService,
  getAllUsers as getAllUsersService,
  updateUser as updateUserService,
  deleteUser as deleteUserService
} from '../services/user.service';

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

export const getAllUsers = async(req: Request, res: Response)=> {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  }
  catch(error){
    res.status(500).json({erro: "Get all users error"});
  }
}

export const updateUser = async(req: Request, res: Response)=> {
  try{
    const id = parseInt(req.params.id);
    const user = await updateUserService(id, req.body);
    res.status(200).json(user);

  }catch(error){
    res.status(500).json({erro: "Update user error"});
  }
}

export const deleteUser = async(req: Request, res: Response)=> {
  try{
    const id = parseInt(req.params.id);
    const user = await deleteUserService(id);
    res.status(200).json(user);
  }catch(error){
    res.status(500).json({erro: "Delete user error"});
  }
}
