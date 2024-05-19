import { CreateProgress } from '@nexel/nextjs/views/module.nprogress'
import { Toast } from '@nexel/nextjs/views/module.toast'
import { theme } from '@config'
import { Modal } from './modal'

export const GlobalComponent = () => {
  return (
    <>
      <CreateProgress color={theme.color.primary} />
      <Toast />
      <Modal />
    </>
  )
}
