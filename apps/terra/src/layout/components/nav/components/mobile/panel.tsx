import type { Dispatch, SetStateAction } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import NavigationPanel from './panel.navigation'
import SettingsPanel from './panel.settings'

function Panel({
  showPanel,
  setShowPanel,
  panelState,
  _dark,
  _setDark,
}: {
  showPanel: boolean
  setShowPanel: Dispatch<SetStateAction<boolean>>
  panelState: string
  _dark: boolean
  _setDark: (v: boolean) => void
}) {
  return (
    <AnimatePresence>
      {showPanel && (
        <motion.div
          initial={{ opacity: 0, x: 300, height: 270, width: 256 }}
          animate={{ opacity: 1, x: 0, height: 270, width: 256 }}
          exit={{ opacity: 0, x: 300, height: 0, width: 0 }}
          transition={{ ease: [0.43, 0.13, 0.23, 0.96], duration: 0.5 }}
          className='Anim h-64 w-64 overflow-hidden rounded-lg bg-black/10 backdrop-blur-md dark:bg-white/10'
        >
          <div className='bg-quaternary-2 dark:bg-primary-0 flex justify-between px-4 py-2 font-black uppercase text-white dark:text-black'>
            <h6>{panelState}</h6>
            <p onClick={() => setShowPanel(false)}>x</p>
          </div>
          <div className='h-[calc(100%-2.5rem)] p-3'>
            {panelState === 'settings' ? (
              <SettingsPanel _dark={_dark} _setDark={_setDark} />
            ) : (
              <NavigationPanel />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Panel
