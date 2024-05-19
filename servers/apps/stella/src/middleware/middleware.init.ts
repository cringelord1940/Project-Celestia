import type { INestApplication } from '@nestjs/common'
import { Logger } from '@nexel/nestjs'
import * as cookieParser from 'cookie-parser'
import * as compression from 'compression'
import helmet from 'helmet'

const Init = (app: INestApplication<any>) => {
  app.use(cookieParser())
  app.use(compression())
  process.env.NODE_ENV === 'production' && app.use(helmet())
  Logger.log('Middleware initialized')
}

export { Init }
