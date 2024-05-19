import { getServerSession } from 'next-auth'
import { authOptions } from '@server/auth'
import { type Session } from 'next-auth'
import { prisma } from '@server/database'
import minio from '@nexel/nextjs/libs/storage'

type CreateContextOptions = {
  session: Session | null
}

const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma,
    minio,
  }
}

export const createTRPCContext =
  async (/*opts: FetchCreateContextFnOptions*/) => {
    const session = await getServerSession(authOptions)

    return createInnerTRPCContext({
      session,
    })
  }

export type Context = AsyncReturnType<typeof createTRPCContext>
