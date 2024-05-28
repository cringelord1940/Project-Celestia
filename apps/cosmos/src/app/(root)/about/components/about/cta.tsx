import { motion } from 'framer-motion'
import Link from 'next/link'
import clsx from 'clsx'

export default function CTA({ _dark }: { _dark: boolean }) {
  const { animParent, animChildren } = {
    animParent: (delay: number) => ({
      hidden: { visibility: 'hidden', y: 100 },
      show: {
        visibility: 'visible',
        y: 0,
        transition: {
          staggerChildren: delay,
        },
      },
    }),
    animChildren: {
      hidden: { visibility: 'hidden', y: 100 },
      show: { visibility: 'visible', y: 0 },
    },
  }

  return (
    <motion.div
      variants={animParent(0.2)}
      initial='hidden'
      animate='show'
      className='flex h-full w-full flex-col items-center justify-center'
    >
      <motion.h3
        variants={animChildren}
        className='text-primary-0 xxl:text-4xl text-base font-semibold uppercase lg:text-3xl'
      >
        Anything else?
      </motion.h3>
      <motion.div
        variants={animChildren}
        className='flex flex-col items-center justify-center'
      >
        <Link
          href='about/skills'
          className={clsx(
            'Anim-2 AnimOpacity-40 AnimScale-sm xxl:text-10xl text-5xl font-bold uppercase lg:text-8xl',
            _dark ? 'text-outline-dark' : 'text-outline',
          )}
        >
          My skills?
        </Link>
        <Link
          href='/project'
          className={clsx(
            'Anim-2 AnimOpacity-40 AnimScale-sm xxl:text-10xl text-5xl font-bold uppercase lg:text-8xl',
            _dark ? 'text-outline-dark' : 'text-outline',
          )}
        >
          projects
        </Link>
      </motion.div>
    </motion.div>
  )
}
