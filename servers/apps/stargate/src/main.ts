import { NestFactory, HttpAdapterHost } from '@nestjs/core'
import { ValidationPipe, Logger } from '@nestjs/common'
import { Integration } from '@nexel/nestjs'
import { Middleware } from '@stargate/middleware'
import { env } from '@stargate/config'

import { StargateModule } from './stargate.module'

async function bootstrap() {
  Integration.Sentry.Init({
    sentry: env.sentry,
    app: { version: env.app.version },
  })
  const app = await NestFactory.create(StargateModule)
  Middleware.Init(app)
  app.useGlobalPipes(new ValidationPipe())
  const { httpAdapter } = app.get(HttpAdapterHost)
  app.useGlobalFilters(new Integration.Sentry.Filter(httpAdapter))
  await app.listen(env.expressPort || 4040, '0.0.0.0')
  Logger.log(`[Env] Is production: ${env.production}`)
  Logger.log(`[App] running on: ${await app.getUrl()}`)
  Logger.log(`[GraphQL] Playground: ${await app.getUrl()}/graphql`)
}
bootstrap()
