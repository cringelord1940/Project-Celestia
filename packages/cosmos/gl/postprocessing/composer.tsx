import { useMemo, useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import {
  RenderPass,
  EffectComposer,
  ShaderPass,
  EffectPass,
  Effect,
} from 'postprocessing'

export interface FxComposerInput {
  Pass?: ShaderPass[] | ShaderPass
  Effect?: Effect[] | Effect
  onBeforeSetPass?: (input: {
    Composer: EffectComposer
    renderScene: RenderPass
  }) => void
  onAfterSetPass?: (input: {
    Composer: EffectComposer
    renderScene: RenderPass
  }) => void
}

const FxComposer = (FX: FxComposerInput) => {
  const { gl, scene, camera, size } = useThree()
  const Composer = useMemo(() => {
    const Composer = new EffectComposer(gl)
    const renderScene = new RenderPass(scene, camera)
    Composer.addPass(renderScene)
    FX.onBeforeSetPass && FX.onBeforeSetPass({ Composer, renderScene })
    if (FX.Effect) {
      Array.isArray(FX.Effect)
        ? FX.Effect.map((E: Effect) =>
            Composer.addPass(new EffectPass(camera, E)),
          )
        : Composer.addPass(new EffectPass(camera, FX.Effect))
    }

    if (FX.Pass) {
      Array.isArray(FX.Pass)
        ? FX.Pass.map((P: ShaderPass) => {
            Composer.addPass(P)
          })
        : Composer.addPass(FX.Pass)
    }
    FX.onAfterSetPass && FX.onAfterSetPass({ Composer, renderScene })

    return Composer
  }, [camera, gl, scene, FX.Pass, FX.Effect])

  function EffectComponent() {
    useEffect(() => {
      Composer.setSize(size.width, size.height)
    }, [])

    useFrame(() => {
      Composer.render()
    }, 1)
    return null
  }

  return { EffectComponent }
}

export { FxComposer }
