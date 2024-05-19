'use client'

import { UI } from '@global/store'
import { Dark } from '@nexel/cosmos/assets/icons/dark'

export const ToggleDark = () => {
  const _dark = UI((state) => state.dark)
  const _setDark = UI((state) => state.setDark)
  return (
    <>
      <div
        className='h-6 w-6 cursor-pointer fill-black dark:fill-white xl:hidden el:h-8 el:w-8'
        onClick={() => {
          _setDark(!_dark)
        }}
      >
        <Dark />
      </div>
    </>
  )
}
