/* eslint-disable react/display-name */
import { forwardRef, useMemo } from 'react'
import { ShaderMaterial } from 'three'
import { ShaderPass } from 'postprocessing'

import vertexShader from './vertexShader.glsl'
import fragmentShader from './fragmentShader.glsl'

type tFxConfig = {
  scale: number
}

const initialFxConfig: tFxConfig = {
  scale: 0.07,
}

export const $Component = forwardRef(
  ({ fxConfig = initialFxConfig }: { fxConfig?: tFxConfig }, ref) => {
    const [Pass] = useMemo(() => {
      const passMaterial = new ShaderMaterial({
        uniforms: {
          tDiffuse: { value: null },
          u_scale: { value: fxConfig.scale },
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      })
      const Pass = new ShaderPass(passMaterial, 'tDiffuse')
      return [Pass]
    }, [])

    return <primitive object={Pass} dispose={null} ref={ref} />
  },
)
