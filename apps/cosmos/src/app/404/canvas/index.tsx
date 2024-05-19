'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Canvas as ThreeCanvas } from '@react-three/fiber'
import { StatsGl } from '@react-three/drei'
import { useAppState } from '@/store'
import { useOptimization } from '@nexel/cosmos/gl/hooks'
import Scene from './scene'

const Canvas = () => {
  const [_gpuTier] = useAppState((st) => [st.gpuTier])
  const [antialias, setAntialias] = useState(true)
  const debug = useSearchParams().get('debug')

  useEffect(() => {
    const pixelRatio = window.devicePixelRatio
    if (pixelRatio > 1) {
      setAntialias(false)
    }
  }, [])

  const getDRP: () => number[] = () => {
    if (_gpuTier?.fps) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { drp } = useOptimization(_gpuTier.tier, 'tier')
      return drp
    }
    return [1, 1]
  }

  return (
    <div className='pointer-events-none absolute z-10 h-full w-full overflow-hidden'>
      <ThreeCanvas
        dpr={getDRP() as [number, number]}
        gl={{
          powerPreference: 'high-performance',
          alpha: true,
          antialias: antialias,
          stencil: false,
          depth: true,
        }}
        linear
        shadows
      >
        <Scene />
        {debug && <StatsGl />}
      </ThreeCanvas>
    </div>
  )
}

export { Canvas }
