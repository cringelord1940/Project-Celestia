import Link from 'next/link'
import { motion } from 'framer-motion'
import { DynamicNavBack, CURSOR } from '@/store'

import { Left } from '@components/icons'

interface BackModuleProps {
  dataState: DynamicNavBack
  _setCursor: (C: CURSOR | undefined) => void
}

export const BackModule: React.FC<BackModuleProps> = ({
  dataState: _dataState,
  _setCursor,
}) => {
  return (
    <>
      <motion.div
        className='aspect-square cursor-pointer p-1'
        // animate={iconAnimation.animate}
        // whileHover={iconAnimation.whileHover}
        onClick={() => {
          _setCursor(undefined)
        }}
      >
        <Link
          className='Anim flex h-full w-full rounded-full bg-foreground/[0.07] hover:bg-primary hover:text-background'
          href={_dataState.href}
        >
          <Left className='m-auto text-xl' />
        </Link>
      </motion.div>
    </>
  )
}
