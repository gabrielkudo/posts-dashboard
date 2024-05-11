/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name: string
    } & DefaultSession['user']
  }

  interface User {
    jwt: string
    id: string
    email: string
    name: string
  }
}
