import type { Session } from 'next-auth'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth'
import { prisma } from '../database'
import { MinioClient as s3 } from '@nexel/nextjs/libs/storage'
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch'

type CreateContextOptions = {
  session: Session | null
} & FetchCreateContextFnOptions

const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    req: opts.req,
    resHeaders: opts.resHeaders,
    session: opts.session,
    prisma,
    s3,
  }
}

export const createTRPCContext = async (opts: FetchCreateContextFnOptions) => {
  const session = await getServerSession(authOptions)

  return createInnerTRPCContext({
    ...opts,
    session,
  })
}

export type Context = AsyncReturnType<typeof createTRPCContext>
