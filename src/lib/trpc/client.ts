import { createTRPCClient, httpBatchLink } from '@trpc/client'

import { AppRouter } from './router'

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return ''
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return `http://localhost:${process.env.PORT ?? 3000}`
}

let token: string

export function setToken(newToken: string) {
  token = newToken
}

export const serverClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: getBaseUrl() + '/api/trpc',
      headers() {
        return {
          Authorization: token,
        }
      },
    }),
  ],
})
