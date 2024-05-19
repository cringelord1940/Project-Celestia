import { z } from 'zod'

/**
 * Specify your server-side environment variables schema here. This way you can ensure the app
 * isn't built with invalid env vars.
 */

export const serverSchema = {
  // ** ENVIRONMENT
  NODE_ENV: z.enum(['development', 'test', 'production']),
  // ** DATABASE
  GRAPHQL_CONTENT_URL: z.string().url(),
  GRAPHQL_PROJECT_URL: z.string().url(),
  GRAPHQL_SHOP_URL: z.string().url(),
}
