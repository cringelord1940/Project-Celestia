import { motion } from 'framer-motion'
import clsx from 'clsx'
import { useShallow } from 'zustand/react/shallow'
import { useUiState, NAV, CURSOR } from '@/store'
import {
  // dynNavAnimationConfig,
  iconAnimationConfig,
} from '../animations/config'
import { RenderModule } from './renderModule'

export { UserModules } from './module.user'

interface DynamicNavModulesProps {
  _nav: NAV
  _setCursor: (c: CURSOR | undefined) => void
}

export const DynamicNavModules: React.FC<DynamicNavModulesProps> = ({
  _nav,
  _setCursor,
}) => {
  const [_dynamicNav] = useUiState(useShallow((st) => [st.dynamicNav]))
  const iconAnimation = iconAnimationConfig(_nav)

  if (_dynamicNav.length === 0) {
    return null
  }

  return (
    <>
      <div
        className={clsx(
          'flex grow items-center justify-end rounded-md border border-foreground/[0.07] bg-foreground/[0.05] shadow-md backdrop-blur-md',
          (_nav === NAV.TOP || _nav === NAV.BOTTOM) &&
            (_dynamicNav.length === 1 ? 'ml-2' : 'ml-2 px-2'),
          (_nav === NAV.LEFT || _nav === NAV.RIGHT) &&
            (_dynamicNav.length === 1
              ? 'my-2 flex-col rounded-b-md'
              : 'my-2 flex-col rounded-b-md py-2'),
        )}
      >
        <motion.div
          className={clsx(
            'flex fill-foreground',
            (_nav === NAV.TOP || _nav === NAV.BOTTOM) &&
              'h-full [&>div]:h-full',
            (_nav === NAV.LEFT || _nav === NAV.RIGHT) &&
              'w-full flex-col [&>div]:w-full',
          )}
        >
          {_dynamicNav.map((module) => (
            <RenderModule
              module={module}
              _setCursor={_setCursor}
              iconAnimation={iconAnimation}
            />
          ))}
        </motion.div>
      </div>
    </>
  )
}
