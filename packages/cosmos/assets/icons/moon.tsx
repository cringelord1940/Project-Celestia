import clsx from 'clsx'

const Moon = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        viewBox='0 0 19.921 20'
        className={clsx('h-full w-full fill-inherit', className)}
      >
        <g transform='translate(-98.079 -458)'>
          {/* <ellipse
            cx='9.5'
            cy='10'
            rx='9.5'
            ry='10'
            transform='translate(99 458)'
            opacity='0.2'
          /> */}
          <path
            d='M41.164,30.984l-.007-.108a.9.9,0,0,0-1.672-.433,5.406,5.406,0,1,1-7.423-7.423.9.9,0,0,0-.433-1.672l-.109-.007c-.089-.006-.177-.011-.266-.011a9.921,9.921,0,1,0,9.921,9.921C41.175,31.16,41.17,31.072,41.164,30.984Z'
            transform='translate(76.746 436.75)'
          />
        </g>
      </svg>
    </>
  )
}

export { Moon }
