import clsx from 'clsx'

const ArrowMinimal = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        viewBox='0 0 7 9'
        fill='none'
        className={clsx('h-full w-full fill-inherit', className)}
      >
        <path
          d='M6 1L1 4.5L6 8'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </>
  )
}

export { ArrowMinimal }
