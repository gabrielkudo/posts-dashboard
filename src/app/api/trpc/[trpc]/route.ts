import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { User } from 'next-auth'

import { appRouter } from '@/lib/trpc/router'
import { JWTGateway } from '@/utils/jwt'

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: async () => {
      async function getUserFromReq(req: Request) {
        console.log(
          'Nextjs - TRPC Router - req.headers.has(autorization): ',
          req.headers.has('authorization'),
        )
        if (!req.headers.has('authorization')) {
          return null
        }

        const token = req.headers.get('authorization')
        console.log('Nextjs - TRPC Router - header token ', token)
        if (token && token !== 'undefined') {
          const user = await JWTGateway.decode<User>({
            token,
          })

          return user
        }

        return null
      }

      const user = await getUserFromReq(req)

      return { user }
    },
  })

export { handler as GET, handler as POST }
