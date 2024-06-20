import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { DynamicNavShare, CURSOR } from '@/store'
import { Share, Down } from '@components/icons'
import { ShareItem, CopyToClipboard } from './share.item'

interface ShareModuleProps {
  dataState: DynamicNavShare
  _setCursor: (C: CURSOR | undefined) => void
}

export const ShareModule: React.FC<ShareModuleProps> = ({
  dataState: _dataState,
  _setCursor,
}) => {
  const [Show, setShow] = useState(false)

  return (
    <>
      <motion.div
        className='relative aspect-square cursor-pointer p-1'
        onClick={() => {
          _setCursor(undefined)
          setShow((state) => !state)
        }}
      >
        <div
          className={clsx(
            'Anim flex h-full w-full rounded-full',
            Show
              ? 'border border-dashed border-foreground/60'
              : 'bg-foreground/[0.07] hover:bg-foreground/40',
          )}
        >
          {Show ? (
            <Down className='m-auto text-xl' />
          ) : (
            <Share className='m-auto text-xl' />
          )}
        </div>
        <AnimatePresence mode='wait'>
          {Show && (
            <>
              <motion.div
                className='absolute bottom-16 right-0 flex flex-col-reverse items-end'
                // variants={animList}
                exit={{ opacity: 0 }}
              >
                {_dataState.social.map((socialName, index) => (
                  <ShareItem
                    socialName={socialName}
                    _dataState={_dataState}
                    key={socialName}
                    index={index}
                  />
                ))}
                <CopyToClipboard
                  _dataState={_dataState}
                  index={_dataState.social.length}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
