'use client'

import { useShallow } from 'zustand/react/shallow'
import { useUiState, MODAL } from '@/store'
import { IceJiLogo } from '@components/logo/IceJi'

export const Logo = () => {
  const [_dark, _onToggleModal] = useUiState(
    useShallow((st) => [st.dark, st.onToggleModal]),
  )
  return (
    <>
      <IceJiLogo
        dark={_dark}
        events={{ onClick: () => _onToggleModal(MODAL.APP_INFO) }}
      />
    </>
  )
}
