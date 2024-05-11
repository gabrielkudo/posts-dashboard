import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { serverClient, setToken } from '@/lib/trpc/client'

const delay = (amount = 750) => new Promise((resolve) => setTimeout(resolve, amount))

export const PasswordCredentialProvider = 'credentials'

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: PasswordCredentialProvider,
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials) {
        if (!credentials) {
          return null
        }

        const { email, password } = credentials

        if (!email || !password) {
          return null
        }

        await delay(200)

        try {
          console.log('sending login request to trpc: ', email, password)
          const result = await serverClient.login.mutate({ email, password })

          if (result) {
            return {
              id: result.id,
              email: result.email,
              name: result.name,
              jwt: result.token,
            }
          }
        } catch (err) {
          console.log('err calling trpc: ', err)
          return {
            id: '1',
            email,
            name: 'debugging vercel',
            jwt: 'debugging vercel',
          }
        }

        return null
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/',
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user)

      return token
    },
    async session({ session, token }) {
      const user = token.user as any
      try {
        setToken(user.jwt)
        const result = await serverClient.me.query()
        if (!result) {
          throw new Error('invalid user')
        }
      } catch (err) {
        // TODO: Expire token session and return the session
        console.log(err)
      }
      return session
    },
  },
}
