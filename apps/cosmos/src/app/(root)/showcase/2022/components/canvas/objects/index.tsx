// import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {
  useCubeTexture,
  useTexture,
  MeshDistortMaterial,
  Stars,
} from '@react-three/drei'

import { useResource } from '@nexel/cosmos/gl/hooks'
import { theme } from '@config'
import Instances from './instances'

const Objects = () => {
  const bumpMap = useTexture('/three/blob/alphaMap.jpg')
  const envMap = useCubeTexture(
    ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
    { path: '/three/blob/cube/' },
  )

  const [setMaterial, material] = useResource(false)

  const r_Star = useRef<any>(null)
  useFrame(() => {
    if (r_Star.current) {
      r_Star.current.rotation.y += 0.0005
    }
  })

  return (
    <>
      <MeshDistortMaterial
        ref={setMaterial}
        envMap={envMap}
        bumpMap={bumpMap}
        color={theme.color.extend.background[1]}
        roughness={0.1}
        metalness={1}
        bumpScale={0.02}
        clearcoat={1}
        clearcoatRoughness={1}
        radius={1.2}
        distort={0.4}
      />
      {material && <Instances material={material} />}
      <group rotation={[0, 0, 0]}>
        <Stars
          ref={r_Star}
          radius={100}
          depth={50}
          count={5000}
          factor={3}
          saturation={0}
          fade
        />
      </group>
      {/* <Obj /> */}
    </>
  )
}

export default Objects
