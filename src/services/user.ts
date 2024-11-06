import { Prisma } from "@prisma/client"

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
