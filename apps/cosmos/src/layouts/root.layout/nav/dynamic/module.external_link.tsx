import Link from 'next/link'
import { motion } from 'framer-motion'
import { DynamicNavExternal_link, CURSOR } from '@/store'

import { ExternalLink } from '@components/icons'

interface External_linkModuleProps {
  dataState: DynamicNavExternal_link
  _setCursor: (C: CURSOR | undefined) => void
}

export const External_linkModule: React.FC<External_linkModuleProps> = ({
  dataState: _dataState,
  _setCursor,
}) => {
  return (
    <>
      <motion.div
        className='aspect-square cursor-pointer p-1'
        onClick={() => {
          _setCursor(undefined)
        }}
      >
        <Link
          className='Anim flex h-full w-full rounded-full bg-foreground/[0.07] hover:bg-primary hover:text-background'
          href={_dataState.href}
        >
          <ExternalLink className='m-auto text-xl' />
        </Link>
      </motion.div>
    </>
  )
}
