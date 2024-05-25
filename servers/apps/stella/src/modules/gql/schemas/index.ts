/* eslint-disable @typescript-eslint/no-unused-vars */
import { objectType, queryType, makeSchema } from 'nexus'
import { PrismaService, prisma as Prisma, Nexus } from '@nexel/prisma'
import { join } from 'path'
import { PetSchema } from './pets'
import { PostSchema } from './post'

export const schema = makeSchema({
  types: [PostSchema, ...PetSchema],
  outputs: {
    schema: join(process.cwd(), 'generated/gql/schema.gen.graphql'),
    typegen: join(process.cwd(), 'generated/gql/nexusTypes.gen.ts'),
  },
})
