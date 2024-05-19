import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo'
import { IntrospectAndCompose } from '@apollo/gateway'
import { StargateController } from './stargate.controller'
import { StargateService } from './stargate.service'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [],
        }),
      },
    }),
  ],
  controllers: [StargateController],
  providers: [StargateService],
})
export class StargateModule {}
