import clsx from 'clsx'

const SeparatorLine = ({ className }: { className?: string }) => (
  <svg
    viewBox='0 0 2 23'
    className={clsx('h-full w-full fill-inherit', className)}
  >
    <rect width='2' height='23' rx='1' fill='inherit' opacity='0.2' />
  </svg>
)

export { SeparatorLine }
