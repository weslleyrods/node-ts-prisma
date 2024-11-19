import {Request, Response, RequestHandler} from 'express';
import { User } from "@prisma/client"
import jwt from 'jsonwebtoken'

import { 
  createUser as createUserService, 
  createUsers as createUsersService,
  getAllUsers as getAllUsersService,
  updateUser as updateUserService,
  deleteUser as deleteUserService,
  findUserByEmailAndPassword as findUserByEmailAndPasswordService,
  createUserToken as createUserTokenService,
  findUserByToken as findUserByTokenService
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

export const getAllUsers: RequestHandler = async(req, res)=> {
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

export const findUserByEmailAndPassword = async (email: string, password: string) => {
  try{
    const user = await findUserByEmailAndPasswordService(email, password);
    if(!user)return null
    return user;
  }catch(error){
    console.log('Error finding user by email and password', error);
  }
}

export const createUserToken = async (user: User) => {
  try{
    const token = await createUserTokenService(user);
    if(!token)return null
    return token.id
  }catch(error){
    console.log('Error creating token', error);
  }
}

export const createUserJWT = async (user: User) => {
  try{
    const payload = {
      id: user.id
    }
    return jwt.sign(payload, process.env.JWT_TOKEN as string, {
      expiresIn: '1 minute'
    })
  }catch(error){
    console.log('Error creating token', error);
  }
}

export const findUserByToken = async (token: string) => {
  try{
    const user = await findUserByTokenService(token);
    if(!user)return null
    return user
  }catch(error){
    console.log('Error finding user by token', error);
  }
}