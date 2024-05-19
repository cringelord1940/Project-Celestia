import { Logger as logger } from '@nestjs/common'

type colorKey =
  | 'reset'
  | 'bright'
  | 'dim'
  | 'underscore'
  | 'blink'
  | 'reverse'
  | 'hidden'
  | 'red'
  | 'black'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'magenta'
  | 'cyan'
  | 'white'
  | 'gray'
  | 'crimson'

const colors: { [Key in colorKey]: string } = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  gray: '\x1b[90m',
  crimson: '\x1b[38m',
}

const backgroundColors: { [Key: string]: string } = {
  black: '\x1b[40m',
  red: '\x1b[41m',
  green: '\x1b[42m',
  yellow: '\x1b[43m',
  blue: '\x1b[44m',
  magenta: '\x1b[45m',
  cyan: '\x1b[46m',
  white: '\x1b[47m',
  gray: '\x1b[100m',
  crimson: '\x1b[48m',
}

const pattern = (msg: string, suffix?: string) => {
  const suffixMsg = suffix
    ? ` ${backgroundColors.cyan}${suffix}${colors.reset}`
    : ''
  return `${colors.cyan}[Celestia]${colors.reset} ${msg}${suffixMsg}`
}

type LogLevel = 'fatal' | 'log' | 'verbose' | 'warn' | 'debug' | 'error'

const log = (level: LogLevel, msg: string, color: string, suffix?: string) => {
  const coloredMsg = `${colors[color]}${msg}${colors.reset}`
  const formattedMsg = pattern(coloredMsg, suffix)
  logger[level](formattedMsg)
}

export const Logger = {
  fatal: (msg: string, color?: colorKey, suffix?: string) =>
    log('fatal', msg, color || 'white', suffix),
  log: (msg: string, color?: colorKey, suffix?: string) =>
    log('log', msg, color || 'green', suffix),
  verbose: (msg: string, color?: colorKey, suffix?: string) =>
    log('verbose', msg, color || 'cyan', suffix),
  warn: (msg: string, color?: colorKey, suffix?: string) =>
    log('warn', msg, color || 'yellow', suffix),
  debug: (msg: string, color?: colorKey, suffix?: string) =>
    log('debug', msg, color || 'gray', suffix),
  error: (msg: string, color?: colorKey, suffix?: string) =>
    log('error', msg, color || 'red', suffix),
}
