import { TRPCError, initTRPC } from '@trpc/server'

import { Context } from './context'

const t = initTRPC.context<Context>().create()

export const publicProcedure = t.procedure

export const privateProcedure = t.procedure.use(async function isAuthorized(opts) {
  const { ctx } = opts
  if (!ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  return opts.next({
    ctx: {
      user: ctx.user,
    },
  })
})

export const { createCallerFactory, router } = t
