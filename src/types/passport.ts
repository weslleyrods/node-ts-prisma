import { User } from "@prisma/client"

export type LocalStrategyResponse = {
  auth: {
    token: string
  },
  user: User
}