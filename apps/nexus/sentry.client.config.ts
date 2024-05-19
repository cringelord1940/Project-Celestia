import * as Sentry from '@sentry/nextjs'
import config from '@global/config'

Sentry.init({
  dsn: config.app.SENTRY.dsn,
  release: config.app.VERSION,
  environment: process.env.NODE_ENV,
  debug: process.env.NODE_ENV === 'development',
  // debug: false,
  tracesSampleRate: 1.0,
  // replaysSessionSampleRate: 0.1,
  // integrations: [
  //   Sentry.replayIntegration({
  //     maskAllText: true,
  //     blockAllMedia: true,
  //   }),
  // ],
})
