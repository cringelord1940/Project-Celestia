/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import {
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from 'react'
import { ResizeObserver } from '@juggle/resize-observer'
import {
  useScroll,
  useTransform,
  useSpring,
  motion,
  MotionValue,
} from 'framer-motion'
import { InnerHeight } from '@nexel/nextjs/libs/hooks/layouts'

export type OnScrollFunctionProps = {
  pageHeight: number
  motionValue: MotionValue<string>
  scrollY: MotionValue<number>
}

type OnScrollFunction = (value: OnScrollFunctionProps) => void

const SmoothScroll = ({
  children,
  physics = { damping: 13, mass: 0.1, stiffness: 55 },
  onScroll,
}: {
  children: React.ReactNode
  physics?: { damping: number; mass: number; stiffness: number }
  onScroll?: OnScrollFunction
}) => {
  // const defaultPhysics = { damping: 15, mass: 0.27, stiffness: 55 }
  const scrollRef = useRef(null)
  const [pageHeight, setPageHeight] = useState(0)

  const resizePageHeight = useCallback((entries: any) => {
    for (const entry of entries) {
      setPageHeight(entry.contentRect.height)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries),
    )
    if (scrollRef.current) {
      scrollRef && resizeObserver.observe(scrollRef.current)
    }
    return () => resizeObserver.disconnect()
  }, [scrollRef, resizePageHeight])

  const { scrollY } = useScroll()

  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const spring = useSpring(transform, physics)

  const windowHeight = InnerHeight(-1)
  const motionValue = useTransform(
    scrollY,
    [0, pageHeight - windowHeight],
    ['0%', '100%'],
  )

  useEffect(() => {
    onScroll && onScroll({ pageHeight, motionValue, scrollY })
  }, [onScroll, scrollY, pageHeight, motionValue])

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className='fixed left-0 top-0 w-full overflow-hidden overscroll-y-none will-change-transform'
      >
        {children}
      </motion.div>
      <div style={{ height: pageHeight }} />
    </>
  )
}

export { SmoothScroll }
