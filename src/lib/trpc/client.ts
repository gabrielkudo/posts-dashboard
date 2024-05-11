import { createTRPCClient, httpBatchLink } from '@trpc/client'

import { AppRouter } from './router'

function getBaseUrl() {
  if (process.env.TRPC_SERVER_URL) {
    return `${process.env.TRPC_SERVER_URL}`
  }

  return ''
}

let token: string | null

export function setToken(newToken: string | null) {
  token = newToken
}

export const serverClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: getBaseUrl() + '/api/trpc',
      headers() {
        if (token) {
          return {
            Authorization: token,
          }
        }

        return {}
      },
    }),
  ],
})
