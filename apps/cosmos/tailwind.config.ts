import { DefaultTailwindConfig } from '@nexel/nextjs/views/theme'
import type { Config } from 'tailwindcss'

const TailwindConfig = {
  ...DefaultTailwindConfig.Extend(),
} as Config

export default TailwindConfig
