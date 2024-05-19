/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApolloServerPlugin } from '@apollo/server'
import { ApolloDriverConfig } from '@nestjs/apollo'
import { Injectable } from '@nestjs/common'
import { schema } from './schemas'
import { GqlOptionsFactory } from '@nestjs/graphql'

import { ConfigService } from '@nestjs/config'
import { PrismaService } from '@nexel/prisma'
import { IContext } from './context'

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  createGqlOptions(): ApolloDriverConfig {
    const plugins: ApolloServerPlugin[] = []

    return {
      schema,
      //   playground: false,
      plugins,
      allowBatchedHttpRequests: true,
      //   csrfPrevention: this.config.graphql.csrfPrevention,
      cache: 'bounded',
      installSubscriptionHandlers: true,
      subscriptions: {
        'graphql-ws': {
          onConnect: (context: any) => {
            const { connectionParams, extra } = context
            extra.token = connectionParams.token
          },
        },
      },
      context: async (ctx: any): Promise<IContext> => {
        // Subscriptions pass through JWT token for authentication
        if (ctx.extra) return { req: ctx.extra, prisma: this.prisma }
        // Queries, Mutations
        else return { ...ctx, prisma: this.prisma }
      },
    }
  }
}
