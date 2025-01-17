import Image from 'next/legacy/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const MockupGallery = ({ mockupGalleryData }: { mockupGalleryData: any }) => {
  const { scrollY } = useScroll()
  const X = useTransform(scrollY, [2000, 2800], [0, -820])
  const springX = useSpring(X, { damping: 20, mass: 0.1, stiffness: 60 })
  return (
    <motion.div className='w-full'>
      <motion.div
        style={{ x: springX }}
        className='inline-flex space-x-6 overflow-visible'
      >
        {mockupGalleryData.map((v: any, i: number) => (
          <div
            className='xxl:h-[600px] xxl:w-[300px] relative h-[300px] w-[140px] sm:h-[380px] sm:w-[180px]'
            key={i}
          >
            <Image
              className='pointer-events-none'
              src={v.url}
              alt={'Gallery_' + i}
              //   width={v.width}
              //   height={v.height}
              layout='fill'
              objectFit='scale-down'
              placeholder='blur'
              blurDataURL={
                'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
              }
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export { MockupGallery }
