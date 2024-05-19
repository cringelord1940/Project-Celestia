import * as Sentry from '@sentry/node'
import { Logger } from '../logger'
import { prisma } from '@nexel/prisma'

type config = { sentry: { dsn: string }; app?: { version: string } }

const Init = (config: config) => {
  Sentry.init({
    dsn: config.sentry.dsn,
    release: config.app.version,
    environment: process.env.NODE_ENV,
    integrations: [
      // new Sentry.Integrations.Http({ tracing: true }),
      // Sentry.anrIntegration({ captureStackTrace: true }),
      // new Sentry.Integrations.Apollo({ useNestjs: true }),
      // new Sentry.Integrations.Prisma({ client: prisma }),
    ],
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0,
  })
  Logger.log('Sentry initialized')
}

export { Init }
