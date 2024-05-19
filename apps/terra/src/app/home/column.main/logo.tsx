'use client'

import { UI } from '@global/store'
import { IceJiLogo } from '@components/logo/IceJi'

export const Logo = () => {
  const _dark = UI((state) => state.dark)
  const _setModalAppInfo = UI((state) => state.setModalAppInfo)
  return (
    <>
      <IceJiLogo
        dark={_dark}
        events={{ onClick: () => _setModalAppInfo(true) }}
      />
    </>
  )
}
