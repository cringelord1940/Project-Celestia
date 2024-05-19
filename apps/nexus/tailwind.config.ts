import { theme } from './global/config'
import { DefaultTailwindConfig } from '@nexel/nextjs/views/theme'
import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const TailwindConfig = {
  ...DefaultTailwindConfig.Extend(theme.color, [nextui()]),
} as Config

export default TailwindConfig
