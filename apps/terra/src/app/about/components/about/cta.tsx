import { motion } from 'framer-motion'
import Link from 'next/link'
import clsx from 'clsx'

export default function CTA({
  animConf,
  _dark,
}: {
  animConf: any
  _dark: boolean
}) {
  const { parent, children } = animConf.stagger_yUp

  return (
    <motion.div
      variants={parent(0.2)}
      initial='hidden'
      animate='show'
      className='h-full flex w-full flex-col items-center justify-center'
    >
      <motion.h3
        variants={children}
        className='text-primary-0 xxl:text-4xl text-base font-semibold uppercase lg:text-3xl'
      >
        Anything else?
      </motion.h3>
      <motion.div
        variants={children}
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
