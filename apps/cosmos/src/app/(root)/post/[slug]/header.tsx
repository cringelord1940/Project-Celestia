'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface HeaderProps {
  title: string
  headerImage: {
    url: string
    width: number
    height: number
  }
  tag?: string[]
  lang?: string
}

export const Header: React.FC<HeaderProps> = ({
  title,
  headerImage,
  tag,
  lang = 'en',
}) => {
  const { scrollY } = useScroll()
  const Y = useTransform(scrollY, [0, 2000], [0, 1000])
  const springY = useSpring(Y, { damping: 20, mass: 0.1, stiffness: 60 })

  const animList = {
    initial: { x: 100 },
    animate: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        delay: 0,
        staggerChildren: 0.2,
      },
    },
  }

  const animItem = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { type: 'tween' },
  }

  return (
    <div className='relative flex h-dvh items-end justify-center overflow-hidden bg-background'>
      <div className='container z-10 w-dvw px-4 xl:w-[1024px]'>
        {tag && (
          <motion.div
            variants={animList}
            initial='initial'
            animate='animate'
            className='uppercase'
          >
            {tag.map((v: string, i: number) => (
              <motion.button
                className='Anim AnimTranslate-4 mr-2 mt-2 rounded-md border border-foreground/40 px-2 py-1 uppercase hover:bg-primary hover:text-white dark:hover:text-black'
                key={i}
                variants={animItem}
              >
                {v}
              </motion.button>
            ))}
          </motion.div>
        )}
        <motion.h1
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='2xl:text-8xl mb-12 mt-1 text-3xl font-bold md:mt-0 md:text-7xl'
        >
          {title}
        </motion.h1>
      </div>
      <motion.div className='absolute h-dvh w-screen' style={{ y: springY }}>
        <Image
          src={headerImage.url}
          alt={title}
          fill
          objectFit='cover'
          quality={100}
          placeholder='blur'
          blurDataURL={
            'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
          }
        />
      </motion.div>
      <div className='absolute h-80 w-screen bg-gradient-to-t from-background to-background/0'></div>
    </div>
  )
}
