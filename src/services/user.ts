import { prisma } from "../libs/prisma"
import { Prisma } from "@prisma/client"

// type CrateUserProps = {
//   name: string,
//   email: string
// }

export const createUser = async (data: Prisma.UserCreateInput ) =>{
  return await prisma.user.create({ data })
}