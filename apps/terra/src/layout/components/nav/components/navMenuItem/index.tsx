/* eslint-disable react-hooks/rules-of-hooks */

import { motion } from 'framer-motion'
import Link from 'next/link'
import clsx from 'clsx'
import type { tNavPrimaryRoutes } from '@global/config/routes'
import { aNavChildren } from '@global/config/config.animation'
import { tNavRouteActiveState } from '@global/store/state.extend'

import ScrollProgress from './scrollProgress'

function NavMenuItem({
  menuItem,
  index,
  _navRouteActiveState,
}: {
  menuItem: tNavPrimaryRoutes
  index: number
  _navRouteActiveState: tNavRouteActiveState
}) {
  return (
    <motion.div
      initial={aNavChildren.initial}
      exit={aNavChildren.exit}
      animate={aNavChildren.animate}
      transition={aNavChildren.transition(index / 10)}
      className={clsx(
        'el:mr-12 flex xl:mr-6',
        _navRouteActiveState.id !== index && 'Anim AnimOpacity-20',
      )}
    >
      <Link
        href={menuItem.path}
        className={clsx(
          'AnimUnderline-FirstChild navMenuItem mb-2 w-full rounded-md bg-black/10 p-2 md:mb-0 md:bg-transparent md:p-0 dark:bg-white/10 dark:md:bg-transparent',
          _navRouteActiveState.id === index &&
            'border-quaternary-2 dark:border-primary-0 border-l-2 md:border-none',
        )}
      >
        <div className='relative flex h-full items-start md:items-center'>
          <p
            className={clsx(
              'text-2xs font-black',
              _navRouteActiveState.id === index &&
                'Anim text-quaternary-2 dark:text-primary-0',
            )}
          >
            0{index + 1}
          </p>
          <p className='xxl:text-sm el:pl-3 pl-1 text-xs font-bold'>
            {menuItem.title}
          </p>
        </div>
        {(_navRouteActiveState.id === index ||
          _navRouteActiveState.id === 99) && (
          <div className='relative w-[calc(100%-20px)]'>
            {_navRouteActiveState.id === index && (
              <ScrollProgress _navRouteActiveState={_navRouteActiveState} />
            )}
            <div className='ml-[10px] h-0.5 w-full bg-white opacity-20' />
          </div>
        )}
      </Link>
    </motion.div>
  )
}

export default NavMenuItem
