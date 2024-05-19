/**
 * @see https://gist.github.com/zentala/1e6f72438796d74531803cc3833c039c
 * @returns The file size in human-readable format
 */
export const KB = 1024 as const

export function bytesToKB(bytes: number): number {
  return bytes / KB
}

export const formatKBytes = (kb: number, decimals = 2) =>
  formatBytes(kb * KB, decimals)
export function formatBytes(bytes: number, decimals = 2) {
  if (bytes <= 0) return '0 Bytes'

  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(KB))

  return (
    parseFloat((bytes / Math.pow(KB, i)).toFixed(decimals)) + ' ' + sizes[i]
  )
}

export function formatToLeastDecimals(value: number, decimals = 2) {
  return parseFloat(value.toFixed(decimals))
}

export function formatSeconds(seconds: number) {
  if (seconds === 0) return '0 seconds'

  const units = [
    { name: 'year', limit: 31536000, in_seconds: 31536000 },
    { name: 'month', limit: 2592000, in_seconds: 2592000 },
    { name: 'week', limit: 604800, in_seconds: 604800 },
    { name: 'day', limit: 86400, in_seconds: 86400 },
    { name: 'hour', limit: 3600, in_seconds: 3600 },
    { name: 'minute', limit: 60, in_seconds: 60 },
    { name: 'second', limit: 1, in_seconds: 1 },
  ]
  let output = ''
  let unit: (typeof units)[number]
  let unitCount: number
  for (let i = 0; i < units.length; i++) {
    unit = units[i]
    unitCount = Math.floor(seconds / unit.in_seconds)
    if (unitCount >= 1) {
      output += ' ' + unitCount + ' ' + unit.name + (unitCount > 1 ? 's' : '')
      seconds -= unitCount * unit.in_seconds
    }
  }
  return output.trim()
}

export function abbreviateNumber(value: number): string {
  if (!value) return '0'

  const suffixes = ['', 'k', 'm', 'b', 't']
  let index = 0

  while (value >= 1000 && index < suffixes.length - 1) {
    value /= 1000
    index++
  }

  const formattedValue = value.toFixed(value < 10 && index > 0 ? 1 : 0)

  return `${formattedValue}${suffixes[index]}`
}

export function getRandomInt(min: number, max: number) {
  const intMin = Math.ceil(min)
  const intMax = Math.floor(max)
  return Math.floor(Math.random() * (intMax - intMin + 1)) + intMin
}

export function numberWithCommas(value: number | string | undefined) {
  return value &&
    !Number.isNaN(typeof value === 'string' ? parseFloat(value) : value)
    ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : ''
}

export function isNumeric(value?: unknown) {
  return !isNaN(Number(value))
}

export const findClosest = (array: number[], target: number) => {
  return array.reduce((a, b) => {
    return Math.abs(b - target) < Math.abs(a - target) ? b : a
  })
}
