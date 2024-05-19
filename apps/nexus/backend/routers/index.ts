import { exampleRouter } from './example'
import { userRouter } from './user'
import { contactRouter } from './contact'
import { createTRPCRouter } from '../trpc'

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  user: userRouter,
  contact: contactRouter,
})

export type AppRouter = typeof appRouter
