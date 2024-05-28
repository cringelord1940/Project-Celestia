import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const FullScreenHeader = ({
  Title,
  Img,
  Tags,
  lang = 'en',
  ColorBg = '#000000',
}: {
  Title: string
  Img: string
  Tags?: string[]
  lang?: string
  ColorBg?: string
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
    <div
      className='relative flex h-dvh items-end justify-center overflow-hidden'
      style={{ backgroundColor: ColorBg }}
    >
      <div className='xxl:w-[1440px] container z-10 w-screen px-4'>
        <motion.div
          variants={animList}
          initial='initial'
          animate='animate'
          className='uppercase'
        >
          {Tags?.map((v: string, i: number) => (
            <motion.button
              className='Btn-white-40 Anim AnimTranslate-4 hover:bg-quaternary-2 dark:hover:bg-primary-0 mr-2 mt-2 uppercase hover:text-white dark:hover:text-black'
              key={i}
              variants={animItem}
            >
              {v}
            </motion.button>
          ))}
        </motion.div>
        <motion.h1
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='xxl:text-8xl mb-12 mt-1 text-3xl font-bold md:mt-0 md:text-7xl'
        >
          {Title}
        </motion.h1>
      </div>
      <motion.div className='absolute h-dvh w-screen' style={{ y: springY }}>
        <Image
          src={Img}
          alt={Title}
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

export { FullScreenHeader }
