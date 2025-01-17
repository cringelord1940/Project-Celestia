// File copy pasted from https://github.com/pmndrs/react-postprocessing/blob/master/src/util.tsx

import React, {
  forwardRef,
  useMemo,
  useLayoutEffect,
  MutableRefObject,
} from 'react'
import { Object3D } from 'three'
import { useThree } from '@react-three/fiber'
import { Effect, BlendFunction } from 'postprocessing'

type ObjectRef = MutableRefObject<Object3D>
type DefaultProps = Partial<{ blendFunction: BlendFunction; opacity: number }>

const isRef = (ref: any): ref is ObjectRef => !!ref.current

export const resolveRef = (ref: Object3D | ObjectRef) =>
  isRef(ref) ? ref.current : ref

export const wrapEffect = <T extends new (...args: any[]) => Effect>(
  effectImpl: T,
  defaultBlendMode: BlendFunction = BlendFunction.NORMAL,
) =>
  forwardRef<T, ConstructorParameters<typeof effectImpl>[0] & DefaultProps>(
    function Wrap(
      {
        blendFunction,
        opacity,
        ...props
      }: React.PropsWithChildren<DefaultProps & ConstructorParameters<T>[0]>,
      ref,
    ) {
      const invalidate = useThree((state) => state.invalidate)
      const effect: Effect = useMemo(() => new effectImpl(props), [props])

      useLayoutEffect(() => {
        effect.blendMode.blendFunction =
          !blendFunction && blendFunction !== 0
            ? defaultBlendMode
            : blendFunction
        if (opacity !== undefined) effect.blendMode.opacity.value = opacity
        invalidate()
      }, [blendFunction, effect.blendMode, opacity])
      return <primitive ref={ref} object={effect} dispose={null} />
    },
  )
