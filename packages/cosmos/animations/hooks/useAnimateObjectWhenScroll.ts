'use client'

import { useRef, useState, useEffect } from 'react'
import { useScroll, useTransform, useSpring } from 'framer-motion'

interface UseScrollAnimation {
  setScrollRange?: ((rect?: DOMRect) => [number, number]) | [number, number]
  setValueRange?:
    | ((rect?: DOMRect, ref?: HTMLDivElement | null) => [number, number])
    | [number, number]
  onAnimate?: () => void
  onResize?: (ev?: UIEvent) => void
}

export const useAnimateObjectWhenScroll = ({
  setScrollRange,
  setValueRange,
  onAnimate,
  onResize,
}: UseScrollAnimation) => {
  const $ref = useRef<HTMLDivElement | null>(null)
  const [rect, setRect] = useState<DOMRect | undefined>(undefined)
  const { scrollY } = useScroll()

  useEffect(() => {
    const handleResize = (ev?: UIEvent) => {
      if ($ref.current) {
        const ref = $ref.current
        const R = ref.getBoundingClientRect()
        setRect(R)
        onResize && onResize(ev)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [$ref])

  const scrollRange = setScrollRange
    ? typeof setScrollRange === 'function'
      ? setScrollRange(rect)
      : setScrollRange
    : [rect.top - 1000, rect.bottom]

  const valueRange = setValueRange
    ? typeof setValueRange === 'function'
      ? setValueRange(rect, $ref.current)
      : setValueRange
    : [0, -rect.width]

  const X = useTransform(scrollY, scrollRange, valueRange)
  const motionValue = useSpring(X, { damping: 20, mass: 0.1, stiffness: 60 })

  return {
    ref: $ref,
    motionValue,
  }
}
