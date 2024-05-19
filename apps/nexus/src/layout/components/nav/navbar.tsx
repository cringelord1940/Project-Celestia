'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

import { useOnClickOutside } from '@nexel/nextjs/libs/hooks/events'
import { useAudio } from '@nexel/nextjs/libs/hooks/audio'

import { State, UI } from '@global/store'
import { eNavDropdownState } from '@global/store/ui.store'
import { aNav, aNavChildren } from '@global/config/config.animation'
import { IceJiLogo } from '@components/logo/IceJi'
import { Panel } from './components/mobile'

import NavMenuItem from './components/navMenuItem'
import { Icon } from '@nexel/cosmos/assets'

const NavBar = () => {
  const _setCursor = UI((state) => state.setCursor)
  const _dark = UI((state) => state.dark)
  const _audio = UI((state) => state.audio)
  const _setAudio = UI((state) => state.setAudio)
  const _setDark = UI((state) => state.setDark)
  const _showNav = UI((state) => state.showNav)
  const _navShowCanvas = UI((state) => state.navShowCanvas)
  const _setNavShowCanvas = UI((state) => state.setNavShowCanvas)
  const _setNavDropdown = UI((state) => state.setNavDropdown)
  const _navRoute = State((state) => state.navRoute)
  const _navRouteActiveState = State((state) => state.navRouteActiveState)
  const _backRoute = State((state) => state.backRoute)
  const _page = State((state) => state.page)
  const _setModalAppInfo = UI((state) => state.setModalAppInfo)

  const NavRef = useRef(null)
  useOnClickOutside(NavRef, () => _setNavDropdown(eNavDropdownState.NONE))

  const [audioPlaying, toggleAudio] = useAudio(_audio, _setAudio)
  const audioToggle = () => {
    toggleAudio()
    _setCursor(false)
  }
  const [showPanel, setShowPanel] = useState(false)
  const [panelState, setPanelState] = useState('')

  return (
    <>
      <AnimatePresence>
        {_showNav && (
          <motion.nav
            initial={aNav(_showNav).initial}
            exit={aNav(_showNav).exit}
            animate={aNav(_showNav).animate}
            transition={aNav(_showNav).transition(0)}
            className='fixed left-0 top-0 z-[400] w-screen px-5 py-4'
            ref={NavRef}
          >
            <div className='bg-back/[0.05] flex h-12 rounded-md shadow-md backdrop-blur-md dark:shadow-xl el:h-16'>
              <div className='flex h-full w-12 items-center rounded-l-md bg-black/[0.07] dark:bg-white/[0.07] md:w-1/2 xl:w-[320px] el:w-[468px]'>
                <div
                  className='Anim bg-quaternary-2 dark:bg-primary-0 flex h-full w-16 cursor-pointer items-center rounded-l-md p-2 lg:p-2 el:p-3'
                  onMouseEnter={() => {
                    _setCursor('logo')
                  }}
                  onMouseLeave={() => {
                    _setCursor(false)
                  }}
                  onClick={() => {
                    _setNavShowCanvas(false)
                    _setModalAppInfo(true)
                  }}
                >
                  <IceJiLogo dark={!_dark} />
                </div>
                <h6 className='hidden px-5 font-medium md:block'>{_page}</h6>
              </div>
              <div className='relative flex grow items-center justify-end rounded-r-md border border-black/[0.07] px-6 dark:border-white/[0.07] xl:justify-between'>
                <Link
                  className='Anim hover:bg-quaternary-3 dark:hover:bg-primary-0 absolute -left-2 hidden h-5 w-5 cursor-pointer rounded-full bg-black stroke-white p-1.5 dark:bg-white dark:stroke-black xl:block'
                  href={_backRoute}
                >
                  <Icon.ArrowMinimal />
                </Link>
                <motion.ul className='hidden xl:ml-2 xl:flex'>
                  {_navRoute.map((v, i) => (
                    <NavMenuItem
                      key={i}
                      index={i}
                      menuItem={v}
                      _navRouteActiveState={_navRouteActiveState}
                    />
                  ))}
                </motion.ul>
                <div className='ml-auto flex h-full items-center justify-end '>
                  <div className='mr-4 flex h-4 space-x-6 fill-black dark:fill-white'>
                    <Link
                      className='Anim h-[18px] cursor-pointer hover:scale-125'
                      href='https://nexus.theiceji.com'
                    >
                      <Icon.User />
                    </Link>
                    <Link
                      className='Anim h-[18px] cursor-pointer hover:scale-125'
                      href='https://nexus.theiceji.com/shop'
                    >
                      <Icon.Cart />
                    </Link>
                    <Icon.SeparatorLine />
                  </div>
                  <motion.div
                    className='flex h-4 space-x-4 fill-black dark:fill-white'
                    onMouseEnter={() => _setCursor('logo')}
                    onMouseLeave={() => _setCursor(false)}
                    onClick={() => {
                      _setCursor(false)
                    }}
                  >
                    <motion.div
                      className='cursor-pointer sm:hidden'
                      onClick={() => {
                        setPanelState('navigation')
                        setShowPanel(
                          panelState === 'navigation' ? !showPanel : true,
                        )
                        _setNavShowCanvas(false)
                      }}
                      initial={{ y: '-100%', rotateY: 0, visibility: 'hidden' }}
                      animate={{ y: 0, rotateY: 180, visibility: 'visible' }}
                      exit={{ y: '-100%', rotateY: 0, visibility: 'hidden' }}
                      transition={aNavChildren.transition(0.7)}
                    >
                      <Icon.Arrow />
                    </motion.div>
                    <motion.div
                      className='cursor-pointer sm:hidden'
                      onClick={() => {
                        setPanelState('settings')
                        setShowPanel(
                          panelState === 'settings' ? !showPanel : true,
                        )
                        _setNavShowCanvas(false)
                      }}
                      initial={aNavChildren.initial}
                      exit={aNavChildren.exit}
                      animate={aNavChildren.animate}
                      transition={aNavChildren.transition(0.8)}
                    >
                      <Icon.Settings />
                    </motion.div>
                    <motion.div
                      className='hidden cursor-pointer sm:block'
                      onClick={audioToggle}
                      initial={aNavChildren.initial}
                      exit={aNavChildren.exit}
                      animate={aNavChildren.animate}
                      transition={aNavChildren.transition(0.9)}
                    >
                      {audioPlaying ? <Icon.SoundOn /> : <Icon.SoundOff />}
                    </motion.div>
                    <motion.div
                      className='hidden cursor-pointer sm:block'
                      onClick={() => {
                        _setDark(!_dark)
                        _setCursor(false)
                        _setNavDropdown(eNavDropdownState.NONE)
                      }}
                      initial={aNavChildren.initial}
                      exit={aNavChildren.exit}
                      animate={aNavChildren.animate}
                      transition={aNavChildren.transition(1)}
                    >
                      <Icon.Dark />
                    </motion.div>
                    <motion.div
                      className='cursor-pointer'
                      onClick={() => {
                        _setNavShowCanvas(!_navShowCanvas)
                        _setCursor(false)
                        _setNavDropdown(eNavDropdownState.NONE)
                      }}
                      initial={aNavChildren.initial}
                      exit={aNavChildren.exit}
                      animate={aNavChildren.animate}
                      transition={aNavChildren.transition(1.1)}
                    >
                      {_navShowCanvas ? <Icon.Close /> : <Icon.Menu />}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
        <div className='fixed right-6 top-20 z-60'>
          <Panel
            showPanel={showPanel}
            panelState={panelState}
            setShowPanel={setShowPanel}
            _dark={_dark}
            _setDark={_setDark}
          />
        </div>
        {_page !== 'NOT FOUND' && (
          <div className='pointer-events-none fixed bottom-4 z-60 flex w-screen'>
            <p className='mx-auto rounded-md bg-black/10 px-3 py-1 text-xs backdrop-blur-lg dark:bg-white/10'>
              {_page}
            </p>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export { NavBar }
