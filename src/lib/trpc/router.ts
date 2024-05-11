import { LoginInputDataValidationSchema } from '@/domain/dto/LoginData'
import { privateProcedure, publicProcedure, router } from '@/lib/trpc'
import { JWTGateway } from '@/utils/jwt'

const userData = {
  id: '1',
  name: 'Some Name',
  email: 'test@test.com',
}

export const appRouter = router({
  login: publicProcedure.input(LoginInputDataValidationSchema).mutation(async (opts) => {
    const { email, password } = opts.input

    if (email === 'test@test.com' && password === 'test123') {
      const token = await JWTGateway.sign({ payload: userData })
      return {
        ...userData,
        token,
      }
    }
  }),
  me: privateProcedure.query(() => {
    return userData
  }),
})

export type AppRouter = typeof appRouter
