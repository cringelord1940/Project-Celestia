import { useRef } from 'react'
import { motion } from 'framer-motion'

import { tNavRouteActiveState } from '@/store/state.extend'

const ScrollProgress = ({
  _navRouteActiveState,
}: {
  _navRouteActiveState: tNavRouteActiveState
}) => {
  const progressBar = useRef<HTMLDivElement | null>(null)
  if (_navRouteActiveState.scrollable) {
    return (
      <motion.div
        className='Anim-2 bg-quaternary-2 dark:bg-primary-0 absolute ml-[10px] h-0.5'
        style={{ width: _navRouteActiveState.motionValue }}
        transition={{ duration: 1 }}
      />
    )
  } else if (
    (_navRouteActiveState.scrollProgress ||
      _navRouteActiveState.scrollProgress === 0) &&
    _navRouteActiveState.pages
  ) {
    const initialValue = progressBar.current?.style
      ? progressBar.current.style.width
      : 0
    const animateValue =
      ((_navRouteActiveState.scrollProgress + 1) / _navRouteActiveState.pages) *
      100

    return (
      <motion.div
        className='Anim-2 bg-quaternary-2 dark:bg-primary-0 absolute ml-[10px] h-0.5'
        ref={progressBar}
        initial={{ width: initialValue + '%' }}
        animate={{ width: animateValue + '%' }}
        transition={{ duration: 1 }}
      />
    )
  } else return null
}

export default ScrollProgress
