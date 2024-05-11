import { createTRPCClient, httpBatchLink } from '@trpc/client'

import { AppRouter } from './router'

function getBaseUrl() {
  if (process.env.TRPC_SERVER_URL) {
    return `${process.env.TRPC_SERVER_URL}`
  }

  return ''
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
        console.log('sending the token')
        return {
          Authorization: token,
        }
      },
    }),
  ],
})
