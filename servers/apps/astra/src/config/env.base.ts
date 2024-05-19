import { MailerOptions } from '@nestjs-modules/mailer'
import { NestApplicationOptions } from '@nestjs/common'
import { ThrottlerModuleOptions } from '@nestjs/throttler'
export abstract class EnvironmentBase {
  readonly app: {
    readonly name: string
    readonly version: string
    readonly updateDate?: string
  }
  readonly sentry: {
    readonly dsn: string
    readonly logLevel: string
  }
  readonly siteUrl: string
  readonly production: boolean
  readonly expressPort: string | number
  readonly cors?: NestApplicationOptions['cors']
  readonly throttle: ThrottlerModuleOptions
  readonly database: {
    readonly mongoDB_uri: string
    readonly accelerator_uri: string
  }
  readonly s3: {
    readonly origin: string
    readonly endpoint: string
    readonly bucketName: string
    readonly key: string
    readonly secret: string
  }
  readonly auth: {
    readonly secret: string
    readonly token: string
    readonly expiresIn: number
    readonly google: {
      readonly clientID: string
      readonly clientSecret: string
    }
    readonly facebook: {
      readonly appID: string
      readonly appSecret: string
    }
    readonly github: {
      readonly clientID: string
      readonly clientSecret: string
    }
    readonly discord: {
      readonly clientID: string
      readonly clientSecret: string
    }
  }
  readonly mail: Omit<MailerOptions, 'template'>
  readonly graphql: {
    readonly csrfPrevention?: boolean
    readonly uploads: {
      readonly maxFileSize: number
      readonly maxFiles: number
    }
  }
}
