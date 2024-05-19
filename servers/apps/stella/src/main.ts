import { NestFactory, HttpAdapterHost } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { Logger } from '@nexel/nestjs'
import { Integration } from '@nexel/nestjs'
import { Middleware } from '@stella/middleware'
import { env } from '@stella/config'

import { AppModule } from './app.module'

async function bootstrap() {
  Integration.Sentry.Init({
    sentry: env.sentry,
    app: { version: env.app.version },
  })
  const app = await NestFactory.create(AppModule)
  Middleware.Init(app)
  app.useGlobalPipes(new ValidationPipe())
  const { httpAdapter } = app.get(HttpAdapterHost)
  app.useGlobalFilters(new Integration.Sentry.Filter(httpAdapter))
  await app.listen(env.expressPort || 4050, '0.0.0.0')
  Logger.log(`[Env] Is production: ${env.production}`, 'white')
  Logger.log(`[App] running on: ${await app.getUrl()}`, 'white')
  Logger.log(`[GraphQL] Playground: ${await app.getUrl()}/graphql`, 'white')
}
bootstrap()
