'use client'

import type { Session, Providers } from '@types'
import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { useShallow } from 'zustand/react/shallow'

import { useOnClickOutside } from '@nexel/nextjs/libs/hooks/events'
import { useUiState, NAV, NAV_ACTION, MODAL, CURSOR } from '@/store'
import { IceJiLogo } from '@components/logo/IceJi'
import { Icon } from '@nexel/cosmos/assets'
import { NavAction } from './action'

interface NavbarProps {
  session: Session | null
  providers: Providers | null
}

export const NavBar: React.FC<NavbarProps> = ({ session, providers }) => {
  const [
    _dark,
    _onToggleDark,
    _audio,
    _onToggleAudio,
    _setCursor,
    _nav,
    _navAction,
    _onToggleNavAction,
    _onClearNavAction,
    _modal,
    _onToggleModal,
  ] = useUiState(
    useShallow((st) => [
      st.dark,
      st.onToggleDark,
      st.audio,
      st.onToggleAudio,
      st.setCursor,
      st.nav,
      st.navAction,
      st.onToggleNavAction,
      st.onClearNavAction,
      st.modal,
      st.onToggleModal,
    ]),
  )
  const $navContainer = useRef(null)
  useOnClickOutside($navContainer, () => _onClearNavAction())

  return (
    <>
      <AnimatePresence>
        {_nav && (
          <motion.div
            initial={{ y: 150, x: '-50%' }}
            exit={{ y: 150, x: '-50%' }}
            animate={{ y: 0, x: '-50%' }}
            className={clsx(
              'fixed left-1/2 z-80 px-5 py-4',
              _nav === NAV.TOP ? 'top-0' : 'bottom-0',
            )}
            ref={$navContainer}
          >
            <NavAction
              action={_navAction}
              _nav={_nav}
              session={session}
              providers={providers}
            />
            <motion.div
              className='bg-back/[0.05] relative flex h-12 rounded-md shadow-md backdrop-blur-md dark:shadow-xl el:h-16'
              whileHover={{ scale: 1.2 }}
            >
              <div className='flex h-full min-w-14 items-center rounded-l-md bg-black/[0.07] dark:bg-white/[0.07]'>
                <div
                  className='Anim flex h-full w-14 cursor-pointer items-center rounded-l-md bg-primary p-2 lg:p-2 el:p-3'
                  onMouseEnter={() => {
                    _setCursor(CURSOR.LOGO)
                  }}
                  onMouseLeave={() => {
                    _setCursor(undefined)
                  }}
                  onClick={() => {
                    _onToggleModal(MODAL.APP_INFO)
                    _setCursor(undefined)
                  }}
                >
                  <IceJiLogo dark={!_dark} />
                </div>
                <div className='flex h-full items-center fill-foreground px-4 [&>div]:mx-2 [&>div]:h-full'>
                  <motion.div
                    className='cursor-pointer'
                    animate={{ width: 16 }}
                    whileHover={{ width: 28, scale: 1.4, y: -13 }}
                    onClick={() => {
                      _onToggleNavAction(NAV_ACTION.USER)
                      _setCursor(undefined)
                    }}
                  >
                    <Icon.User />
                  </motion.div>
                  <motion.div
                    className='cursor-pointer'
                    animate={{ width: 18 }}
                    whileHover={{ width: 28, scale: 1.4, y: -13 }}
                    onClick={() => {
                      _onToggleNavAction(NAV_ACTION.CART)
                      _setCursor(undefined)
                    }}
                  >
                    <Icon.Cart />
                  </motion.div>
                </div>
              </div>
              <div className='flex grow items-center justify-end rounded-r-md border border-black/[0.07] px-4 dark:border-white/[0.07]'>
                <motion.div className='flex h-full fill-foreground [&>div]:mx-2 [&>div]:h-full'>
                  <motion.div
                    className='cursor-pointer'
                    animate={{ width: 18 }}
                    whileHover={{ width: 28, scale: 1.4, y: -13 }}
                    onClick={() => {
                      _onToggleNavAction(NAV_ACTION.SETTINGS)
                      _setCursor(undefined)
                    }}
                  >
                    <Icon.Settings />
                  </motion.div>
                  <motion.div
                    className='cursor-pointer'
                    animate={{ width: 18 }}
                    whileHover={{ width: 28, scale: 1.4, y: -13 }}
                    onClick={() => {
                      _onToggleAudio()
                      _onClearNavAction()
                      _setCursor(undefined)
                    }}
                  >
                    {_audio ? <Icon.SoundOn /> : <Icon.SoundOff />}
                  </motion.div>
                  <motion.div
                    className='cursor-pointer'
                    animate={{ width: 18 }}
                    whileHover={{ width: 28, scale: 1.4, y: -13 }}
                    onClick={() => {
                      _onToggleDark()
                      _onClearNavAction()
                      _setCursor(undefined)
                    }}
                  >
                    {_dark ? <Icon.MoonStar /> : <Icon.Sun />}
                  </motion.div>
                  <motion.div
                    className='cursor-pointer'
                    animate={{ width: 18 }}
                    whileHover={{ width: 28, scale: 1.4, y: -13 }}
                    onClick={() => {
                      _onToggleNavAction(NAV_ACTION.MENU_CANVAS)
                      _setCursor(undefined)
                    }}
                  >
                    {_navAction === NAV_ACTION.MENU_CANVAS ? (
                      <Icon.Close />
                    ) : (
                      <Icon.Menu />
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
