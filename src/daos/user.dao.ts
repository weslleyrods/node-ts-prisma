import { prisma } from "../libs/prisma"
import { Prisma } from "@prisma/client"
import { User } from "@prisma/client"

export const createUser = async (data: Prisma.UserCreateInput ) =>{
  return await prisma.user.create({ data });
}

export const createUsers = async (users: Prisma.UserCreateInput[] ) =>{
  return await prisma.user.createMany({data: users, skipDuplicates: true});
}

export const getAllUsers = async () =>{
  return await prisma.user.findMany();
}

export const updateUser = async (id: number, data: Prisma.UserUpdateInput) => {
  return await prisma.user.update({ where: { id }, data });
}

export const deleteUser = async (id: number) => {
  return await prisma.user.delete({ where: { id } });
}

export const findUserByEmailAndPassword = async (email: string, password: string) => {
  return await prisma.user.findFirst({ where: { email, password } });
}

export const createUserToken = async (user: User) => {
  return await prisma.user.findFirst({ where: { id: user.id } });
}

export const findUserByToken = async (token: string) => {
  return await prisma.user.findFirst({ where: { id: parseInt(token) } });
}