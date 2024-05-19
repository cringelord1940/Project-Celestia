import { theme } from './global/config'
import { DefaultTailwindConfig } from '@nexel/nextjs/views/theme'
import type { Config } from 'tailwindcss'

const TailwindConfig = {
  ...DefaultTailwindConfig.Extend(theme.color, []),
} as Config

export default TailwindConfig
