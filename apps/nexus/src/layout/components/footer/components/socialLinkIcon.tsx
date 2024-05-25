import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa6'
import { aFooterSocialIcon } from '@global/config/config.animation'

export default function SocialLinkIcon({
  name,
  icon,
  href,
  index,
}: {
  name: string
  icon: string
  href: string
  index: number
}) {
  return (
    <motion.div
      initial={aFooterSocialIcon.initial}
      animate={aFooterSocialIcon.animate}
      transition={aFooterSocialIcon.transition(index === 0 ? 0 : index / 10)}
    >
      <Link href={href} className='Anim opacity-40 hover:opacity-100'>
        {SocialIconGenerator(name)}
      </Link>
    </motion.div>
  )
}

const SocialIconGenerator = (name: string) => {
  if (name === 'Facebook') {
    return <FaFacebookF />
  } else if (name === 'Instagram') {
    return <FaInstagram />
  } else if (name === 'Youtube') {
    return <FaYoutube />
  } else if (name === 'Mail') {
    return <FaEnvelope />
  } else {
    return <></>
  }
}
