import { prisma } from "../libs/prisma"
import { Prisma } from "@prisma/client"

export const createUser = async (data: Prisma.UserCreateInput ) =>{
  return await prisma.user.create({ data })
}

export const createUsers = async (users: Prisma.UserCreateInput[] ) =>{
  return await prisma.user.createMany({data: users, skipDuplicates: true})
}

export const getAllUsers = async () =>{
  return await prisma.user.findMany();
}

export const updateUser = async (id: number, data: Prisma.UserUpdateInput) => {
  return await prisma.user.update({ where: { id }, data })
}

export const deleteUser = async (id: number) => {
  return await prisma.user.delete({ where: { id } })
}