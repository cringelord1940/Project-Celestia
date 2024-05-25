import { Logger } from '@nestjs/common'
import * as dotenv from 'dotenv'

import { EnvironmentBase } from './env.base'

const logger = new Logger('EnvironmentDevelopment')
dotenv.config()
logger.log(`[ENV] file loaded`)

const env: EnvironmentBase = {
  app: {
    name: 'Celestia-STELLA',
    version: '2024.3.2201',
    updateDate: 'Mar 22, 2024',
  },
  sentry: {
    dsn: '',
    logLevel: process.env.SENTRY_LOG_LEVEL || '[info|debug|warn|error]',
  },
  siteUrl: 'http://localhost:4040/',
  production: process.env.NODE_ENV === 'production',
  expressPort: 4040,
  cors: { credentials: true, origin: true },
  throttle: {
    ignoreUserAgents: [/googlebot/gi, /bingbot/gi],
    throttlers: [
      {
        limit: 5,
        ttl: 30_000,
      },
    ],
  },
  database: {
    mongoDB_uri: process.env.MONGODB_URI,
    accelerator_uri: process.env.ACCELERATE_URI,
  },
  s3: {
    origin: process.env.S3_ORIGINS,
    endpoint: process.env.S3_UPLOAD_ENDPOINT,
    bucketName: process.env.S3_UPLOAD_BUCKET ?? 'celestia',
    key: process.env.S3_UPLOAD_KEY,
    secret: process.env.S3_UPLOAD_SECRET,
  },
  auth: {
    secret: process.env.NEXTAUTH_SECRET,
    token: process.env.TOKEN,
    expiresIn: 3600, // 1 hour (in seconds)
    google: {
      clientID: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
    },
    facebook: {
      appID: process.env.AUTH_FB_APP_ID,
      appSecret: process.env.AUTH_FB_APP_SECRET,
    },
    discord: {
      clientID: process.env.AUTH_DISCORD_CLIENT_ID,
      clientSecret: process.env.AUTH_DISCORD_CLIENT_SECRET,
    },
    github: {
      clientID: process.env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET,
    },
  },
  mail: {
    transport: {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT || 587,
      secure: process.env.EMAIL_SECURE || true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    },
    defaults: {
      from: process.env.SMTP_FROM_NAME,
    },
  },
  graphql: {
    csrfPrevention: true,
    uploads: {
      maxFileSize: 20_000_000, // 20 MB
      maxFiles: 5,
    },
  },
}

const config = (): EnvironmentBase => env

export { env }

export default config
