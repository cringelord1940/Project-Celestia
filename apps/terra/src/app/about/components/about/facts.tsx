import Image from 'next/image'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { about as CSS } from '../../styles'
import ImgFacts1 from 'public/page/about/Facts_1@2x.png'
import ImgFacts2 from 'public/page/about/Facts_2@2x.png'

import Title from './components/title'

export default function Facts({
  animConf,
  _dark,
}: {
  animConf: any
  _dark: boolean
}) {
  const { parent, children } = animConf.stagger_yUp_O
  const newParent = (delay: number) => {
    const X = parent(0.3)
    X.show.transition.delayChildren = delay
    return X
  }

  const factsContentCSS = CSS.FactsContent

  return (
    <div className='h-full relative w-full'>
      <div className='xxl:justify-center xxl:px-0 absolute right-0 flex h-full items-center justify-end pr-12'>
        <motion.div
          variants={newParent(0.7)}
          initial='hidden'
          animate='show'
          className='xxl:w-full relative flex h-3/5 w-3/5 flex-col items-end md:h-3/4'
        >
          <motion.div
            variants={children}
            className='xxl:right-32 relative right-20 overflow-hidden rounded-xl md:right-40'
          >
            <Image src={ImgFacts1} width={767} height={450} alt='IceJI Photo' />
          </motion.div>
          <motion.div
            variants={children}
            className='xxl:-mt-24 -mt-8 overflow-hidden rounded-xl sm:-mt-20 md:-mt-12'
          >
            <Image src={ImgFacts2} width={447} height={450} alt='IceJI Photo' />
          </motion.div>
        </motion.div>
      </div>
      <Title title='of me' subTitle='Facts'>
        <motion.div
          variants={newParent(1)}
          initial='hidden'
          animate='show'
          className={clsx(
            factsContentCSS.base,
            _dark ? factsContentCSS.dark : factsContentCSS.light,
          )}
        >
          <motion.div variants={children}>
            <p>I despise </p>
            <h6>CODING</h6>
            <p> but adore when it makes the</p>
            <h5>world's DIFFERENCE.</h5>
          </motion.div>
          <motion.div variants={children}>
            <p>I'm an</p> <h6>introvert</h6>
            <p>and</p> <h6>extrovert</h6> <p>at the</p>
            <h6>SAME TIME</h6>
          </motion.div>
          <motion.div variants={children}>
            <p>I</p>
            <h6>CAN'T STOP</h6>
            <p>developing and amplifying </p>
            <h5>MY SKILLS.</h5>
          </motion.div>
          <motion.div variants={children}>
            <p>I would like to</p>
            <h6>travel</h6>
            <p>and</p>
            <h6>explore</h6>
            <p>the world</p>
          </motion.div>
          <motion.div variants={children}>
            <p>I not sure know what</p>
            <h6>impossible means</h6>
            <p>because it's only </p>
            <h5>POSSIBLE.</h5>
          </motion.div>
          <p></p>
          <motion.div variants={children}>
            <h6>I always</h6>
            <p>do what I enjoy and</p>
            <h5>NEVER</h5>
            <p>stop doing it.</p>
          </motion.div>
        </motion.div>
      </Title>
    </div>
  )
}
