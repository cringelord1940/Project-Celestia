/**
 * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
 * middlewares) or client-side so we need to destruct manually.
 */

export const runtimeEnv = {
  // ** ENVIRONMENT
  // NODE_ENV: process.env.NODE_ENV,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  TOKEN: process.env.TOKEN,
  // ** DATABASE
  GRAPHQL_CONTENT_URL: process.env.GRAPHQL_CONTENT_URL,
  GRAPHQL_PROJECT_URL: process.env.GRAPHQL_PROJECT_URL,
  GRAPHQL_SHOP_URL: process.env.GRAPHQL_SHOP_URL,
  MONGODB_URI: process.env.MONGODB_URI,
  ACCELERATE_URI: process.env.ACCELERATE_URI,
  REDIS_URL: process.env.REDIS_URL,
  // ** API
  AUTH_FB_APP_ID: process.env.AUTH_FB_APP_ID,
  AUTH_FB_APP_SECRET: process.env.AUTH_FB_APP_SECRET,
  AUTH_GITHUB_CLIENT_ID: process.env.AUTH_GITHUB_CLIENT_ID,
  AUTH_GITHUB_CLIENT_SECRET: process.env.AUTH_GITHUB_CLIENT_SECRET,
  AUTH_GOOGLE_CLIENT_ID: process.env.AUTH_GOOGLE_CLIENT_ID,
  AUTH_GOOGLE_CLIENT_SECRET: process.env.AUTH_GOOGLE_CLIENT_SECRET,
  AUTH_DISCORD_CLIENT_ID: process.env.AUTH_DISCORD_CLIENT_ID,
  AUTH_DISCORD_CLIENT_SECRET: process.env.AUTH_DISCORD_CLIENT_SECRET,
  // ** S3
  S3_ORIGINS: process.env.S3_ORIGINS,
  S3_UPLOAD_ENDPOINT: process.env.S3_UPLOAD_ENDPOINT,
  S3_UPLOAD_KEY: process.env.S3_UPLOAD_KEY,
  S3_UPLOAD_SECRET: process.env.S3_UPLOAD_SECRET,
  S3_UPLOAD_REGION: process.env.S3_UPLOAD_REGION,
  S3_UPLOAD_BUCKET: process.env.S3_UPLOAD_BUCKET,
  // ** EMAIL
  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_PORT: process.env.EMAIL_PORT,
  EMAIL_SECURE: process.env.EMAIL_SECURE,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  EMAIL_FROM: process.env.EMAIL_FROM,
  // ** PAYMENT
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  STRIPE_DONATE_ID: process.env.STRIPE_DONATE_ID,
  STRIPE_METADATA_KEY: process.env.STRIPE_METADATA_KEY,
  // ** MISC
  NEXT_PUBLIC_GTM: process.env.NEXT_PUBLIC_GTM,
  NEXT_PUBLIC_S3_DOWNLOAD_ENDPOINT:
    process.env.NEXT_PUBLIC_S3_DOWNLOAD_ENDPOINT,
  NEXT_PUBLIC_S3_UPLOAD_ENDPOINT: process.env.NEXT_PUBLIC_S3_UPLOAD_ENDPOINT,
}
