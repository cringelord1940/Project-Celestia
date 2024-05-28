import { motion } from 'framer-motion'
import clsx from 'clsx'
import { IconDev, IconImage, IconPresent } from '../../../assets'
import { useUiState } from '@/store'

export default function Header({
  children,
  title = '',
  subTitle = '',
  icon = false,
  className,
}: {
  children?: React.ReactNode
  title?: string
  subTitle?: string
  icon?: boolean
  className?: string
}) {
  const { parent: animP, children: animC } = {
    parent: (delay: number) => ({
      hidden: { visibility: 'hidden', y: 50, opacity: 0 },
      show: {
        visibility: 'visible',
        y: 0,
        opacity: 1,
        transition: {
          staggerChildren: delay,
        },
      },
    }),
    children: {
      hidden: { visibility: 'hidden', y: 50, opacity: 0 },
      show: { visibility: 'visible', y: 0, opacity: 1 },
    },
  }
  const _dark = useUiState((state) => state.dark)

  return (
    <motion.div
      variants={animP(0.3)}
      initial='hidden'
      animate='show'
      className={clsx(
        'm-container pointer-events-none absolute flex w-full flex-col justify-center pl-4 sm:pl-8 md:pl-20',
        className && className,
      )}
    >
      <motion.h2
        variants={animC}
        className='text-quaternary-2 dark:text-primary-0 xxl:text-7xl text-3xl font-semibold uppercase md:text-5xl'
      >
        {subTitle}
      </motion.h2>
      <motion.h1
        variants={animC}
        className={clsx(
          'xxl:-mt-12 xxl:text-[13rem] mt-0 text-7xl font-semibold uppercase md:-mt-4 md:text-9xl',
          _dark ? 'text-outline-dark' : 'text-outline',
        )}
      >
        {title}
      </motion.h1>
      {children && (
        <motion.div
          variants={animC}
          className='xxl:left-40 relative left-28 w-3/5 rounded-md bg-white/10 pb-6 pt-5 backdrop-blur-md lg:left-48 lg:w-1/2 lg:pb-12 lg:pt-10'
        >
          <div className='-ml-20 lg:-ml-36'>{children}</div>
        </motion.div>
      )}
      {icon && (
        <motion.div variants={animC} className='flex space-x-10'>
          <IconDev className='Anim AnimOpacity-40' />
          <IconImage className='Anim AnimOpacity-40' />
          <IconPresent className='Anim AnimOpacity-40' />
        </motion.div>
      )}
    </motion.div>
  )
}
