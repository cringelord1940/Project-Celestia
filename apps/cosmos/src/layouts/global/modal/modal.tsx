'use client'

import { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useShallow } from 'zustand/react/shallow'
import { useUiState, MODAL } from '@/store'
import { useOnClickOutside } from '@nexel/nextjs/libs/hooks/events'
import { AppInfoModal } from './modal.appInfo'
// import { SomethingModal } from './modal.something'

export const Modal = () => {
  const [_modal, _onClearModal] = useUiState(
    useShallow((st) => [st.modal, st.onClearModal]),
  )
  const $modal = useRef(null)
  useOnClickOutside($modal, () => _onClearModal())

  useEffect(() => {
    console.log({ _modal })
  }, [_modal])

  return (
    <>
      <AnimatePresence>
        {_modal !== undefined && (
          <>
            <motion.div
              className='bg-background/60 fixed left-0 top-0 z-100 flex h-dvh w-dvw items-center justify-center backdrop-blur-lg'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {_modal === MODAL.APP_INFO && (
                <AppInfoModal $ref={$modal} _onClearModal={_onClearModal} />
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
