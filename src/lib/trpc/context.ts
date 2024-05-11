import * as trpcNext from '@trpc/server/adapters/next'
import { User } from 'next-auth'

import { JWTGateway } from '@/utils/jwt'

export async function createContext({ req }: trpcNext.CreateNextContextOptions) {
  async function getUserFromHeader() {
    if (req.headers.authorization) {
      const user = await JWTGateway.decode<User>({ token: req.headers.authorization })
      return user
    }
    return null
  }

  const user = await getUserFromHeader()
  return {
    user,
  }
}

export type Context = Awaited<ReturnType<typeof createContext>>
