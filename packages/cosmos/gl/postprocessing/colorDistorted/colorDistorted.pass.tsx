/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { ShaderMaterial, Vector2 } from 'three'
import { useFrame } from '@react-three/fiber'
import { ShaderPass } from 'postprocessing'

import vertexShader from './vertexShader.glsl'
import fragmentShader from './fragmentShader.glsl'

type tFxConfig = {
  scale: number
}

const initialFxConfig: tFxConfig = {
  scale: 0.07,
}

export const ColorDistortedPass = (fxConfig = initialFxConfig) => {
  const [colorDistortedPass, colorDistortedMaterial] = useMemo(() => {
    const colorDistortedMaterial = new ShaderMaterial({
      uniforms: {
        tDiffuse: { value: null },
        u_scale: { value: fxConfig.scale },
        u_time: { value: 0 },
        u_mouse: { value: new Vector2() },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })
    const colorDistortedPass = new ShaderPass(
      colorDistortedMaterial,
      'tDiffuse',
    )
    return [colorDistortedPass, colorDistortedMaterial]
  }, [fxConfig])

  useFrame(({ pointer, clock }) => {
    const centeredMousePos = new Vector2()
    centeredMousePos.set((pointer.x + 1) / 2, (pointer.y + 1) / 2)
    colorDistortedMaterial.uniforms.u_time.value = clock.getElapsedTime()
    colorDistortedMaterial.uniforms.u_mouse.value = centeredMousePos
  })

  return { colorDistortedPass, colorDistortedMaterial }
}
