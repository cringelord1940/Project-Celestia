'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { aFooter } from '@global/config/config.animation'

export default function CreditText() {
  return (
    <div className='mt-2 flex items-center text-xs md:mt-0 md:text-base'>
      <motion.p
        initial={aFooter.initial}
        animate={aFooter.animate}
        transition={aFooter.transition(0.2)}
      >
        <Link
          href='https://cosmos.theiceji.com'
          className='Anim AnimOpacity-60 cursor-pointer pr-2'
        >
          Launch Cosmos
        </Link>
        <span className='hidden opacity-40 md:inline-flex'>
          | Copyright©{new Date().getFullYear()} by
        </span>
        <a
          href='http://TheIceJI.com/home'
          className='Anim AnimOpacity-60 hidden pl-1 md:inline-flex'
        >
          Jirayu Ninlapun
        </a>
      </motion.p>
    </div>
  )
}
