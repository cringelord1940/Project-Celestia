import type { Session, Providers } from '@types'
import { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { startCase } from 'lodash-es'
import clsx from 'clsx'
import { NAV, NAV_ACTION } from '@/store'
import { Settings } from './action.settings'
import { User } from './action.user'
import { Cart } from './action.cart'

interface NavActionProps {
  session: Session | null
  providers: Providers | null
  action: NAV_ACTION | undefined
  _nav: NAV
}

export const NavAction: React.FC<NavActionProps> = ({
  session,
  providers,
  action,
  _nav,
}) => {
  const Components = useMemo(
    () => ({
      settings: Settings,
      user: () => <User session={session} providers={providers} />,
      cart: Cart,
      notifications: () => null,
      wallet: () => null,
      menu_canvas: () => null,
    }),
    [session, providers],
  )

  const Component =
    action !== undefined ? Components[action as NAV_ACTION] : () => null

  return (
    <>
      <AnimatePresence>
        {action && action !== NAV_ACTION.MENU_CANVAS && (
          <motion.div
            className={clsx(
              'absolute left-1/2 z-90 min-w-48 rounded-md border border-foreground/10 bg-background/20 px-4 py-6 backdrop-blur-md',
              _nav === NAV.TOP ? 'top-20' : 'bottom-20',
            )}
            initial={{ y: 20, opacity: 0, x: '-50%' }}
            animate={{ y: 0, opacity: 1, x: '-50%' }}
            exit={{ y: 20, opacity: 0, x: '-50%' }}
          >
            <h6 className='mb-2 font-bold'>{startCase(action)}</h6>
            <Component />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
