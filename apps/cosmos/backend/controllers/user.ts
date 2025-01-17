import { createTRPCRouter } from '../trpc'
import { userPortalRouter } from './user.portal'
import { userProfileRouter } from './user.profile'

export const userRouter = createTRPCRouter({
  portal: userPortalRouter,
  profile: userProfileRouter,
})
