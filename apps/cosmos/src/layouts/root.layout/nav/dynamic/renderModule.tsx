import { DynamicNavModule, NAV_DYN_TYPE, CURSOR } from '@/store'
import {
  BackModule,
  ScrollProgressModule,
  ShareModule,
  External_linkModule,
} from './modules'

interface renderModuleProps {
  module: DynamicNavModule
  _setCursor: (C: CURSOR | undefined) => void
  iconAnimation: {
    animate: any
    whileHover: any
  }
}
export const RenderModule: React.FC<renderModuleProps> = ({
  module,
  _setCursor,
  iconAnimation,
}) => {
  switch (module.type) {
    case NAV_DYN_TYPE.PROGRESS:
      return (
        <>
          <ScrollProgressModule
            iconAnimation={iconAnimation}
            _setCursor={_setCursor}
            dataState={module}
          />
        </>
      )
    case NAV_DYN_TYPE.BACK:
      return (
        <>
          <BackModule _setCursor={_setCursor} dataState={module} />
        </>
      )
    case NAV_DYN_TYPE.SHARE:
      return (
        <>
          <ShareModule _setCursor={_setCursor} dataState={module} />
        </>
      )
    case NAV_DYN_TYPE.EXTERNAL_LINK:
      return (
        <>
          <External_linkModule _setCursor={_setCursor} dataState={module} />
        </>
      )
    default:
      return <></>
  }
}
