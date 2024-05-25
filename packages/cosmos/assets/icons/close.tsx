import clsx from 'clsx'

const Close = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        viewBox='0 0 17.678 17.678'
        className={clsx('h-full w-full fill-inherit', className)}
      >
        <g transform='translate(-1871.161 -37.661)'>
          <rect
            width='22'
            height='3'
            rx='1.5'
            transform='translate(1871.161 53.218) rotate(-45)'
          />
          <rect
            width='22'
            height='3'
            rx='1.5'
            transform='translate(1873.282 37.661) rotate(45)'
          />
        </g>
      </svg>
    </>
  )
}

export { Close }
