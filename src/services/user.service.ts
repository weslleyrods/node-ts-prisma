import { Prisma } from "@prisma/client"
import { User } from "@prisma/client"

import * as userDAO from '../DAO/user.dao'

export const createUser = async (data: Prisma.UserCreateInput ) =>{
  return await userDAO.createUser(data);
}

export const createUsers = async (users: Prisma.UserCreateInput[] ) =>{
  return await userDAO.createUsers(users);
}

export const getAllUsers = async () =>{
  return await userDAO.getAllUsers();
}

export const updateUser = async (id: number, data: Prisma.UserUpdateInput) => {
  return await userDAO.updateUser(id, data)
}

export const deleteUser = async (id: number) => {
  return await userDAO.deleteUser(id)
}

export const findUserByEmailAndPassword = async (email: string, password: string) => {
  return await userDAO.findUserByEmailAndPassword(email, password);
}

export const createUserToken = async (user: User) => {
  return await userDAO.createUserToken(user);
}

export const findUserByToken = async (token: string) => {
  return await userDAO.findUserByToken(token);
}

