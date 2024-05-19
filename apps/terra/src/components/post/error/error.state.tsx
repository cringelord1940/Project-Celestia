import { SetNavStateDefault } from '@global/func/state'

const PageState = ({ title }: { title: string }) => (
  <SetNavStateDefault pageTitle={title + ' | Error'} />
)

export { PageState }
