/**
 * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
 * middlewares) or client-side so we need to destruct manually.
 */

export const runtimeEnv = {
  // ** ENVIRONMENT
  NODE_ENV: process.env.NODE_ENV,
  // ** DATABASE
  GRAPHQL_CONTENT_URL: process.env.GRAPHQL_CONTENT_URL,
  GRAPHQL_PROJECT_URL: process.env.GRAPHQL_PROJECT_URL,
  GRAPHQL_SHOP_URL: process.env.GRAPHQL_SHOP_URL,
  // ** MISC
  NEXT_PUBLIC_GTM: process.env.NEXT_PUBLIC_GTM,
  NEXT_PUBLIC_S3_DOWNLOAD_ENDPOINT:
    process.env.NEXT_PUBLIC_S3_DOWNLOAD_ENDPOINT,
}
