import { createTRPCClient, httpBatchLink } from '@trpc/client'

import { AppRouter } from './router'

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    console.log('trpc client url "" ')
    return ''
  }
  if (process.env.TRPC_SERVER_URL) {
    console.log('trpc client url - TRPC_SERVER_URL: ', process.env.TRPC_SERVER_URL)
    return `${process.env.TRPC_SERVER_URL}`
  }
  if (process.env.VERCEL_URL) {
    console.log('trpc client url - vercel: ', `https://${process.env.VERCEL_URL}`)
    return `https://${process.env.VERCEL_URL}`
  }

  console.log('trpc client url - localhost: ', `http://localhost:${process.env.PORT ?? 3000}`)
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
