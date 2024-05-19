import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ThrottlerModule } from '@nestjs/throttler'
import { ThrottlerModuleOptions } from '@nestjs/throttler'
// import { GraphQLModule } from '@nestjs/graphql'
// import {
//   ApolloFederationDriver,
//   ApolloFederationDriverConfig,
// } from '@nestjs/apollo'
import { PrismaModule } from '@nexel/prisma'
import { AppController } from '@stella/app.controller'
import config from '@stella/config'
import { AppService } from './app.service'
import { GqlModule } from './modules/gql'

import { Modules } from './modules'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        config.get<ThrottlerModuleOptions>('throttle'),
    }),
    GqlModule,
    PrismaModule,
    // GraphQLModule.forRoot<ApolloFederationDriverConfig>({
    //   driver: ApolloFederationDriver,
    //   autoSchemaFile: {
    //     federation: 2
    //   }
    // }),
    ...Modules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
