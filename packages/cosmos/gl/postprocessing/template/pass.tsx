/* eslint-disable react/display-name */
import { useMemo } from 'react'
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

export const $Pass = (fxConfig = initialFxConfig) => {
  const [Pass, Material] = useMemo(() => {
    const Material = new ShaderMaterial({
      uniforms: {
        tDiffuse: { value: null },
        u_scale: { value: fxConfig.scale },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })
    const Pass = new ShaderPass(Material, 'tDiffuse')
    return [Pass, Material]
  }, [fxConfig])

  return { Pass, Material }
}
