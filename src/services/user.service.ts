import { Prisma } from "@prisma/client"
import { User } from "@prisma/client"

import * as userModel from '../models/user.model'

export const createUser = async (data: Prisma.UserCreateInput ) =>{
  return await userModel.createUser(data);
}

export const createUsers = async (users: Prisma.UserCreateInput[] ) =>{
  return await userModel.createUsers(users);
}

export const getAllUsers = async () =>{
  return await userModel.getAllUsers();
}

export const updateUser = async (id: number, data: Prisma.UserUpdateInput) => {
  return await userModel.updateUser(id, data)
}

export const deleteUser = async (id: number) => {
  return await userModel.deleteUser(id)
}

export const findUserByEmailAndPassword = async (email: string, password: string) => {
  return await userModel.findUserByEmailAndPassword(email, password);
}

export const createUserToken = async (user: User) => {
  return await userModel.createUserToken(user);
}

